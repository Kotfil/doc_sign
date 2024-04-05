import React, {useEffect, useState} from 'react';
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useTranslation} from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
import {Typography} from "../typography/typography";
import {NavLink, useLocation} from "react-router-dom";

const DrawerPage = () => {
    const{t}=useTranslation()
    const [open,setOpen] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setOpen(false)
    },[location])
    return <>
        <Drawer open={open} onClose={() => setOpen(false)} >
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText><Typography type={'montserratSemiBold18'}>  <NavLink to={'/'}>{t('navbar_home')}</NavLink> </Typography></ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText><Typography type={'montserratSemiBold18'}>  <NavLink to={'/price'}>{t('navbar_price')}</NavLink> </Typography></ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText><Typography type={'montserratSemiBold18'}>  <NavLink to={'/about'}>{t('navbar_about')}</NavLink> </Typography></ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText><Typography type={'montserratSemiBold18'}>  <NavLink to={'/contacts'}>{t('navbar_contacts')}</NavLink> </Typography></ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpen(!open)}><MenuIcon /></IconButton>
    </>
    ;
};

export default DrawerPage;
// <TabWrap  value={t('navbar_home')} label={<Typography type={'montserratSemiBold18'}>  <NavLink to={'/'}>{t('navbar_home')}</NavLink> </Typography>} />