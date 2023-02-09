import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import EN from "./i18n/en"
import TR from "./i18n/tr"

import Flatpickr from "flatpickr";
import {Turkish} from "flatpickr/dist/l10n/tr";

const resources = {
  en: {
    translation: EN
  },
  tr: {
    translation: TR
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng:   localStorage.getItem("selectedLang") ?? "en",
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', lng => {
  localStorage.setItem("selectedLang", lng)
  Flatpickr.localize(lng === "tr" ? Turkish : Flatpickr.l10ns.en)
})

export default i18n;
