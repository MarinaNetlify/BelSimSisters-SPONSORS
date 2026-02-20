import React, { createContext, useContext, useState, useCallback } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'by',
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('by');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

export function useT() {
  const { language } = useLanguage();
  const langData = translations[language];

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(langData, key);
      if (typeof value === 'string') return value;
      return key;
    },
    [langData]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(langData, key);
      if (Array.isArray(value)) return value as string[];
      return [];
    },
    [langData]
  );

  return { t, tArray };
}
