import React from 'react';
import {useTranslation} from "react-i18next";

const Home = () => {
    const {t}=useTranslation()
    return (
        <div style={{marginTop: '50px'}}>
          <h1>{t('navbar_home')}</h1>
        </div>
    );
};

export default Home;