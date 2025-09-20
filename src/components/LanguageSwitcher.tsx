import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const handleLanguageChange = (newLanguage: 'es' | 'en' | 'fr' | 'de' | 'it') => {
    setLanguage(newLanguage);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
        title="Change language"
      >
        <Globe size={20} />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          <button
            onClick={() => handleLanguageChange('es')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'es'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'en'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => handleLanguageChange('fr')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'fr'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            🇫🇷 Français
          </button>
          <button
            onClick={() => handleLanguageChange('de')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'de'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            🇩🇪 Deutsch
          </button>
          <button
            onClick={() => handleLanguageChange('it')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'it'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            🇮🇹 Italiano
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
