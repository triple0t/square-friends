import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { storageInstace } from '@utilities/storage';

import * as enLang from './locals/en.json';
import * as frLang from './locals/fr.json';

const resources = {
  en: {
    translation: {}
  },
  fr: {
    translation: {}
  },
};
// saving on extra http cost here
resources.en.translation = {...resources.en.translation, ...enLang.default};
resources.fr.translation = {...resources.fr.translation, ...frLang.default};

const appState = storageInstace.getState();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: appState?.lang ?? "en",

    keySeparator: true,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;