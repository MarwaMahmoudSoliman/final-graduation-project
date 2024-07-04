import React, { createContext, useContext, useState } from 'react';
import i18n from '../i18n';

const TranslationContext = createContext();

export const useTranslationContext = () => useContext(TranslationContext);

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;

