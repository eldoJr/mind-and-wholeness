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
    <section className="py-8">
      <div className="py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:h-96 shadow-lg overflow-hidden">
            <div className="flex-1 h-56 md:h-full">
              <img 
                src={communityImg} 
                alt="WhatsApp Community" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex-1 bg-white px-8 md:px-14 py-10 md:py-12 flex flex-col justify-center">
              <span className="inline-block w-10 h-[3px] bg-emerald-500 rounded-full mb-4" />
              <p className="text-[11px] font-medium text-emerald-600 tracking-[0.2em] uppercase mb-4">
                {title || t.title}
              </p>
              <h2 className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed mb-4 font-normal">
                {description || t.description}
              </h2>
              <p className="text-gray-400 text-xs tracking-wide mb-6">
                {t.footer}
              </p>
              <Button
                onClick={handleJoinWhatsApp}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-medium tracking-wide uppercase bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-300 w-fit shadow-md hover:shadow-lg"
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