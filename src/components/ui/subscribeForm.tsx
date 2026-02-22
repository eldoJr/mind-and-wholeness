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
    window.open('https://chat.whatsapp.com/your-group-link', '_blank');
  };

  return (
    <section className="py-16">
      <div className="py-12 space-y-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row min-h-[500px] shadow-lg">
            <div className="flex-1">
              <img 
                src={communityImg} 
                alt="WhatsApp Community" 
                className="w-full h-100 object-cover object-center"
              />
            </div>
            <div className="flex-1 bg-white px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center">
              <div className="space-y-6 max-w-lg">
                <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">
                  {title || t.title}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                  {description || t.description}
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t.footer}
                </p>
                <Button
                  onClick={handleJoinWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition"
                >
                  <MessageCircle size={18} />
                  {t.button}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};