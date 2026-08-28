import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import communityImg from '../../assets/images/community1.png';

interface SubscribeFormProps {
  variant?: 'simple' | 'detailed';
  title?: string;
  description?: string;
}

export const SubscribeForm = ({ title, description }: SubscribeFormProps) => {
  const { language } = useLanguage();
  const t = translations[language].whatsapp;

  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com', '_blank');
  };

  return (
    <section className="py-16 pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_1px_4px_-1px_rgba(0,0,0,0.04)] px-8 md:px-16 py-10 md:py-14">

          {/* Image */}
          <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={communityImg}
                alt="WhatsApp Community"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span
              className="absolute -top-2 -right-2 w-12 h-12 rounded-full z-20"
              style={{ background: 'radial-gradient(circle at 35% 30%, #a7f3d0, #10b981 55%, #065f46)' }}
            />
            <span
              className="absolute -bottom-2 -left-2 w-7 h-7 rounded-full blur-[2px] opacity-60"
              style={{ background: 'radial-gradient(circle at 35% 35%, #d1fae5, #34d399 55%, #059669)' }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center max-w-lg">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-emerald-600 mb-3">
              {t.footer}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug mb-4">
              {title || t.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {description || t.description}
            </p>
            <button
              onClick={handleJoinWhatsApp}
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-gray-900 text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-200 w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              {t.button}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
