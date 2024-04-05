import {createContext} from "react";


export type Language = 'en' | 'ru' | 'ua';

export interface I18nContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    i18n?: any | {
        [key in Language]: {
            title: string
            navbar_home: string
            navbar_price: string
            navbar_about: string
            navbar_contacts: string
            navbar_language: string
            navbar_language_small: string
        };
    } | any
}

const i18n: I18nContextType['i18n'] = {
    en: {
        title: "DoCuments",
        navbar_home: 'Home',
        navbar_price: 'Price',
        navbar_about: 'About',
        navbar_contacts: 'Contacts',
        navbar_language: 'EN',
        navbar_language_small : 'en'
    },
    ru: {
        title: "ДоКументы",
        navbar_home: 'Главная',
        navbar_price: 'Цены',
        navbar_about: 'О нас',
        navbar_contacts: 'Контакты',
        navbar_language: 'RU',
        navbar_language_small : 'ru'
    },
    ua: {
        title: "ДоКументы",
        navbar_home: 'Головна',
        navbar_price: 'Ціни',
        navbar_about: 'Про нас',
        navbar_contacts: 'Контакти',
        navbar_language: 'UA',
        navbar_language_small : 'ua'
    }
};
export const I18nContext = createContext<I18nContextType>({
    language: 'en',
    setLanguage: () => {},
    i18n,
});