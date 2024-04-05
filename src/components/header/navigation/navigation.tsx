import React, {useState} from 'react';
import {Tab, Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Typography} from 'components/typography/typography';
import {NavLink} from "react-router-dom";
import {TabWrap} from "./navigation.style";

const Navigation = () => {
    const {t} = useTranslation()
    const [value,setValue] = useState<any>()

    const handleChange = (e: any) => {
        console.log(e.target)
    }
    return <Tabs sx={{marginLeft: 'auto'}}  value={value} onChange={handleChange}>
       <TabWrap  value={t('navbar_home')} label={<Typography type={'montserratSemiBold18'}>  <NavLink to={'/'}>{t('navbar_home')}</NavLink> </Typography>} />
        <TabWrap  value={t('navbar_price')} label={<Typography type={'montserratSemiBold18'}><NavLink to={'/price'}>{t('navbar_price')}</NavLink>   </Typography>} />
         <TabWrap  value={t('navbar_about')} label={<Typography type={'montserratSemiBold18'}>  <NavLink to={'/about'}>{t('navbar_about')} </NavLink></Typography>} />
        <TabWrap  value={t('navbar_contacts')} label={<Typography type={'montserratSemiBold18'}>  <NavLink to={'/contacts'}>{t('navbar_contacts')}</NavLink> </Typography>} />
    </Tabs>
};

export default Navigation;