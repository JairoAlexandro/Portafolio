import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  const { t, language, setLanguage } = context;

  return {
    t,
    language,
    setLanguage,
  };
};
