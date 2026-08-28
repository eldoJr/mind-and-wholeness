import { Play, Pause, Share, Bookmark, Volume2, Download, SkipBack, SkipForward } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';

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
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio(podcast.audioUrl));

  useEffect(() => {
    const audio = audioRef.current;
    const updateMetaData = () => setDuration(audio.duration);
    const updateTime = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(audio.currentTime);
    };
    const handleEnded = () => { setIsPlaying(false); setProgress(0); setCurrentTime(0); };
    audio.addEventListener('loadedmetadata', updateMetaData);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', updateMetaData);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) { audioRef.current.pause(); } else {
      audioRef.current.play().catch(e => console.error(e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
    setProgress(pos * 100);
    setCurrentTime(pos * duration);
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 p-4">
      <div className={`bg-gradient-to-br ${podcast.bgGradient} border border-white/40 p-4 h-full flex flex-col justify-between`}>
        <div className="mb-3">
          <div className="text-xs text-gray-500 mb-1">{podcast.title} • {podcast.host}</div>
          <div className="font-medium text-gray-900 text-sm leading-tight">{podcast.episode}</div>
        </div>
        <div>
          <div className="mb-3">
            <div className="h-9 bg-white/50 flex items-center overflow-hidden relative cursor-pointer" onClick={handleSeek}>
              <div className="flex items-end gap-px h-full px-2 absolute inset-0">
                {Array.from({ length: 40 }).map((_, i) => {
                  const height = Math.sin(i * 0.2) * 15 + 15;
                  return <div key={i} className={`w-0.5 rounded-full ${progress > (i / 40) * 100 ? 'bg-rose-500' : 'bg-gray-300'}`} style={{ height: `${height}%` }} />;
                })}
              </div>
              {isPlaying && <Volume2 className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-rose-500 animate-pulse" />}
            </div>
            <div className="mt-1.5 h-1 bg-gray-200 cursor-pointer" onClick={handleSeek}>
              <div className="h-full bg-rose-500 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-white/30 rounded-full"><SkipBack className="w-4 h-4 text-gray-600" /></button>
              <button onClick={handlePlayPause} className="w-9 h-9 bg-rose-600 hover:bg-rose-700 rounded-full flex items-center justify-center shadow-md transition-all">
                {isPlaying ? <Pause className="w-4 h-4 text-white" fill="white" /> : <Play className="w-4 h-4 text-white ml-0.5" fill="white" />}
              </button>
              <button className="p-1 hover:bg-white/30 rounded-full"><SkipForward className="w-4 h-4 text-gray-600" /></button>
            </div>
            <span className="text-xs text-gray-500 font-mono">{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-white/20 mt-2">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-rose-600 transition-colors">
              <Share className="w-3 h-3" /><span className="hidden sm:inline">{t.share}</span>
            </button>
            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-rose-600 transition-colors">
              <Bookmark className="w-3 h-3" /><span className="hidden sm:inline">{t.save}</span>
            </button>
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1 bg-white/70 hover:bg-white border border-gray-200 text-xs text-gray-700 transition-all shadow-sm">
            <Download className="w-3 h-3" /><span className="hidden sm:inline">{t.download}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const PodcastCover = ({ podcast }: { podcast: Podcast }) => (
  <div className="md:w-48 lg:w-56 flex-shrink-0">
    <div className={`w-full h-48 md:h-full bg-gradient-to-br ${podcast.gradient} flex items-center justify-center relative overflow-hidden rounded-b-xl md:rounded-b-none md:rounded-r-xl`}>
      <div className="text-center px-3 relative z-10">
        <div className="text-xl font-light text-white mb-1 drop-shadow-md">{podcast.title.split(' ')[0]}</div>
        <div className="text-lg font-light italic text-white/90 drop-shadow-md">{podcast.title.split(' ').slice(1).join(' ')}</div>
      </div>
    </div>
  </div>
);

const StartSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;

  const podcasts: Podcast[] = [
    {
      id: 'mindful-healing',
      title: 'Humans Are ... Trees?',
      description: 'A therapeutic deep dive into mindfulness-based healing through the lens of contemplative practice.',
      host: 'Tim & Jon',
      episode: 'Humans and trees are found together at most of the hinge points in the biblical story.',
      audioUrl: 'https://afp-597195-injected.calisto.simplecastaudio.com/695767b0-cd40-4e6c-ac8c-ac6bc0df77ee/episodes/c3965584-6829-4453-9982-6ca58fdfabc7/audio/128/default.mp3/default.mp3_ywr3ahjkcgo_b55a1ee0fb2ec19167108f5156225af4_64621220.mp3?awCollectionId=695767b0-cd40-4e6c-ac8c-ac6bc0df77ee&awEpisodeId=c3965584-6829-4453-9982-6ca58fdfabc7&hash_redirect=1&x-total-bytes=64621220&x-ais-classified=streaming&listeningSessionID=0CD_382_172__ee4c5c6ac86e6c41dc24dfd8612ff305bb6e1e4d',
      gradient: 'from-emerald-400 via-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      textColor: 'text-emerald-800',
      subtitleColor: 'text-emerald-700',
    },
    {
      id: 'inner-compass',
      title: 'Inner Compass',
      description: 'Explore the wisdom of discernment and spiritual direction through contemplative listening.',
      host: 'Maria Rodriguez',
      episode: 'Finding Your Sacred Direction',
      audioUrl: 'https://afp-597195-injected.calisto.simplecastaudio.com/695767b0-cd40-4e6c-ac8c-ac6bc0df77ee/episodes/c3965584-6829-4453-9982-6ca58fdfabc7/audio/128/default.mp3/default.mp3_ywr3ahjkcgo_b55a1ee0fb2ec19167108f5156225af4_64621220.mp3?awCollectionId=695767b0-cd40-4e6c-ac8c-ac6bc0df77ee&awEpisodeId=c3965584-6829-4453-9982-6ca58fdfabc7&hash_redirect=1&x-total-bytes=64621220&x-ais-classified=streaming&listeningSessionID=0CD_382_172__ee4c5c6ac86e6c41dc24dfd8612ff305bb6e1e4d',
      gradient: 'from-blue-400 via-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      textColor: 'text-blue-800',
      subtitleColor: 'text-blue-700',
    },
    {
      id: 'sacred-psychology',
      title: 'Sacred Psychology',
      description: 'Discover new ways of integrating psychological insight with spiritual understanding.',
      host: 'Dr. Michael Thompson',
      episode: "The Soul's Journey Through Healing",
      audioUrl: 'https://afp-597195-injected.calisto.simplecastaudio.com/695767b0-cd40-4ea6c-ac8c-ac6bc0df77ee/episodes/a861acdf-2382-4508-b42e-d6038a0472e5/audio/128/default.mp3',
      gradient: 'from-purple-400 via-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      textColor: 'text-purple-800',
      subtitleColor: 'text-purple-700',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-rose-400" />
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-600">{t.listenLearn}</p>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-3">{t.whereToStart}</h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{t.whereToStartDesc}</p>
      </motion.div>

      <div className="space-y-8">
        {podcasts.map((podcast, index) => (
          <motion.div
            key={podcast.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="mb-3">
              <div className="flex items-center gap-3 mb-1.5">
                <h3 className="font-serif text-lg text-gray-900">{podcast.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">#{index + 1}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{podcast.description}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">
              <div className="flex flex-col md:flex-row">
                <AudioPlayer podcast={podcast} />
                <PodcastCover podcast={podcast} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 bg-white rounded-2xl px-8 py-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-serif text-xl text-gray-900 mb-2">{t.readyToDive}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">{t.readyToDiveDesc}</p>
        <button className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200">
          {t.browseAll}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </motion.div>
    </div>
  );
};

export default StartSection;
