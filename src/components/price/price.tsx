import React from 'react';
import {useTranslation} from "react-i18next";
import BasicTable from "./price.table";
import {Grid} from "@mui/material";
import PriceSelect from "./price.select";

const Price = () => {
    const {t}=useTranslation()
    return (
        <div style={{marginTop: '65px'}}>
            <h1>{t('navbar_price')}</h1>
            <Grid px={20}><PriceSelect /></Grid>
            <Grid container pt={5}><BasicTable /></Grid>
        </div>
    );
};

export default Price;