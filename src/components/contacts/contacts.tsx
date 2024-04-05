import React from 'react';
import {useTranslation} from "react-i18next";

const Contacts = () => {
    const {t}=useTranslation()
    return (
        <div style={{marginTop: '50px'}}>
            <h1>{t('navbar_contacts')}</h1>
        </div>
    );
};

export default Contacts;