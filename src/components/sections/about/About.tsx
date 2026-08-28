import ceoImg from "/src/assets/images/lilian.jpeg";
import liliImg from "/src/assets/images/lili.jpeg";
import michaelImg from "/src/assets/images/michael.jpeg";
import viviImg from "/src/assets/images/vivi.jpeg";
import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
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
                <span className="w-6 h-px bg-emerald-700" />
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-700">{t.visionTitle}</span>
              </div>
              <p className="text-sm text-gray-500 italic mb-3 leading-relaxed">{t.visionQuote}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{t.visionDesc}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-emerald-700" />
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-700">{t.missionTitle}</span>
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
                <div key={i} className="p-5 rounded-2xl border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{v.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
              <div className="p-5 rounded-2xl border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] md:col-span-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">{t.valueLeadership}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{t.valueLeadershipDesc}</p>
              </div>
            </div>
          </div>
        );
      case "beliefs":
        return (
          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-8 max-w-3xl leading-relaxed">{t.beliefsDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[t.belief1, t.belief2, t.belief3, t.belief4, t.belief5, t.belief6, t.belief7, t.belief8].map((belief, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-100">
                  <span className="mt-1 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{belief}</p>
                </div>
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
        {/* subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/src/assets/images/noise.png)', backgroundSize: '200px' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              {/* eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <span className="w-8 h-px bg-blue-300" />
                <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-blue-300">{t.breadcrumbAbout}</span>
              </motion.div>

              {/* headline — word-by-word stagger */}
              <div className="overflow-hidden mb-6">
                {t.title.split(' ').map((word: string, i: number) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3 font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight"
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
                className="w-16 h-px bg-blue-400/50 mb-6"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />

              <motion.p
                className="text-white/65 text-base max-w-lg leading-relaxed mb-10"
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

            {/* Right — mosaic of 3 portraits */}
            <motion.div
              className="flex-shrink-0 flex gap-4 items-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* tall card */}
              <div className="w-36 h-52 rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <img src={liliImg} alt="" className="w-full h-full object-cover" />
              </div>
              {/* two stacked cards */}
              <div className="flex flex-col gap-4">
                <div className="w-28 h-36 rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                  <img src={michaelImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                  <img src={viviImg} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

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
            className="mt-4 flex items-center gap-2 text-emerald-700 hover:text-emerald-900 text-sm font-medium transition-colors"
          >
            {expanded ? t.readLess : t.readMore}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>
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
                    ? "text-gray-900 border-gray-900"
                    : "text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-300"
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

        {/* CEO Section */}
        <motion.div
          className="py-20 mt-8 border-t border-gray-100"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Rectangle image */}
            <div className="lg:w-5/12 w-full">
              <div className="overflow-hidden rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)]">
                <img
                  src={ceoImg}
                  alt="Lilian Titus"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-7/12 w-full space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-emerald-700" />
                <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-emerald-700">{t.helloIm}</span>
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
              <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm font-medium group mt-2">
                {t.readMore}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
