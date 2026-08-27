import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';
import { Button } from './';
import communityImg from '../../assets/images/community1.png';

interface SubscribeFormProps {
  variant?: 'simple' | 'detailed';
  title?: string;
  description?: string;
}

export const SubscribeForm = ({ 
  title,
  description
}: SubscribeFormProps) => {
  const { language } = useLanguage();
  const t = translations[language].whatsapp;

  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com', '_blank');
  };

  return (
    <section className="py-0 px-4 sm:px-6 lg:px-0">
      <div className="py-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] px-8 md:px-16 py-10 md:py-14">
            {/* Circle image with decorative dots */}
            <div className="relative flex-shrink-0 w-72 h-72 md:w-96 md:h-96">
              {/* Mid-right sphere — behind image, half showing */}
              <span className="absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 rounded-full z-0" style={{ background: 'radial-gradient(circle at 35% 35%, #6ee7b7, #059669 60%, #064e3b)' }} />
              {/* Circle image on top */}
              <div className="relative w-full h-full rounded-full overflow-hidden z-10">
                <img
                  src={communityImg}
                  alt="WhatsApp Community"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Large sphere — top-right, full color, 3D */}
              <span className="absolute -top-2 -right-2 w-16 h-16 rounded-full z-20" style={{ background: 'radial-gradient(circle at 35% 30%, #a7f3d0, #10b981 55%, #065f46)' }} />
              {/* Small blurred sphere — bottom-left, ofuscado */}
              <span className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full blur-[2px] z-10" style={{ background: 'radial-gradient(circle at 35% 35%, #d1fae5, #34d399 55%, #059669)', opacity: 0.6 }} />
            </div>
            {/* Text content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {title || t.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                {description || t.description}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {t.footer}
              </p>
              <Button
                onClick={handleJoinWhatsApp}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-300 w-fit shadow-md hover:shadow-lg"
              >
                <MessageCircle size={15} />
                {t.button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};