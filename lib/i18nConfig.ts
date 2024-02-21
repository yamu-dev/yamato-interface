import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// 言語jsonファイルのimport
import translation_en from "./locales/en";
import translation_ja from "./locales/ja";

const resources = {
  ja: {
    translation: translation_ja,
  },
  en: {
    translation: translation_en,
  },
};

function getDefaultLanguage() {
  if (typeof window === "undefined") {
    return "ja";
  }
  return ["ja", "en"].includes(window.navigator.language)
    ? window.navigator.language
    : "ja";
}

const defaultLanguage = getDefaultLanguage();

i18next.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  preload: [defaultLanguage],
  interpolation: { escapeValue: false },
});

export default i18next;
