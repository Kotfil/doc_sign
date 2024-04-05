import {I18nContext} from "./context";
import {Language} from "../../locale-context";
import {ReactNode, useState} from "react";

interface I18nProviderProps {
    children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
    const [language, setLanguage] = useState<Language>(
        (navigator.language.slice(0, 2) as Language) || 'en'
    );

    return (
        <I18nContext.Provider value={{ language, setLanguage }}>
            {children}
        </I18nContext.Provider>
    );
};