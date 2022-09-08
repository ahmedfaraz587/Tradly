import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from './english.json';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (cb) => { return RNLocalize.getLocales()[0].languageCode },
  init: () => {},
  cacheUserLanguage: () => {}
}


i18next.use(languageDetector).use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en', 
  resources: {
    en: english,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;