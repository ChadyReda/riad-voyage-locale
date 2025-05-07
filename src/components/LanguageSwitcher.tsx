import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as 'en' | 'fr' | 'es'); // Type assertion to ensure correct type
    setIsDropdownOpen(false); // close dropdown on selection
  };

  return (
    <div className="relative language-selector">
      <button
        className="flex items-center gap-1 text-sm focus:outline-none"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Globe size={18} />
        <span className="capitalize hidden md:inline">{language}</span>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white shadow-lg rounded-md py-2 z-50">
          {['en', 'fr', 'es'].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-riad-beige ${
                language === lang ? 'font-bold' : ''
              }`}
            >
              {t(`languages.${lang}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
