import {createContext} from "react";
import {I18nContextType} from "../../locale-context";
import i18n from "../../i18n";

export const I18nContext = createContext<I18nContextType>({
    language: 'ru',
    setLanguage: () => {},
    i18n: i18n,
});