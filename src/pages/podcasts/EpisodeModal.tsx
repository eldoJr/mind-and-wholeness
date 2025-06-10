// Atualize o EpisodeModal.tsx com o player completo
import {Repeat, Shuffle, PlayCircle, Pause, Volume2, VolumeX, SkipBack, SkipForward, X, List, Headphones} from 'lucide-react';

const EpisodeModal: React.FC<EpisodeModalProps> = ({
  episode,
  onClose,
  currentChapter,
  isPlaying,
  onPlay,
  onTogglePlay,
  onNextChapter,
  onPrevChapter,
  currentTime,
  duration,
  onSeek,
  volume,
  onVolumeChange,
  isMuted,
  onToggleMute,
  playbackSpeed,
  onSpeedChange,
  isRepeat,
  onToggleRepeat,
  isShuffle,
  onToggleShuffle,
}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className={`bg-gradient-to-r ${
          episode.type === 'video' 
            ? 'from-orange-500 to-red-500' 
            : 'from-green-500 to-emerald-500'
        } p-6 text-white`}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{episode.title}</h2>
            <button onClick={onClose} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="mt-2 text-white/90">{episode.episode}</p>
        </div>
        
        {/* Conteúdo principal */}
        <div className="flex-1 overflow-auto grid md:grid-cols-3 gap-0">
          {/* Player principal */}
          <div className="md:col-span-2 p-6 border-r border-gray-100">
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6 flex items-center justify-center">
                <Headphones className="w-20 h-20 text-gray-400" />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2">
                {episode.chapters[currentChapter]?.title || 'No chapter selected'}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {episode.title} • Chapter {currentChapter + 1} of {episode.chapters.length}
              </p>
              
              {/* Progress bar */}
              <div className="w-full mb-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={(currentTime / duration) * 100 || 0}
                  onChange={onSeek}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600"
                />
              </div>
              
              {/* Controles principais */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button 
                  onClick={onPrevChapter}
                  className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100"
                  disabled={currentChapter === 0 && !isShuffle}
                >
                  <SkipBack className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={onTogglePlay}
                  className="p-4 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-lg transform hover:scale-105 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <PlayCircle className="w-8 h-8" />
                  )}
                </button>
                
                <button 
                  onClick={onNextChapter}
                  className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
              </div>
              
              {/* Controles secundários */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative group">
                  <button 
                    onClick={onToggleMute}
                    className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100 flex items-center gap-2"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                    <span className="text-xs">{Math.round(volume * 100)}%</span>
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={isMuted ? 0 : volume * 100}
                        onChange={onVolumeChange}
                        className="w-24 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <button className="p-2 text-gray-700 hover:text-green-600 rounded-full hover:bg-gray-100">
                    <span className="text-sm font-medium">{playbackSpeed}x</span>
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-white p-2 rounded-lg shadow-lg border border-gray-200 grid grid-cols-3 gap-1">
                      {[0.5, 0.75, 1, 1.25, 1.5, 2].map(speed => (
                        <button
                          key={speed}
                          onClick={() => onSpeedChange(speed)}
                          className={`px-2 py-1 text-xs rounded ${
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
                  onClick={onToggleRepeat}
                  className={`p-2 rounded-full ${
                    isRepeat ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Repeat className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={onToggleShuffle}
                  className={`p-2 rounded-full ${
                    isShuffle ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Shuffle className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Descrição */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Episode Description</h4>
              <p className="text-gray-600 text-sm">{episode.description}</p>
            </div>
          </div>
          
          {/* Sidebar de capítulos */}
          <div className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <List className="w-5 h-5" />
              <span>Chapters</span>
              <span className="ml-auto text-sm text-gray-500">
                {episode.chapters.length} chapters • {episode.duration}
              </span>
            </h3>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {episode.chapters.map((chapter, index) => (
                <button
                  key={chapter.id}
                  onClick={() => onPlay(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    currentChapter === index
                      ? 'bg-green-100 border border-green-200 text-green-800'
                      : 'bg-white border border-gray-100 hover:border-green-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentChapter === index
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{chapter.title}</p>
                        <p className="text-xs text-gray-500">{chapter.duration}</p>
                      </div>
                    </div>
                    {currentChapter === index && isPlaying && (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};