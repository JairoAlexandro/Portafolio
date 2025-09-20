import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Importar las traducciones
import esTranslations from '../locales/es/common.json';
import enTranslations from '../locales/en/common.json';
import frTranslations from '../locales/fr/common.json';
import deTranslations from '../locales/de/common.json';
import itTranslations from '../locales/it/common.json';

export type Language = 'es' | 'en' | 'fr' | 'de' | 'it';

interface TranslationContextType {
  t: (key: string) => string;
  language: Language;
  setLanguage: (language: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  es: esTranslations,
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  it: itTranslations,
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Obtener el idioma del localStorage o usar 'es' por defecto
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'es';
  });

  useEffect(() => {
    // Guardar el idioma en localStorage cuando cambie
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Si no encuentra la traducción, buscar en español como fallback
        value = translations.es;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Retornar la key si no encuentra la traducción
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: TranslationContextType = {
    t,
    language,
    setLanguage,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationContext };
