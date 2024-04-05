import Resources from "i18next";


declare module 'i18n' {

    interface CustomTypeOptions {
        defaultNS: 'title';
        resources: Resources;
    }
}