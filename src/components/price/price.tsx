import React from 'react';
import {useTranslation} from "react-i18next";
import BasicTable from "./price.table";
import {Grid} from "@mui/material";

const Price = () => {
    const {t}=useTranslation()
    return (
        <div style={{marginTop: '65px'}}>
            <h1>{t('navbar_price')}</h1>
            <Grid container pt={5}><BasicTable /></Grid>
        </div>
    );
};

export default Price;