import React, { useState, useRef, useEffect } from 'react';
import { 
  Headphones, PlayCircle, Clock, Check, Share2, Heart, ExternalLink, 
  Filter, Search, Download, Bookmark, Volume2, Pause, SkipBack, 
  SkipForward, VolumeX, List, X, Users, Star,
  MessageSquare, Repeat, Shuffle,
} from 'lucide-react';

import { Chapter, Podcast } from './types';

const PodcastsPage: React.FC = () => {
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showShareModal, setShowShareModal] = useState<number | null>(null);
  const [showChapters, setShowChapters] = useState<number | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

    const getCurrentPodcast = (): Podcast | undefined => {
    return podcasts.find(p => p.id === currentPlaying);
  };

  const podcasts = [
    {
      id: 1,
      title: "The Mindful Path",
      episode: "Episode 42: Finding Stillness",
      duration: "38 min",
      description: "Exploring techniques to find calm in chaotic times through mindfulness practices",
      category: "Mindfulness",
      type: "audio",
      image: "/podcast1.jpg",
      videoLink: "https://youtube.com/watch?v=mindful-path-42",
      publishDate: "2 days ago",
      plays: "12.4K",
      rating: 4.8,
      reviews: 156,
      chapters: [
        { id: 1, title: "Introduction to Mindfulness", duration: "8:32", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 2, title: "Breathing Techniques", duration: "12:45", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 3, title: "Body Scan Meditation", duration: "9:18", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 4, title: "Walking Meditation", duration: "5:25", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 5, title: "Daily Practice Tips", duration: "7:00", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" }
      ]
    },
    {
      id: 2,
      title: "Healing Conversations",
      episode: "Overcoming Anxiety with Dr. Sarah Lin",
      duration: "52 min",
      description: "A psychiatrist shares practical tools for anxiety management and emotional wellness",
      category: "Mental Health",
      type: "video",
      image: "/podcast2.jpg",
      videoLink: "https://youtube.com/watch?v=healing-conversations-anxiety",
      publishDate: "1 week ago",
      plays: "8.9K",
      rating: 4.9,
      reviews: 203,
      chapters: [
        { id: 1, title: "Understanding Anxiety", duration: "11:30", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 2, title: "Cognitive Behavioral Techniques", duration: "15:20", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 3, title: "Medication vs Natural Remedies", duration: "12:10", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 4, title: "Building Support Systems", duration: "8:45", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 5, title: "Q&A Session", duration: "9:15", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" }
      ]
    },
    {
      id: 3,
      title: "Daily Wisdom",
      episode: "The Power of Gratitude",
      duration: "25 min",
      description: "How cultivating thankfulness transforms your brain and improves life satisfaction",
      category: "Personal Growth",
      type: "audio",
      image: "/podcast3.jpg",
      videoLink: "https://youtube.com/watch?v=daily-wisdom-gratitude",
      publishDate: "2 weeks ago",
      plays: "15.2K",
      rating: 4.7,
      reviews: 89,
      chapters: [
        { id: 1, title: "Science of Gratitude", duration: "6:15", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 2, title: "Gratitude Journal Practice", duration: "5:30", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 3, title: "Expressing Appreciation", duration: "4:45", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 4, title: "Overcoming Negativity", duration: "5:20", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
        { id: 5, title: "Building Habits", duration: "3:10", audioLink: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" }
      ]
    }
  ];

  const categories = ["All", "Mindfulness", "Mental Health", "Sleep", "Wellness", "Community"];
  const types = ["All", "Audio", "Video"];
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        handleNextChapter();
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.playbackRate = playbackSpeed;

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentPlaying, playbackSpeed, isRepeat]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const toggleBookmark = (id: number) => {
    setBookmarks(prev => 
      prev.includes(id) 
        ? prev.filter(bookId => bookId !== id)
        : [...prev, id]
    );
  };

  const handlePlay = (podcast: any, chapterIndex: number = 0) => {
    if (podcast.type === 'video' && chapterIndex === 0) {
      window.open(podcast.videoLink, '_blank');
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (currentPlaying === podcast.id && currentChapter === chapterIndex) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentPlaying(podcast.id);
      setCurrentChapter(chapterIndex);
      const chapter = podcast.chapters[chapterIndex];
      audio.src = chapter.audioLink;
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleNextChapter = () => {
    const currentPodcast = podcasts.find(p => p.id === currentPlaying);
    if (!currentPodcast) return;

    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * currentPodcast.chapters.length);
      setCurrentChapter(randomIndex);
      handlePlay(currentPodcast, randomIndex);
    } else if (currentChapter < currentPodcast.chapters.length - 1) {
      const nextIndex = currentChapter + 1;
      setCurrentChapter(nextIndex);
      handlePlay(currentPodcast, nextIndex);
    }
  };

  const handlePrevChapter = () => {
    const currentPodcast = podcasts.find(p => p.id === currentPlaying);
    if (!currentPodcast) return;

    if (currentChapter > 0) {
      const prevIndex = currentChapter - 1;
      setCurrentChapter(prevIndex);
      handlePlay(currentPodcast, prevIndex);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value) / 100;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleShare = async (podcast: any) => {
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
        setShowShareModal(podcast.id);
        setTimeout(() => setShowShareModal(null), 3000);
      } catch (err) {
        console.log('Failed to copy to clipboard');
      }
    }
  };

  const handleDownload = (audioLink: string, title: string) => {
    const link = document.createElement('a');
    link.href = audioLink;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesCategory = selectedCategory === 'All' || podcast.category === selectedCategory;
    const matchesType = selectedType === 'All' || podcast.type === selectedType.toLowerCase();
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.episode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  const currentPodcast = podcasts.find(p => p.id === currentPlaying);
  const currentChapterData = currentPodcast?.chapters[currentChapter];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} />

      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <Headphones className="w-5 h-5" />
            <span className="text-sm font-medium">Premium Audio & Video Content</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Podcasts
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Insights and stories from our community of practitioners and experts
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>12K+ Active Listeners</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-current text-orange-300" />
              <span>4.8 Average Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Enhanced Search and Filter Bar */}
        <div className="mb-10 space-y-6">
          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search podcasts, episodes, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all shadow-sm"
            />
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-wrap items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filters:</span>
            </div>
            
            {/* Type Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">Type:</span>
              <div className="flex gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedType === type 
                        ? 'bg-orange-500 text-white shadow-lg transform scale-105' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category 
                        ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredPodcasts.length}</span> episode{filteredPodcasts.length !== 1 ? 's' : ''}
            {selectedType !== 'All' && (
              <span> • <span className="font-semibold text-orange-600">{selectedType}</span> content</span>
            )}
            {selectedCategory !== 'All' && (
              <span> • <span className="font-semibold text-green-600">{selectedCategory}</span> category</span>
            )}
          </p>
        </div>

        {/* Enhanced Podcast Library */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPodcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-50 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Enhanced Header */}
                <div className={`h-52 bg-gradient-to-br ${podcast.type === 'video' ? 'from-orange-400 via-red-500 to-orange-600' : 'from-green-400 via-emerald-500 to-green-600'} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <Headphones className="w-16 h-16 text-white relative z-10 drop-shadow-lg" />
                  
                  {/* Enhanced Type Badge */}
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-sm ${podcast.type === 'video' ? 'bg-red-500/90' : 'bg-green-500/90'} border border-white/20`}>
                    {podcast.type === 'video' ? '📹 Video' : '🎵 Audio'}
                  </div>
                  
                  {/* Playing Indicator */}
                  {currentPlaying === podcast.id && isPlaying && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-sm border border-white/20">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      NOW PLAYING
                    </div>
                  )}

                  {/* Chapters Button */}
                  <button
                    onClick={() => setShowChapters(showChapters === podcast.id ? null : podcast.id)}
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors border border-white/20"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-6">
                  {/* Enhanced Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full ${podcast.type === 'video' ? 'text-orange-700 bg-orange-100 border border-orange-200' : 'text-green-700 bg-green-100 border border-green-200'}`}>
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
                          onClick={() => handlePlay(podcast)}
                          className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                            currentPlaying === podcast.id && isPlaying
                              ? 'bg-orange-500 text-white shadow-lg' 
                              : podcast.type === 'video'
                              ? 'bg-red-100 text-red-600 hover:bg-red-200'
                              : 'bg-green-100 text-green-600 hover:bg-green-200'
                          }`}
                        >
                          {currentPlaying === podcast.id && isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <PlayCircle className="w-5 h-5" />
                          )}
                        </button>
                        <button 
                          onClick={() => toggleFavorite(podcast.id)}
                          className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                            favorites.includes(podcast.id) 
                              ? 'text-red-500 bg-red-50 shadow-sm' 
                              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${favorites.includes(podcast.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button 
                          onClick={() => toggleBookmark(podcast.id)}
                          className={`p-2 rounded-full transition-all transform hover:scale-110 ${
                            bookmarks.includes(podcast.id) 
                              ? 'text-orange-500 bg-orange-50 shadow-sm' 
                              : 'text-gray-400 hover:text-orange-500 hover:bg-orange-50'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarks.includes(podcast.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {podcast.type === 'audio' && (
                          <button 
                            onClick={() => handleDownload(podcast.chapters[0]?.audioLink || '', podcast.title)}
                            className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all transform hover:scale-110"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                        <button 
                          onClick={() => handleShare(podcast)}
                          className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-full transition-all transform hover:scale-110"
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
                          podcast.type === 'video' 
                            ? 'text-red-600 hover:text-red-700' 
                            : 'text-green-600 hover:text-green-700'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        <span>{podcast.type === 'video' ? 'Watch on YouTube' : 'Listen Online'}</span>
                      </a>
                      <span className="text-xs text-gray-400 font-medium">
                        {podcast.chapters.length} chapters • {podcast.type === 'video' ? 'HD Video' : 'High Quality Audio'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Chapters Panel */}
                {showChapters === podcast.id && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                          <List className="w-4 h-4" />
                          Episode Chapters
                        </h4>
                        <button
                          onClick={() => setShowChapters(null)}
                          className="p-1 text-gray-400 hover:text-gray-600 rounded"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {podcast.chapters.map((chapter, index) => (
                          <button
                            key={chapter.id}
                            onClick={() => handlePlay(podcast, index)}
                            className={`w-full text-left p-3 rounded-xl transition-all hover:bg-white border ${
                              currentPlaying === podcast.id && currentChapter === index
                                ? 'bg-green-100 border-green-200 text-green-800'
                                : 'bg-white border-gray-100 hover:border-green-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                  currentPlaying === podcast.id && currentChapter === index
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200 text-gray-500'
                                }`}>
                                  {index + 1}
                                </div>
                                <div>
                                  <p className="font-medium text-sm">{chapter.title}</p>
                                  <p className="text-xs text-gray-500">{chapter.duration}</p>
                                </div>
                                                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDownload(chapter.audioLink, `${podcast.title} - ${chapter.title}`);
                                }}
                                className="p-1 text-gray-400 hover:text-orange-500 rounded-full hover:bg-orange-50"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Share Modal */}
                {showShareModal === podcast.id && (
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-4 border border-gray-200 z-50 animate-fade-in">
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">Link copied to clipboard!</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Player Controls (Fixed Bottom) */}
        {currentPodcast && currentChapterData && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transform transition-transform duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between gap-6">
                {/* Track Info */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg overflow-hidden flex-shrink-0">
                    <Headphones className="w-full h-full text-white p-2" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">{currentPodcast.title}</p>
                    <p className="text-xs text-green-600 truncate">{currentChapterData.title}</p>
                  </div>
                </div>

                {/* Main Controls */}
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center justify-center gap-4">
                    <button 
                      onClick={handlePrevChapter}
                      className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100 disabled:opacity-50"
                      disabled={currentChapter === 0 && !isShuffle}
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>
                    
                    <button 
                      onClick={() => handlePlay(currentPodcast, currentChapter)}
                      className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md transform hover:scale-105 transition-all"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <PlayCircle className="w-6 h-6" />
                      )}
                    </button>
                    
                    <button 
                      onClick={handleNextChapter}
                      className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs text-gray-500 w-10 text-right">
                      {formatTime(currentTime)}
                    </span>
                    <div className="flex-1 relative">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={(currentTime / duration) * 100 || 0}
                        onChange={handleSeek}
                        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600"
                      />
                      <div 
                        className="absolute top-0 left-0 h-2 bg-green-500 rounded-full pointer-events-none"
                        style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 w-10">
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>

                {/* Additional Controls */}
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <button 
                      onClick={toggleMute}
                      className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                      <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={isMuted ? 0 : volume * 100}
                          onChange={handleVolumeChange}
                          className="w-24 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <button className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100">
                      <span className="text-xs font-medium">{playbackSpeed}x</span>
                    </button>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                      <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200 flex flex-col gap-1">
                        {speeds.map(speed => (
                          <button
                            key={speed}
                            onClick={() => setPlaybackSpeed(speed)}
                            className={`px-3 py-1 text-xs rounded ${
                              playbackSpeed === speed
                                ? 'bg-green-100 text-green-700 font-medium'
                                : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsRepeat(!isRepeat)}
                    className={`p-2 rounded-full ${isRepeat ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <Repeat className="w-5 h-5" />
                  </button>

                  <button 
                    onClick={() => setIsShuffle(!isShuffle)}
                    className={`p-2 rounded-full ${isShuffle ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <Shuffle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredPodcasts.length === 0 && (
        <div className="max-w-2xl mx-auto py-20 text-center">
          <div className="bg-gradient-to-br from-green-100 to-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">No episodes found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters or search for something different
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedType('All');
              setSearchTerm('');
            }}
            className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-sm"
          >
            Reset all filters
          </button>
        </div>
      )}

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Star className="w-6 h-6 text-orange-500 fill-current" />
          <span>Featured Episodes</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {podcasts.slice(0, 3).map(podcast => (
            <div key={podcast.id} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  podcast.type === 'video' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'bg-green-100 text-green-600'
                }`}>
                  {podcast.type === 'video' ? (
                    <PlayCircle className="w-6 h-6" />
                  ) : (
                    <Headphones className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{podcast.title}</h3>
                  <p className="text-sm text-green-600 mb-2">{podcast.episode}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{podcast.duration}</span>
                    <span>•</span>
                    <span>{podcast.plays} plays</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handlePlay(podcast)}
                className={`mt-4 w-full py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${
                  podcast.type === 'video'
                    ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                <PlayCircle className="w-4 h-4" />
                {podcast.type === 'video' ? 'Watch Now' : 'Listen Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastsPage;