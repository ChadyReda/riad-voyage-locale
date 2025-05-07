
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="relative language-selector">
      <button className="flex items-center gap-1 text-sm focus:outline-none">
        <Globe size={18} />
        <span className="capitalize hidden md:inline">{language}</span>
      </button>
      <div className="language-dropdown hidden absolute right-0 top-full mt-2 w-32 bg-white shadow-lg rounded-md py-2 z-50">
        <button
          onClick={() => setLanguage('en')}
          className={`block w-full text-left px-4 py-2 text-sm hover:bg-riad-beige ${language === 'en' ? 'font-bold' : ''}`}
        >
          {t('languages.en')}
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`block w-full text-left px-4 py-2 text-sm hover:bg-riad-beige ${language === 'fr' ? 'font-bold' : ''}`}
        >
          {t('languages.fr')}
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`block w-full text-left px-4 py-2 text-sm hover:bg-riad-beige ${language === 'es' ? 'font-bold' : ''}`}
        >
          {t('languages.es')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
