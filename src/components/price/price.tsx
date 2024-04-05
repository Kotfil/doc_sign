import React from 'react';
import {useTranslation} from "react-i18next";

const Price = () => {
    const {t}=useTranslation()
    return (
        <div style={{marginTop: '50px'}}>
            <h1>{t('navbar_price')}</h1>
        </div>
    );
};

export default Price;