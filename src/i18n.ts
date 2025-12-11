import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import nlTranslations from './locales/nl.json';
import frTranslations from './locales/fr.json';
import roTranslations from './locales/ro.json';

// Configure i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      nl: {
        translation: nlTranslations,
      },
      fr: {
        translation: frTranslations,
      },
      ro: {
        translation: roTranslations,
      },
    },
    fallbackLng: 'ro',
    supportedLngs: ['en', 'nl', 'fr', 'ro'],
    
    // Language detection options
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
