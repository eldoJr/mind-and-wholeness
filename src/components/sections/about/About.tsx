import ceoImg from "/src/assets/images/lilian.jpeg";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
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
          <div className="mt-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">{t.visionMissionTitle}</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">{t.visionMissionDesc}</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">{t.visionTitle}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">{t.visionQuote}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{t.visionDesc}</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">{t.missionTitle}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">{t.missionQuote}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{t.missionDesc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "values":
        return (
          <div className="mt-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">{t.valuesTitle}</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-4xl mx-auto">{t.valuesDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: t.valueWholeness, desc: t.valueWholenessDesc },
                  { title: t.valueTruth, desc: t.valueTruthDesc },
                  { title: t.valueIdentity, desc: t.valueIdentityDesc },
                  { title: t.valueIntegrity, desc: t.valueIntegrityDesc },
                  { title: t.valueGrowth, desc: t.valueGrowthDesc },
                  { title: t.valueCompassion, desc: t.valueCompassionDesc },
                ].map((v, i) => (
                  <div key={i} className="bg-emerald-50 p-6 rounded-lg">
                    <h4 className="text-lg font-serif text-gray-900 mb-3">{v.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
                <div className="bg-emerald-50 p-6 rounded-lg md:col-span-2">
                  <h4 className="text-lg font-serif text-gray-900 mb-3">{t.valueLeadership}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{t.valueLeadershipDesc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "beliefs":
        return (
          <div className="mt-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">{t.beliefsTitle}</h2>
              <p className="text-base text-gray-700 mb-8 text-center leading-relaxed max-w-4xl mx-auto">{t.beliefsDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {[t.belief1, t.belief2, t.belief3, t.belief4, t.belief5, t.belief6, t.belief7, t.belief8].map((belief, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 text-xl mt-1">•</span>
                    <p className="text-sm text-gray-700 leading-relaxed">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      className="bg-gradient-to-br from-slate-50 to-emerald-50 px-4 sm:px-8 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900 transition-colors">{t.breadcrumbHome}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 underline">{t.breadcrumbAbout}</span>
        </nav>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-left mb-12" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-6 leading-tight">{t.title}</h1>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">{t.intro}</p>
          </motion.div>

          <motion.div className="mb-12" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
            <div className={`space-y-4 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px]' : 'max-h-[200px]'}`}>
              <p className="text-base leading-relaxed text-gray-700 text-justify">{t.story1}</p>
              <div className={expanded ? 'block space-y-4' : 'hidden'}>
                <p className="text-base leading-relaxed text-gray-700 text-justify">{t.story2}</p>
                <p className="text-base leading-relaxed text-gray-700 text-justify">{t.story3}</p>
                <p className="text-base leading-relaxed text-gray-700 text-justify">{t.story4}</p>
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <p className="text-base italic text-gray-700 mb-4 whitespace-pre-line">{t.storyQuote}</p>
                  <p className="text-sm text-gray-600">{t.storyAuthor}<br /><span className="text-xs">{t.storyAuthorRole}</span></p>
                </div>
              </div>
            </div>
            <button onClick={() => setExpanded(!expanded)} className="mt-4 flex items-center gap-2 text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
              {expanded ? (<><span>{t.readLess}</span><ChevronDown className="w-4 h-4 transform rotate-180" /></>) : (<><span>{t.readMore}</span><ChevronDown className="w-4 h-4" /></>)}
            </button>
          </motion.div>

          <motion.div className="flex flex-wrap gap-8 mb-6 border-b border-gray-200" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
            {[
              { key: "vision-mission", label: t.tabVisionMission },
              { key: "values", label: t.tabValues },
              { key: "beliefs", label: t.tabBeliefs }
            ].map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-sm font-medium transition-all duration-300 border-b-2 bg-transparent uppercase tracking-wide ${activeTab === tab.key ? "text-gray-900 border-gray-900" : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"}`}>
                {tab.label}
              </button>
            ))}
          </motion.div>

          <motion.div className="min-h-[400px]" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} key={activeTab}>
            {renderContent()}
          </motion.div>
        </div>

        <motion.div className="py-20 border-b border-gray-200" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
          <div className="mx-auto max-w-7xl">
            <div className="relative flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={ceoImg} alt="Lilian Titus - Founder of Mind & Wholeness" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <div>
                  <p className="text-sm font-serif tracking-[0.3em] text-gray-600 mb-4">{t.helloIm}</p>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight mb-4">LILIAN<br />TITUS</h2>
                  <p className="text-sm font-serif tracking-[0.2em] text-gray-700 uppercase">{t.authorRole}</p>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                  <p className="text-base">{t.ceoBio1}</p>
                  <p className="text-base">{t.ceoBio2}</p>
                  <p className="text-base">{t.ceoBio3}</p>
                  <p className="text-base">{t.ceoBio4}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
