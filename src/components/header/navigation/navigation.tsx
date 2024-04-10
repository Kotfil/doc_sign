import {useState} from 'react';
import {Tabs} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Typography} from '../../typography/typography';
import {NavLink} from "react-router-dom";
import {TabWrap, TypographyWrap} from "./navigation.style";

const Navigation = () => {
    const {t} = useTranslation()
    const [value, setValue] = useState<any>()

    const handleChange = (e: any) => {
        console.log(e.target)
    }

    return <Tabs   sx={{marginLeft: 'auto'}} value={value} onChange={handleChange}>
        {/*//@ts-ignore*/}
        <NavLink to={'/'}> <TabWrap textColor="secondary" value={t('navbar_home')} label={<TypographyWrap
            type={'montserratSemiBold18'}>  {t('navbar_home')}</TypographyWrap>}/></NavLink>
        {/*//@ts-ignore*/}
        <NavLink to={'/price'}> <TabWrap textColor="secondary" value={t('navbar_price')} label={<TypographyWrap
            type={'montserratSemiBold18'}>{t('navbar_price')}  </TypographyWrap>}/></NavLink>
        {/*//@ts-ignore*/}
        <NavLink to={'/about'}> <TabWrap textColor="secondary" value={t('navbar_about')} label={<TypographyWrap
            type={'montserratSemiBold18'}>  {t('navbar_about')} </TypographyWrap>}/></NavLink>
        {/*//@ts-ignore*/}
        <NavLink to={'/contacts'}> <TabWrap textColor="secondary" value={t('navbar_contacts')} label={<TypographyWrap
            type={'montserratSemiBold18'}> {t('navbar_contacts')}</TypographyWrap>}/></NavLink>
    </Tabs>
};

export default Navigation;