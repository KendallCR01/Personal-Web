import { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import en from '../data/en.json';
import es from '../data/es.json';

function getNestedValue(obj, key) {
  return key.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const dictionary = language === 'en' ? en : es;
    const value = getNestedValue(dictionary, key);
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
