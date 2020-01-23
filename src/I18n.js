import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'fr'];

// Dictionary of translations
const translations = {
  en: {
    'Front-end web developer based in Paris':
      'Front-end web developer based in Paris',
    Career: 'Career',
    Links: 'Links',
  },
  fr: {
    'Front-end web developer based in Paris':
      'Développeur web front-end à Paris',
    Career: 'Parcours',
    Links: 'Liens',
  },
};

const I18n = createI18n(locales, translations);

export default I18n;
