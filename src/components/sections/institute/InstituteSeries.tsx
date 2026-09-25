import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Bell, Users, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../utils/translations';
import instBg from '../../../assets/images/instBg.png';
import class1 from '../../../assets/images/class1.png';

const ClassCard = () => {
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{ height: '480px' } as React.CSSProperties}
    >
      {/* Image */}
      <motion.img
        src={class1}
        alt="Understanding Faith"
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* Badge */}
      <div className="absolute top-5 left-5">
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase bg-[#0a2954]/80 backdrop-blur-md text-white border border-white/20 rounded-full px-3 py-1.5">
          Available
        </span>
      </div>

      {/* Arrow icon top right */}
      <motion.div
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ background: 'rgba(255,255,255,0.25)' }}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </motion.div>

      {/* Bottom content — always visible title, description slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Description */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
          <p className="text-white/75 text-sm leading-relaxed mb-4">
            As the title implies, this course was curated in order to explain Faith — what the Bible says it is, and how we can apply Faith to different areas of our lives.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white/40 text-xs">8 students participated</span>
          </div>
        </div>

        {/* Title always visible */}
        <h3 className="text-white font-serif text-2xl leading-snug">Understanding Faith</h3>
        <div className="mt-2 w-8 h-px bg-white/30 group-hover:w-16 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const ComingSoonCard = ({ hint, index }: { hint: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="group relative rounded-3xl overflow-hidden"
    style={{ height: '480px' }}
  >
      <div className="absolute inset-0" style={{ backgroundImage: `url(${instBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
    <div className="absolute inset-0 bg-[#0a2954]/85" />

    {/* Subtle noise texture overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'
    }} />

    {/* Badge */}
    <div className="absolute top-5 left-5">
      <span className="text-[10px] font-semibold tracking-[0.25em] uppercase bg-[#0a2954]/80 backdrop-blur-md text-white/50 border border-white/10 rounded-full px-3 py-1.5">
        Coming Soon
      </span>
    </div>

    {/* Center icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-16 h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
      >
        <Bell className="w-6 h-6 text-white/30" />
      </motion.div>
    </div>

    {/* Bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <p className="text-white/30 text-xs italic mb-2">Stay tuned</p>
      <h3 className="text-white/60 font-serif text-xl leading-snug">{hint}</h3>
      <div className="mt-2 w-8 h-px bg-white/10" />
    </div>
  </motion.div>
);

const InstituteSeries = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.institute;

  return (
    <section
      className="relative py-24"
      style={{ backgroundImage: `url(${instBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute inset-0 bg-[#0a2954]/85" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-blue-400/60" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-blue-400/60">
              {t.featuredCourses}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white max-w-xl leading-tight">
            {t.featuredCourses}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ClassCard />
          {[t.hint1, t.hint2].map((hint, i) => (
            <ComingSoonCard key={i} hint={hint} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstituteSeries;
