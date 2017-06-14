import i18next from 'i18next';
import Backend from 'i18next-sync-fs-backend';
import path from 'path';

i18next
  .use(Backend)
  .init({
    debug: (process.env.NODE_ENV === 'development'),
    lng: 'en-US',
    fallbackLng: 'en-US',
    initImmediate: false,
    saveMissing: true,
    defaultNS: 'misc',
    ns: ['misc', 'intro'],
    load: 'currentOnly',
    backend: {
      loadPath: path.resolve(__dirname, '../../locales', '{{lng}}', '{{ns}}.json'),
      addPath: path.resolve(__dirname, '../../locales', '{{lng}}', '{{ns}}.json'),
      jsonIndent: 2
    }
  });

export const getI18n = () => i18next;
