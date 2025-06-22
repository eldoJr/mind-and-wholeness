import { Play, Pause, Share, Bookmark, Volume2, Download, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import pod1 from '/src/assets/audio/pod1.mp3'

// Componente AudioPlayer melhorado e mais compacto
type Podcast = {
  id: string;
  title: string;
  description: string;
  host: string;
  episode: string;
  audioUrl: string;
  gradient: string;
  bgGradient: string;
  textColor: string;
  subtitleColor: string;
};

const AudioPlayer = ({ podcast }: { podcast: Podcast }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio(podcast.audioUrl));

  // Configurar os event listeners uma vez quando o componente montar
  useEffect(() => {
    const audio = audioRef.current;

    const updateMetaData = () => {
      setDuration(audio.duration);
    };

    const updateTime = () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      setProgress(progressPercent);
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', updateMetaData);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);

    // Limpeza quando o componente desmontar
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', updateMetaData);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Erro ao reproduzir áudio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };


    const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    audioRef.current.currentTime = newTime;
    setProgress(pos * 100);
    setCurrentTime(newTime);
  };

  const formatTime: (seconds: number) => string = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 p-3 md:p-4">
      <div className={`bg-gradient-to-br ${podcast.bgGradient} border border-white/40 p-3 md:p-4 h-full flex flex-col justify-between backdrop-blur-sm`}>
        
        {/* Header compacto */}
        <div className="mb-3">
          <div className="text-xs text-gray-600 mb-1 font-medium opacity-80">
            {podcast.title} • {podcast.host}
          </div>
          <div className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
            {podcast.episode}
          </div>
        </div>
        
        {/* Player principal - mais compacto */}
        <div className="mb-3">
          {/* Waveform simplificado e menor */}
          <div className="mb-3 relative">
            <div className="h-8 md:h-10 bg-white/50 flex items-center justify-center overflow-hidden relative cursor-pointer" onClick={handleSeek}>
              <div className="flex items-end gap-px h-full px-2 absolute inset-0">
                {Array.from({length: 40}).map((_, i) => {
                  const height = Math.sin(i * 0.2) * 15 + Math.random() * 20 + 10;
                  const isActive = progress > (i / 40) * 100;
                  return (
                    <div 
                      key={i} 
                      className={`w-0.5 md:w-1 rounded-full transition-colors duration-200 ${
                        isActive ? 'bg-blue-500' : 'bg-gray-300'
                      }`} 
                      style={{height: `${height}%`}}
                    ></div>
                  );
                })}
              </div>
              {isPlaying && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Volume2 className="w-3 h-3 md:w-4 md:h-4 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
            
            {/* Barra de progresso mais fina */}
            <div className="mt-2 h-1 bg-gray-200 overflow-hidden cursor-pointer" onClick={handleSeek}>
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out rounded-full"
                style={{width: `${progress}%`}}
              ></div>
            </div>
          </div>

          {/* Controles principais */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <button className="p-1 hover:bg-white/30 rounded-full transition-colors">
                <SkipBack className="w-4 h-4 text-gray-600" />
              </button>
              
              <button 
                onClick={handlePlayPause}
                className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none"
              >
                {isPlaying ? 
                  <Pause className="w-3 h-3 md:w-4 md:h-4 text-white" fill="white" /> :
                  <Play className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" fill="white" />
                }
              </button>
              
              <button className="p-1 hover:bg-white/30 rounded-full transition-colors">
                <SkipForward className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Tempo */}
            <div className="text-xs text-gray-600 font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
        
        {/* Controles secundários - mais compactos */}
        <div className="flex items-center justify-between pt-2 border-t border-white/20">
          <div className="flex items-center gap-2 md:gap-3">
            <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
              <Share className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-emerald-600 transition-colors duration-200 group">
              <Bookmark className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Save</span>
            </button>
          </div>
          <button className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 bg-white/70 hover:bg-white border border-gray-200  text-xs text-gray-700 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow-md">
            <Download className="w-3 h-3" />
            <span className="hidden sm:inline font-medium">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente PodcastCover otimizado
const PodcastCover = ({ podcast }: { podcast: Podcast }) => (
  <div className="md:w-48 lg:w-56 flex-shrink-0">
    <div className={`w-full h-48 md:h-full bg-gradient-to-br ${podcast.gradient} flex items-center justify-center relative overflow-hidden rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-l-xl`}>
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="text-center relative z-10 px-3">
        <div className="text-lg md:text-xl lg:text-2xl font-light text-white mb-1 md:mb-2 drop-shadow-md">
          {podcast.title.split(' ')[0]}
        </div>
        <div className="text-base md:text-lg lg:text-xl font-light italic text-white/90 drop-shadow-md">
          {podcast.title.split(' ').slice(1).join(' ')}
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-white/15 rounded-full blur-xl"></div>
      <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 bg-white/10 blur-lg"></div>
    </div>
  </div>
);

// Componente PodcastItem otimizado
const PodcastItem = ({ podcast, index }: { podcast: Podcast; index: number }) => (
  <div key={podcast.id} className="group">
    <div className="mb-3 md:mb-4">
      <div className="flex items-center gap-2 md:gap-3 mb-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{podcast.title}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5">
          #{index + 1}
        </span>
      </div>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{podcast.description}</p>
    </div>
    
    {/* Player e Cover - layout melhorado */}
    <div className="bg-white shadow-md md:shadow-lg overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <AudioPlayer podcast={podcast} />
        <PodcastCover podcast={podcast} />
      </div>
    </div>
  </div>
);

// Componente principal
const StartSection = () => {
  const podcasts = [
    {
      id: 'mindful-healing',
      title: 'Humans Are ... Trees?',
      description: 'A therapeutic deep dive into mindfulness-based healing through the lens of contemplative practice.',
      host: 'Tim & Jon',
      episode: 'Humans and trees are found together at most of the hinge points in the biblical story.',
      audioUrl: pod1,
      gradient: 'from-emerald-400 via-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      textColor: 'text-emerald-800',
      subtitleColor: 'text-emerald-700'
    },
    {
      id: 'inner-compass',
      title: 'Inner Compass',
      description: 'Explore the wisdom of discernment and spiritual direction through contemplative listening.',
      host: 'Maria Rodriguez',
      episode: 'Finding Your Sacred Direction',
      audioUrl: 'https://afp-597195-injected.calisto.simplecastaudio.com/695767b0-cd40-4ea6c-ac8c-ac6bc0df77ee/episodes/a861acdf-2382-4508-b42e-d6038a0472e5/audio/128/default.mp3?awCollectionId=695767b0-cd40-4e6c-ac8c-ac6bc0df77ee&awEpisodeId=a861acdf-2382-4508-b42e-d6038a0472e5',
      gradient: 'from-blue-400 via-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      textColor: 'text-blue-800',
      subtitleColor: 'text-blue-700'
    },
    {
      id: 'sacred-psychology',
      title: 'Sacred Psychology',
      description: 'Discover new ways of integrating psychological insight with spiritual understanding.',
      host: 'Dr. Michael Thompson',
      episode: 'The Soul\'s Journey Through Healing',
      audioUrl: 'https://afp-597195-injected.calisto.simplecastaudio.com/695767b0-cd40-4ea6c-ac8c-ac6bc0df77ee/episodes/a861acdf-2382-4508-b42e-d6038a0472e5/audio/128/default.mp3?awCollectionId=695767b0-cd40-4e6c-ac8c-ac6bc0df77ee&awEpisodeId=a861acdf-2382-4508-b42e-d6038a0472e5',
      gradient: 'from-purple-400 via-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      textColor: 'text-purple-800',
      subtitleColor: 'text-purple-700'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10 lg:py-12 ">
      {/* Cabeçalho melhorado */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-3 md:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Where to Start?
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-7xl mx-auto">
          Sometimes it can be hard to know where to jump in – especially if you are new to our podcast network. 
          We've curated the perfect entry points for each series.
        </p>
      </div>

      {/* Lista de Podcasts */}
      <div className="space-y-6 md:space-y-8">
        {podcasts.map((podcast, index) => (
          <PodcastItem key={podcast.id} podcast={podcast} index={index} />
        ))}
      </div>

      {/* CTA  */}
      <div className="mt-8 md:mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 md:rounded-xl p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
            Ready to dive deeper?
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4 max-w-xl mx-auto">
            Explore our complete catalog and join our community of mindful listeners.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
            <button className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-base font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none">
              Browse All Episodes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSection;