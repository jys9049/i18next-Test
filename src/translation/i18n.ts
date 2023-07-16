import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./languages/ko-KR/translation.json";
import en from "./languages/en-US/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ko: {
      translation: ko,
    },
  },
  lng: "ko", // 기본 언어
});

export default i18n;
