interface PodcastCardProps {
  podcast: Podcast;
  currentPlaying: number | null;
  isPlaying: boolean;
  favorites: number[];
  bookmarks: number[];
  onPlay: (chapterIndex?: number) => void;
  onToggleFavorite: () => void;
  onToggleBookmark: () => void;
  onShowEpisode: () => void;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  podcast,
  currentPlaying,
  isPlaying,
  favorites,
  bookmarks,
  onPlay,
  onToggleFavorite,
  onToggleBookmark,
  onShowEpisode
}) => {
  const isCurrentlyPlaying = currentPlaying === podcast.id && isPlaying;
  const isVideoType = podcast.type === 'video';

  const handleShare = async () => {
    const shareData = {
      title: podcast.title,
      text: `${podcast.episode} - ${podcast.description}`,
      url: `${window.location.href}?episode=${podcast.id}`
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        // Aqui poderia mostrar um toast de sucesso
      } catch (err) {
        console.log('Failed to copy to clipboard');
      }
    }
  };

  const handleDownload = () => {
    if (podcast.chapters[0]?.audioLink) {
      const link = document.createElement('a');
      link.href = podcast.chapters[0].audioLink;
      link.download = `${podcast.title}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-50 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
      {/* Enhanced Header */}
      <div className={`h-52 bg-gradient-to-br ${
        isVideoType 
          ? 'from-orange-400 via-red-500 to-orange-600' 
          : 'from-green-400 via-emerald-500 to-green-600'
      } flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
        <Headphones className="w-16 h-16 text-white relative z-10 drop-shadow-lg" />
        
        {/* Enhanced Type Badge */}
        <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-sm ${
          isVideoType ? 'bg-red-500/90' : 'bg-green-500/90'
        } border border-white/20`}>
          {isVideoType ? '📹 Video' : '🎵 Audio'}
        </div>
        
        {/* Playing Indicator */}
        {isCurrentlyPlaying && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            NOW PLAYING
          </div>
        )}

        {/* Episodes Button */}
        <button
          onClick={onShowEpisode}
          className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors border border-white/20 group/btn"
          title="View Episodes"
        >
          <List className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>
      
      <div className="p-6">
        {/* Enhanced Metadata */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full ${
            isVideoType 
              ? 'text-orange-700 bg-orange-100 border border-orange-200' 
              : 'text-green-700 bg-green-100 border border-green-200'
          }`}>
            {podcast.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-current text-orange-400" />
              <span className="font-medium">{podcast.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              <span>{podcast.reviews}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">{podcast.plays}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
          {podcast.title}
        </h3>
        <p className="text-green-600 font-semibold text-sm mb-3 line-clamp-1">
          {podcast.episode}
        </p>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
          {podcast.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{podcast.duration}</span>
              <span className="text-xs text-gray-400">• {podcast.publishDate}</span>
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onPlay()}
                className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                  isCurrentlyPlaying
                    ? 'bg-orange-500 text-white shadow-lg' 
                    : isVideoType
                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                    : 'bg-green-100 text-green-600 hover:bg-green-200'
                }`}
                title={isCurrentlyPlaying ? 'Pause' : 'Play'}
              >
                {isCurrentlyPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <PlayCircle className="w-5 h-5" />
                )}
              </button>
              <button 
                onClick={onToggleFavorite}
                className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                  favorites.includes(podcast.id) 
                    ? 'text-red-500 bg-red-50 shadow-sm' 
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
                title={favorites.includes(podcast.id) ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`w-4 h-4 ${favorites.includes(podcast.id) ? 'fill-current' : ''}`} />
              </button>
              <button 
                onClick={onToggleBookmark}
                className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                  bookmarks.includes(podcast.id) 
                    ? 'text-orange-500 bg-orange-50 shadow-sm' 
                    : 'text-gray-400 hover:text-orange-500 hover:bg-orange-50'
                }`}
                title={bookmarks.includes(podcast.id) ? 'Remove bookmark' : 'Add bookmark'}
              >
                <Bookmark className={`w-4 h-4 ${bookmarks.includes(podcast.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              {!isVideoType && (
                <button 
                  onClick={handleDownload}
                  className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all transform hover:scale-110"
                  title="Download episode"
                >
                  <Download className="w-4 h-4" />
                </button>
              )}
              <button 
                onClick={handleShare}
                className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-full transition-all transform hover:scale-110"
                title="Share episode"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Enhanced Links Section */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <a 
              href={podcast.videoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium transition-all group/link ${
                isVideoType 
                  ? 'text-red-600 hover:text-red-700' 
                  : 'text-green-600 hover:text-green-700'
              }`}
            >
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              <span>{isVideoType ? 'Watch on YouTube' : 'Listen Online'}</span>
            </a>
            <span className="text-xs text-gray-400 font-medium">
              {podcast.chapters.length} chapters • {isVideoType ? 'HD Video' : 'High Quality Audio'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente EmptyState para quando não há resultados
interface EmptyStateProps {
  searchTerm: string;
  selectedCategory: string;
  selectedType: string;
  onClearFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  searchTerm,
  selectedCategory,
  selectedType,
  onClearFilters
}) => {
  return (
    <div className="text-center py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          No episodes found
        </h3>
        <p className="text-gray-600 mb-6">
          We couldn't find any episodes matching your current filters
          {searchTerm && (
            <span> for "<strong>{searchTerm}</strong>"</span>
          )}
          .
        </p>
        <div className="space-y-3">
          <p className="text-sm text-gray-500">Try:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Adjusting your search terms</li>
            <li>• Changing category or type filters</li>
            <li>• Browsing all available content</li>
          </ul>
        </div>
        <button
          onClick={onClearFilters}
          className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default PodcastsPage;