import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Users, Lightbulb, Shield, Smartphone, Building2, HandCoins, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const PRIMARY = '#a91022';

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
        items: ['Health education', 'Emotional support', 'Lifestyle coaching', 'Nutrition counseling', 'Mental health support', 'Stress management', 'Patient navigation', 'Family counseling', "Spiritual support for those who request it, while respecting every individual's beliefs and choices"],
      },
    ],
    closing: "Our aim is to improve patients' quality of life, strengthen treatment adherence, and reduce the emotional burden associated with chronic illness.",
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

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-[#a91022]" />
      <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#a91022]">{text}</span>
    </div>
  );
}

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

  useEffect(() => {
    setTyped('');
    let i = 0;
    const id = setInterval(() => {
      if (i <= t.slogan.length) { setTyped(t.slogan.slice(0, i)); i++; }
      else clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [t.slogan]);

  return (
    <motion.div className="min-h-screen bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: PRIMARY }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-start">
            <motion.div className="flex items-center gap-3 mb-3" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
              <span className="w-8 h-px bg-[#fbf3f4]" />
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#fbf3f4]">{t.badge}</span>
            </motion.div>
            <div className="overflow-hidden mb-4">
              {`${t.heroTitle1} ${t.heroTitle2}`.split(' ').map((word, i) => (
                <motion.span key={i} className="inline-block mr-3 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight"
                  initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >{word}</motion.span>
              ))}
            </div>
            <motion.div className="w-16 h-px mb-4 bg-white/30" style={{ transformOrigin: 'left' }}
              initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.55, duration: 0.5 }} />
            <motion.p className="text-white/65 text-sm max-w-lg leading-relaxed mb-3"
              initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              {t.missionText}
            </motion.p>
            <motion.p className="text-white/40 text-sm font-light italic mb-8"
              initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.68 }}>
              {typed}<span className="animate-pulse">|</span>
            </motion.p>
            <motion.button
              onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide border overflow-hidden bg-[#fbf3f4] border-[#fbf3f4]"
              style={{ color: PRIMARY }}
              initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.78 }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            >
              <span className="relative z-10">{t.explorePillars}</span>
              <motion.span className="relative z-10" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Vision & Mission ── */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <SectionLabel text={t.visionLabel} />
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight max-w-2xl">{t.missionLabel}</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6">
            {[{ label: t.visionLabel, text: t.visionText }, { label: t.missionLabel, text: t.missionText }].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-[#a91022]" />
                  <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#a91022]">{item.label}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Focus Areas ── */}
      <div className="bg-[#fdf8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
            <SectionLabel text={t.focusBadge} />
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-5 max-w-2xl">{t.focusTitle}</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-3xl">{t.focusDesc}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[t.focus1, t.focus2, t.focus3, t.focus4].map((area, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06)]"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#a91022]" />
                <p className="text-sm font-medium text-gray-700">{area}</p>
              </motion.div>
            ))}
          </div>

          {/* Gap & Response */}
          <motion.div className="grid lg:grid-cols-2 gap-6" variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="p-8 rounded-2xl bg-[#a91022]/5 border border-[#a91022]/10">
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#a91022] mb-4">The Gap</p>
              <p className="text-sm leading-relaxed text-gray-700">{t.gapText}</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border-l-4 border-[#a91022] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]">
              <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#a91022] mb-4">Our Response</p>
              <p className="text-sm leading-relaxed text-gray-700">{t.responseText}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Strategic Pillars ── */}
      <div id="pillars" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
            <SectionLabel text={t.pillarsBadge} />
            <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight max-w-2xl">{t.pillarsTitle}</h2>
          </motion.div>

          {/* Pillar tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {pillars.map((p, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                  active === i ? 'bg-[#a91022] text-white shadow-sm' : 'bg-gray-50 text-gray-500 hover:bg-[#a91022]/5 hover:text-[#a91022]'
                }`}
              >
                <span className="font-mono">{p.number}</span>
              </button>
            ))}
          </div>

          {/* Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={active} custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 40, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -40, opacity: 0 }),
                }}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-gray-100 bg-white shadow-[0_4px_32px_-4px_rgba(0,0,0,0.08)] p-8 sm:p-10"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#a91022]/8"
                      initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 20 }}
                      style={{ background: 'rgba(169,16,34,0.08)' }}
                    >
                      {(() => { const Icon = pillars[active].icon; return <Icon className="w-5 h-5" style={{ color: PRIMARY }} />; })()}
                    </motion.div>
                    <motion.h3 className="text-lg font-semibold leading-snug text-gray-900 max-w-lg"
                      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.35 }}>
                      {pillars[active].title}
                    </motion.h3>
                  </div>
                  <span className="text-xs font-mono text-gray-300 ml-4 flex-shrink-0">{pillars[active].number}</span>
                </div>

                {/* Intro */}
                <motion.p className="text-sm leading-relaxed text-gray-600 mb-6"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.35 }}>
                  {pillars[active].intro}
                </motion.p>

                {/* Sections */}
                {pillars[active].sections.map((sec, si) => (
                  <motion.div key={si} className="mb-5"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 + si * 0.06 }}>
                    {sec.label && <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">{sec.label}</p>}
                    <ul className="space-y-2">
                      {sec.items.map((item, ii) => (
                        <motion.li key={ii} className="flex items-start gap-2.5 text-sm text-gray-600"
                          initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.28 + si * 0.05 + ii * 0.03 }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#a91022]" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                {/* Closing */}
                {pillars[active].closing && (
                  <motion.p className="text-sm leading-relaxed text-gray-500 mt-4 pt-4 border-t border-gray-100"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                    {pillars[active].closing}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                {pillars.map((_, i) => (
                  <motion.button key={i} onClick={() => goTo(i)} className="rounded-full"
                    animate={{ width: i === active ? 24 : 8, background: i === active ? PRIMARY : 'rgba(169,16,34,0.2)' }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: 8 }} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <motion.button onClick={() => goTo(Math.max(0, active - 1))} disabled={active === 0}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                  style={{ borderColor: active === 0 ? 'rgba(169,16,34,0.15)' : PRIMARY, color: active === 0 ? 'rgba(169,16,34,0.25)' : PRIMARY }}
                  whileHover={active !== 0 ? { scale: 1.08 } : {}} whileTap={active !== 0 ? { scale: 0.92 } : {}}>
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </motion.button>
                <motion.button onClick={() => goTo(Math.min(pillars.length - 1, active + 1))} disabled={active === pillars.length - 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                  style={{ borderColor: active === pillars.length - 1 ? 'rgba(169,16,34,0.15)' : PRIMARY, color: active === pillars.length - 1 ? 'rgba(169,16,34,0.25)' : PRIMARY }}
                  whileHover={active !== pillars.length - 1 ? { scale: 1.08 } : {}} whileTap={active !== pillars.length - 1 ? { scale: 0.92 } : {}}>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Long-Term Impact ── */}
      <div className="bg-[#a91022]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div className="max-w-3xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-6 h-px bg-white/40" />
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/60">{t.impactBadge}</span>
              <span className="w-6 h-px bg-white/40" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
              {t.impactTitle}<br />{t.impactTitle2}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">{t.impactDesc}</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 bg-white hover:bg-white/90"
              style={{ color: PRIMARY }}>
              {t.partnerCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <nav className="flex items-center gap-1.5 text-sm text-gray-400">
            <Link to="/" className="hover:text-gray-700 transition-colors">{t.breadcrumbHome}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/programs" className="hover:text-gray-700 transition-colors">{t.breadcrumbPrograms}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#a91022]">{t.breadcrumbCommunityHealth}</span>
          </nav>
        </div>
      </div>

    </motion.div>
  );
}
