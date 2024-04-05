import React from 'react';
import {useTranslation} from "react-i18next";

const About = () => {
    const {t}=useTranslation()
    return (
        <div style={{marginTop: '50px'}}>
            <h1>{t('navbar_about')}</h1>
        </div>
    );
};

export default About;