import ceoImg from "/src/assets/images/ceo1.png";
import aboutBG from "/src/assets/images/aboutBG.png";
import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowRight, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.about;
  const [activeTab, setActiveTab] = useState("vision-mission");
  const [expanded, setExpanded] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "vision-mission":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-amber-400" />
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-500">{t.visionTitle}</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-3 leading-relaxed">{t.visionQuote}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{t.visionDesc}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-amber-400" />
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-500">{t.missionTitle}</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-3 leading-relaxed">{t.missionQuote}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{t.missionDesc}</p>
            </div>
          </div>
        );
      case "values":
        return (
          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-8 max-w-3xl leading-relaxed">{t.valuesDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: t.valueWholeness, desc: t.valueWholenessDesc },
                { title: t.valueTruth, desc: t.valueTruthDesc },
                { title: t.valueIdentity, desc: t.valueIdentityDesc },
                { title: t.valueIntegrity, desc: t.valueIntegrityDesc },
                { title: t.valueGrowth, desc: t.valueGrowthDesc },
                { title: t.valueCompassion, desc: t.valueCompassionDesc },
              ].map((v, i) => (
                <div key={i} className="p-5 rounded-2xl border border-amber-100/60 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{v.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
              <div className="p-5 rounded-2xl border border-amber-100/60 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] md:col-span-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t.valueLeadership}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{t.valueLeadershipDesc}</p>
              </div>
            </div>
          </div>
        );
      case "beliefs":
        return (
          <div className="mt-8 max-w-2xl">
            <p className="text-base text-gray-500 mb-10 leading-relaxed">{t.beliefsDesc}</p>
            <div className="space-y-0">
              {[t.belief1, t.belief2, t.belief3, t.belief4, t.belief5, t.belief6].filter(Boolean).map((belief, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-5 py-4 border-b border-gray-100 group"
                >
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-amber-400/80 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1 group-hover:text-gray-900 transition-colors duration-200">{belief}</p>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/0 group-hover:bg-amber-400 transition-all duration-300 shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#0a2540]">
        <div className="absolute inset-0">
          <img src={aboutBG} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              {/* eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <span className="w-8 h-px bg-amber-400" />
                <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-amber-300">{t.breadcrumbAbout}</span>
              </motion.div>

              {/* headline — word-by-word stagger */}
              <div className="overflow-hidden mb-4">
                {t.title.split(' ').map((word: string, i: number) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* thin rule */}
              <motion.div
                className="w-16 h-px bg-amber-400/50 mb-4"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />

              <motion.p
                className="text-white/65 text-sm max-w-lg leading-relaxed mb-7"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {t.intro}
              </motion.p>

              {/* CTA */}
              <motion.button
                onClick={() => document.getElementById('about-story')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-medium tracking-wide text-white border border-white/30 overflow-hidden"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.8)' }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(255,255,255,0)' }}
                  whileHover={{ background: 'rgba(255,255,255,0.1)' }}
                  transition={{ duration: 0.25 }}
                />
                <span className="relative z-10">{t.readMore}</span>
                <motion.span className="relative z-10" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </div>

            {/* Right — mosaic removed */}

          </div>
        </div>

        {/* bottom fade into white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      <div id="about-story" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-10">
          <Link to="/" className="hover:text-gray-900 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{t.breadcrumbAbout}</span>
        </nav>

        {/* Story */}
        <motion.div
          className="mb-14 max-w-4xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <div className={`space-y-4 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[2000px]' : 'max-h-[120px]'}`}>
            <p className="text-base leading-relaxed text-gray-700">{t.story1}</p>
            <div className={expanded ? 'block space-y-4' : 'hidden'}>
              <p className="text-base leading-relaxed text-gray-700">{t.story2}</p>
              <p className="text-base leading-relaxed text-gray-700">{t.story3}</p>
              <p className="text-base leading-relaxed text-gray-700">{t.story4}</p>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-base italic text-gray-600 mb-4 whitespace-pre-line">{t.storyQuote}</p>
                <p className="text-sm font-medium text-gray-800">{t.storyAuthor}</p>
                <p className="text-xs text-gray-500">{t.storyAuthorRole}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-2 text-amber-500 hover:text-amber-600 text-sm font-medium transition-colors"
          >
            {expanded ? t.readLess : t.readMore}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mb-14 py-10 px-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100/60"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl">
            Mind and Wholeness is a movement that restores people from brokenness to wholeness. We do this by nurturing the spirit, renewing the mind, and cultivating healthy lives through transformational programs, authentic community, and practical education. The Wholeness Institute extends this mission by equipping leaders, families, and professionals with the knowledge and tools to multiply that transformation in society.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-2">
            {[
              { key: "vision-mission", label: t.tabVisionMission },
              { key: "values", label: t.tabValues },
              { key: "beliefs", label: t.tabBeliefs }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 border-b-2 bg-transparent ${
                  activeTab === tab.key
                    ? "text-amber-500 border-amber-500"
                    : "text-gray-400 border-transparent hover:text-gray-600 hover:border-amber-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            className="min-h-[320px]"
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </motion.div>

        {/* Our Philosophy */}
        <motion.div
          className="py-16 mt-4 border-t border-gray-100"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-amber-400" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-500">Our Philosophy</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-6 max-w-2xl">We believe true transformation is holistic.</h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-10">
            A person cannot truly flourish if only one part of life is healthy. Wholeness involves three connected dimensions — and when these are nurtured together, people move from surviving to living with purpose. This is the foundation of everything we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ label: 'Spirit', desc: 'Connecting to God and eternal purpose — the source of identity, meaning, and inner peace.' }, { label: 'Soul', desc: 'The mind, will, and emotions — renewed through truth, healing, and intentional growth.' }, { label: 'Body', desc: 'Physical health and vitality — honoured as the vessel through which we live and serve.' }].map((item, i) => (
              <motion.div
                key={i}
                className="p-7 rounded-2xl border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-500 mb-3 block">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-2xl text-gray-900 mb-3">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          className="py-16 border-t border-gray-100"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-amber-400" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-500">What Makes Us Different</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-10 max-w-2xl">One journey. Every dimension.</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-4">
              {['Many organizations focus only on inspiration.', 'Others focus only on education.', 'Others focus only on fitness.', 'Others focus only on church.'].map((line, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-5 py-4 border-b border-gray-100 group"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-300 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{line}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex-1 lg:pl-12 lg:border-l border-gray-100">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Mind and Wholeness brings all of these together into one journey of holistic transformation.
              </p>
              <p className="text-base font-serif text-gray-900 text-xl leading-snug">
                We don't simply host events.<br />We build people.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          className="py-20 mt-8 border-t border-gray-100"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Text */}
            <div className="lg:w-1/2 w-full space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-amber-400" />
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-amber-500">{t.helloIm}</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-serif text-gray-900 leading-tight">
                LILIAN<br />TITUS
              </h2>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{t.authorRole}</p>
              <div className="space-y-3 text-gray-600 leading-relaxed pt-2">
                <p className="text-sm">{t.ceoBio1}</p>
                <p className="text-sm">{t.ceoBio2}</p>
                <p className="text-sm">{t.ceoBio3}</p>
                <p className="text-sm">{t.ceoBio4}</p>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.instagram.com/liliantitus_1?igsh=MXdsbXU2NjUxMXJ6bA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-5/12 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
              <img
                src={ceoImg}
                alt="Lilian Titus"
                className="w-full rounded-2xl object-cover object-bottom"
                style={{ clipPath: 'inset(6% 0 0 0 round 1rem)' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
