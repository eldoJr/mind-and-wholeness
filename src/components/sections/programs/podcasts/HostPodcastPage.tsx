import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, Mic, ExternalLink } from 'lucide-react';
import ceoImg from './../../../../assets/images/ceo.png';
import cooImg from './../../../../assets/images/viviana.jpeg';
import ctoImg from './../../../../assets/images/michael.jpeg';
import communityImg from './../../../../assets/images/community.png';
import { useLanguage } from '../../../../context/LanguageContext';
import { translations } from '../../../../utils/translations';
import { SubscribeForm } from '../../../ui';

const HostPodcastPage = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.podcasts;
  const tLogin = translations[language].loginCTA;
  const { hostId } = useParams<{ hostId: string }>();

  const getHostDetails = (id: string | undefined) => {
    if (!id) return null;
    if (id.includes('lilian')) return {
      name: 'Lilian Titus', role: 'Founder & Visionary Leader', image: ceoImg,
      description: 'Lilian founded Mind and Wholeness out of a deep calling to restore balance and purpose in the lives of young people. With a background in counseling and spiritual mentorship, she leads with passion and clarity.',
      episodes: 6,
    };
    if (id.includes('viviana')) return {
      name: 'Viviana Claudia', role: 'Chief Operating Officer', image: cooImg,
      description: 'She is a brilliant and goal-oriented individual who organizes and coordinates events with excellence and precision, bringing structure and clarity to every conversation.',
      episodes: 6,
    };
    if (id.includes('michael')) return {
      name: 'Michael Mugwenhi', role: 'Chief Technology Officer', image: ctoImg,
      description: 'Michael is a purpose-driven leader using innovation to create meaningful impact. He leads scalable digital solutions at Mind & Wholeness, aligning technology with holistic healing and human transformation.',
      episodes: 6,
    };
    const name = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { name, role: 'Podcast Host', image: null, description: 'Host at Mind and Wholeness', episodes: 6 };
  };

  const host = getHostDetails(hostId);

  const podcastEpisodes = [
    'https://open.spotify.com/embed/episode/0L2xf8hS13XurGZZbINuLP?utm_source=generator&t=0',
    'https://open.spotify.com/embed/episode/0eHVZ8iPKU91QZBxajZ4JO?utm_source=generator&t=0',
    'https://open.spotify.com/embed/episode/0eHVZ8iPKU91QZBxajZ4JO?utm_source=generator&t=0',
    'https://open.spotify.com/embed/episode/02qV0q8Zq0j3JfInOX6rI0?utm_source=generator&t=0',
    'https://open.spotify.com/embed/episode/5hE381jbRlRJ2200hS15hJ?utm_source=generator&t=0',
    'https://open.spotify.com/embed/episode/0fpURCdelUynmrDhUsqDjF?utm_source=generator&t=0',
  ];

  if (!host) return <div className="p-8 text-gray-500">{t.hostNotFound}</div>;

  return (
    <motion.section
      className="bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Host photo */}
            <motion.div
              className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                {host.image ? (
                  <img src={host.image} alt={host.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                    <span className="text-white/40 text-sm">{t.noImage}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="flex-1"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px bg-rose-300" />
                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-300">{t.listenLearn}</p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl text-white leading-tight mb-2">{host.name}</h1>
              <p className="text-white/50 text-sm mb-5 tracking-wide">{host.role}</p>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl mb-8">{host.description}</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => document.getElementById('host-podcasts-list')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-gray-900 text-sm font-medium tracking-wide hover:bg-rose-50 transition-all duration-200"
                >
                  {t.listenNow}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Mic className="w-3.5 h-3.5" />
                  <span>{host.episodes} {t.episodes}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Episodes + sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        {/* Back link */}
        <Link to="/programs/podcasts" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-12">
          <ChevronLeft className="w-4 h-4" />
          {t.backToAll}
        </Link>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start" id="host-podcasts-list">
          {/* Episodes list */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-rose-400" />
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-rose-600">{t.episodesFeaturing} {host.name}</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-10">{t.podcastSeries}</h2>

            <div className="flex flex-col gap-4">
              {podcastEpisodes.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                >
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src={src}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`${host.name} Episode ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sticky sidebar */}
          <motion.div
            className="lg:sticky lg:top-24 flex flex-col gap-5"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Profile card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]">
              <div className="h-24 bg-gradient-to-br from-[#2e0003] via-[#48020c] to-[#651d31]" />
              <div className="px-6 pb-6 -mt-10">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                  {host.image ? (
                    <img src={host.image} alt={host.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-0.5">{host.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{host.role}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-5">
                  <Mic className="w-3.5 h-3.5 text-rose-400" />
                  <span>{host.episodes} {t.episodes}</span>
                </div>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-medium text-rose-600 hover:text-rose-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open on Spotify
                </a>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-white rounded-2xl px-6 py-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-4">{t.podcastFacts}</p>
              <div className="space-y-4">
                {[
                  { label: t.episodes, value: host.episodes },
                  { label: t.downloads, value: '1M+' },
                  { label: t.universalPodcast, value: '#1' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{stat.label}</span>
                    <span className="font-serif text-lg text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Community CTA */}
      <div className="bg-gradient-to-br from-slate-50 to-rose-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white rounded-2xl px-8 md:px-14 py-10 md:py-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex-shrink-0 w-56 h-56 md:w-64 md:h-64">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={communityImg} alt="Community" className="w-full h-full object-cover object-center" />
              </div>
              <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full" style={{ background: 'radial-gradient(circle at 35% 30%, #fecdd3, #e11d48 55%, #9f1239)' }} />
              <span className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full blur-[2px] opacity-60" style={{ background: 'radial-gradient(circle at 35% 35%, #ffe4e6, #fb7185 55%, #be123c)' }} />
            </div>
            <div className="flex flex-col justify-center max-w-lg">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-rose-600 mb-3">{tLogin.badge}</p>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug mb-4">{tLogin.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{tLogin.subtitle}</p>
              <Link
                to="/login"
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200 w-fit"
              >
                {tLogin.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white via-emerald-50 to-green-100">
        <SubscribeForm />
      </div>
    </motion.section>
  );
};

export default HostPodcastPage;
