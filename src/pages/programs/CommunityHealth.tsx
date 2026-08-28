import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Users, Lightbulb, Shield, Smartphone, Building2, HandCoins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubscribeForm } from '../../components/ui';
import communityImg from '../../assets/images/community1.png';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const PRIMARY = '#a91022';
const ACCENT = '#fbf3f4';
const DARK = '#343a40';

const pillars = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Chronic Disease Awareness & Patient Empowerment',
    intro: 'We deliver accessible, evidence-based education that helps individuals understand chronic diseases, their risk factors, treatment, and long-term management.',
    sections: [
      {
        label: 'Our goal is to help patients:',
        items: ['Understand their diagnosis.', 'Improve medication adherence.', 'Make informed lifestyle choices.', 'Accept their condition without losing hope.', 'Live healthy, productive, and purpose-filled lives.'],
      },
    ],
    closing: 'We also equip caregivers and family members with practical knowledge to provide informed, compassionate support.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Youth Prevention Campaigns',
    intro: 'Prevention is our greatest investment. We engage secondary schools, colleges, universities, and youth communities with interactive campaigns focused on preventing chronic diseases before they develop.',
    sections: [
      {
        label: 'Topics include:',
        items: ['Healthy nutrition', 'Physical activity', 'Mental well-being', 'Stress management', 'Sleep and recovery', 'Tobacco and alcohol prevention', 'Early health screening', 'Personal responsibility for lifelong health'],
      },
    ],
    closing: 'Our vision is to cultivate a generation that understands health not merely as the absence of disease, but as responsible stewardship of the body.',
  },
  {
    icon: Heart,
    number: '03',
    title: 'Community Health Education',
    intro: 'We organize seminars, conferences, workshops, and community outreach programs in collaboration with hospitals, healthcare professionals, local governments, and community organizations.',
    sections: [
      {
        label: 'These initiatives aim to:',
        items: ['Increase public awareness.', 'Promote early detection and screening.', 'Encourage healthier lifestyles.', 'Improve community health literacy.', 'Reduce preventable complications from chronic diseases.'],
      },
    ],
    closing: '',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Community Partnership & Public Health Development',
    intro: 'We believe sustainable health transformation happens through collaboration.',
    sections: [
      {
        label: 'We partner with:',
        items: ['Hospitals', 'Government institutions', 'NGOs', 'Faith communities', 'Universities', 'Insurance providers', 'Corporate organizations', 'Community leaders'],
      },
      {
        label: 'Examples include:',
        items: ['Charity health walks and marathons.', 'Community fundraising campaigns.', 'Health awareness events.', 'Support for healthcare facilities.', 'Infrastructure improvements for underserved communities.', 'Preventive health campaigns in rural and urban settings.'],
      },
    ],
    closing: 'Every partnership seeks to create measurable improvements in community health outcomes.',
  },
  {
    icon: Smartphone,
    number: '05',
    title: 'Digital Health & AI Platform',
    intro: 'We envision a comprehensive digital platform that expands access to trusted health information and professional guidance.',
    sections: [
      {
        label: 'The platform will provide:',
        items: ['Reliable education on chronic diseases.', 'AI-powered health guidance and educational support.', 'Lifestyle recommendations.', 'Preventive health resources.', 'Frequently asked questions.', 'Referral pathways to appropriate healthcare facilities.', 'Virtual consultations with qualified healthcare professionals through our partner network.'],
      },
    ],
    closing: 'Our goal is to bridge the gap between communities and quality healthcare through accessible digital innovation.',
  },
  {
    icon: Building2,
    number: '06',
    title: 'Hospital Patient Support Centers',
    intro: 'We envision establishing Mind and Wholeness Support Centers within hospitals and healthcare facilities. These centers will complement clinical services by providing holistic, patient-centered support that healthcare professionals often have limited time to offer.',
    sections: [
      {
        label: 'Services will include:',
        items: ['Health education', 'Emotional support', 'Lifestyle coaching', 'Nutrition counseling', 'Mental health support', 'Stress management', 'Patient navigation', 'Family counseling', 'Spiritual support for those who request it, while respecting every individual\'s beliefs and choices'],
      },
    ],
    closing: 'Our aim is to improve patients\' quality of life, strengthen treatment adherence, and reduce the emotional burden associated with chronic illness.',
  },
  {
    icon: HandCoins,
    number: '07',
    title: 'Health Financing & Insurance Partnerships',
    intro: 'Access to healthcare should not be limited by financial barriers. We seek partnerships with insurance providers, healthcare institutions, philanthropic organizations, and corporate partners to increase access to:',
    sections: [
      {
        label: '',
        items: ['Preventive screenings', 'Patient education', 'Community outreach', 'Health promotion programs', 'Chronic disease management services', 'Capacity-building initiatives'],
      },
    ],
    closing: 'These partnerships will help make quality preventive healthcare more accessible and sustainable.',
  },
];

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] } }),
};

export default function CommunityHealth() {
  const { language } = useLanguage();
  const t = (translations[language].pages as typeof translations['en']['pages']).communityHealth;

  const [typed, setTyped] = useState('');
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };

  const slogan = t.slogan;

  useEffect(() => {
    setTyped('');
    let i = 0;
    const id = setInterval(() => {
      if (i <= slogan.length) {
        setTyped(slogan.slice(0, i));
        i++;
      } else {
        clearInterval(id);
      }
    }, 55);
    return () => clearInterval(id);
  }, [slogan]);

  return (
    <motion.div className="min-h-screen" style={{ background: ACCENT }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: PRIMARY }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url(/src/assets/images/noise.png)', backgroundSize: '200px' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text */}
            <div className="flex-1 min-w-0">
              <motion.div className="flex items-center gap-3 mb-6" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
                <span className="w-8 h-px" style={{ background: ACCENT }} />
                <span className="text-[10px] font-semibold tracking-[0.4em] uppercase" style={{ color: ACCENT }}>{t.badge}</span>
              </motion.div>

              <motion.h1
                className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-4"
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {t.heroTitle1}<br />{t.heroTitle2}
              </motion.h1>

              <motion.p
                className="text-lg font-light italic mb-8" style={{ color: 'rgba(251,243,244,0.8)' }}
                initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
              >
                {typed}<span className="animate-pulse">|</span>
              </motion.p>

              <motion.div className="w-16 h-px mb-8" style={{ background: 'rgba(251,243,244,0.4)' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />

              <motion.button
                onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide border overflow-hidden"
                style={{ color: PRIMARY, background: ACCENT, borderColor: ACCENT }}
                initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.65 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="relative z-10">{t.explorePillars}</span>
                <motion.span className="relative z-10" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>

            {/* Circular image */}
            <motion.div
              className="flex-shrink-0 flex justify-center"
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.35, duration: 0.7 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <span className="absolute -top-4 right-8 w-8 h-8 rounded-full" style={{ background: 'rgba(251,243,244,0.3)' }} />
                <span className="absolute top-10 -right-4 w-5 h-5 rounded-full" style={{ background: 'rgba(251,243,244,0.18)' }} />
                <span className="absolute -bottom-3 left-10 w-6 h-6 rounded-full" style={{ background: 'rgba(251,243,244,0.18)' }} />
                <img src={communityImg} alt="Community Health" className="w-full h-full object-cover rounded-full shadow-[0_8px_40px_-8px_rgba(0,0,0,0.5)]" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Vision & Mission ── */}
      <div style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { label: t.visionLabel, text: t.visionText },
              { label: t.missionLabel, text: t.missionText },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl border border-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_-4px_rgba(0,0,0,0.10)]"
                style={{ background: DARK }}
                variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px" style={{ background: ACCENT }} />
                  <span className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: ACCENT }}>{item.label}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(251,243,244,0.75)' }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Focus ── */}
      <div style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px" style={{ background: PRIMARY }} />
              <span className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: PRIMARY }}>{t.focusBadge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl mb-5 max-w-2xl" style={{ color: PRIMARY }}>{t.focusTitle}</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-3xl">{t.focusDesc}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[t.focus1, t.focus2, t.focus3, t.focus4].map((area, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-700 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.12)]"
                style={{ background: DARK }}
                variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <p className="text-sm font-medium" style={{ color: ACCENT }}>{area}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Gap insight ── */}
          <motion.div
            className="mt-14 grid lg:grid-cols-2 gap-6"
            variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <div className="relative p-8 rounded-2xl overflow-hidden" style={{ background: 'rgba(169,16,34,0.06)' }}>
              {/* decorative dots */}
              <span className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-20" style={{ background: PRIMARY }} />
              <span className="absolute top-8 right-10 w-2 h-2 rounded-full opacity-15" style={{ background: PRIMARY }} />
              <span className="absolute bottom-6 right-6 w-5 h-5 rounded-full opacity-10" style={{ background: PRIMARY }} />
              <span className="absolute bottom-4 left-6 w-2 h-2 rounded-full opacity-20" style={{ background: PRIMARY }} />
              <span className="absolute top-1/2 left-4 w-3 h-3 rounded-full opacity-10" style={{ background: PRIMARY }} />
              <p className="relative text-base leading-relaxed text-gray-700">{t.gapText}</p>
            </div>
            <div className="p-8 rounded-2xl border-l-4" style={{ background: DARK, borderColor: ACCENT }}>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(251,243,244,0.8)' }}>{t.responseText}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Strategic Pillars Carousel ── */}
      <div id="pillars" style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px" style={{ background: PRIMARY }} />
              <span className="text-[10px] font-semibold tracking-[0.35em] uppercase" style={{ color: PRIMARY }}>{t.pillarsBadge}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl max-w-2xl" style={{ color: PRIMARY }}>{t.pillarsTitle}</h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -60, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-gray-700 p-8 sm:p-10"
                style={{ background: DARK }}
              >
                {/* Card header */}
                <motion.div
                  className="flex items-start justify-between mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(251,243,244,0.1)' }}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {(() => { const Icon = pillars[active].icon; return <Icon className="w-5 h-5" style={{ color: ACCENT }} />; })()}
                    </motion.div>
                    <h3 className="text-lg font-semibold leading-snug" style={{ color: ACCENT }}>
                      {(t.pillars && t.pillars[active]?.title) || pillars[active].title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono ml-4 flex-shrink-0" style={{ color: 'rgba(251,243,244,0.3)' }}>{pillars[active].number}</span>
                </motion.div>

                {/* Intro */}
                <motion.p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'rgba(251,243,244,0.75)' }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.4 }}
                >
                  {(t.pillars && t.pillars[active]?.intro) || pillars[active].intro}
                </motion.p>

                {/* Sections */}
                {((t.pillars && t.pillars[active]?.sections) || pillars[active].sections).map((sec, si) => (
                  <motion.div
                    key={si}
                    className="mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.28 + si * 0.06, duration: 0.35 }}
                  >
                    {sec.label && (
                      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(251,243,244,0.45)' }}>{sec.label}</p>
                    )}
                    <ul className="space-y-2">
                      {sec.items.map((item, ii) => (
                        <motion.li
                          key={ii}
                          className="flex items-start gap-2.5 text-sm"
                          style={{ color: 'rgba(251,243,244,0.7)' }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.32 + si * 0.06 + ii * 0.04, duration: 0.3 }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: PRIMARY }} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                {/* Closing */}
                {((t.pillars && t.pillars[active]?.closing) || pillars[active].closing) && (
                  <motion.p
                    className="text-sm leading-relaxed mt-4 pt-4 border-t"
                    style={{ color: 'rgba(251,243,244,0.6)', borderColor: 'rgba(251,243,244,0.08)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    {(t.pillars && t.pillars[active]?.closing) || pillars[active].closing}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {pillars.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goTo(i)}
                    className="rounded-full"
                    animate={{
                      width: i === active ? 24 : 8,
                      background: i === active ? PRIMARY : 'rgba(169,16,34,0.25)',
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: 8 }}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => goTo(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: active === 0 ? 'rgba(169,16,34,0.2)' : PRIMARY,
                    color: active === 0 ? 'rgba(169,16,34,0.3)' : PRIMARY,
                    background: 'transparent',
                  }}
                  whileHover={active !== 0 ? { scale: 1.1, background: PRIMARY, color: ACCENT } : {}}
                  whileTap={active !== 0 ? { scale: 0.92 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </motion.button>
                <motion.button
                  onClick={() => goTo(Math.min(pillars.length - 1, active + 1))}
                  disabled={active === pillars.length - 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: active === pillars.length - 1 ? 'rgba(169,16,34,0.2)' : PRIMARY,
                    color: active === pillars.length - 1 ? 'rgba(169,16,34,0.3)' : PRIMARY,
                    background: 'transparent',
                  }}
                  whileHover={active !== pillars.length - 1 ? { scale: 1.1, background: PRIMARY, color: ACCENT } : {}}
                  whileTap={active !== pillars.length - 1 ? { scale: 0.92 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Long-Term Impact ── */}
      <div style={{ background: PRIMARY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-6 h-px" style={{ background: ACCENT }} />
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase" style={{ color: ACCENT }}>{t.impactBadge}</span>
              <span className="w-6 h-px" style={{ background: ACCENT }} />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
              {t.impactTitle}<br />{t.impactTitle2}
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10">{t.impactDesc}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide font-semibold transition-all duration-200"
              style={{ background: ACCENT, color: PRIMARY }}
            >
              {t.partnerCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumb footer nav */}
      <div style={{ background: ACCENT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-gray-700 transition-colors">{t.breadcrumbHome}</Link>
            <span className="text-gray-300">/</span>
            <Link to="/programs" className="hover:text-gray-700 transition-colors">{t.breadcrumbPrograms}</Link>
            <span className="text-gray-300">/</span>
            <span style={{ color: PRIMARY }}>{t.breadcrumbCommunityHealth}</span>
          </nav>
        </div>
      </div>

      <div style={{ background: ACCENT }}>
        <SubscribeForm />
      </div>

    </motion.div>
  );
}
