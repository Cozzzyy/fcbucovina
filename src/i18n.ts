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
      order: ['querystring', 'navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupQuerystring: 'lng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      convertDetectedLanguage: (lng) => {
        const baseLang = lng.split('-')[0].toLowerCase();
        const supported = ['en', 'nl', 'fr', 'ro'];
        
        if (supported.includes(baseLang)) {
          return baseLang;
        }
        
        console.log(`Language ${lng} not supported, using fallback`);
        return 'ro'; // fallback
      },
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
    
    debug: false, // Set to true to see detection logs
  });

// Log when language changes
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
  document.documentElement.lang = lng; // Update HTML lang attribute for SEO
});

export default i18n;
