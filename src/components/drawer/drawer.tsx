import  {useEffect, useState} from 'react';
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useTranslation} from "react-i18next";
import MenuIcon from '@mui/icons-material/Menu';
import {Typography} from "../typography/typography";
import {NavLink, useLocation} from "react-router-dom";

const DrawerPage = () => {
    const {t} = useTranslation()
    const [open, setOpen] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setOpen(false)
    }, [location])
    return <>
        <Drawer open={open} onClose={() => setOpen(false)}>
            <List>
                <NavLink to={'/'}> <ListItemButton>
                    <ListItemIcon>
                        <ListItemText><Typography
                            type={'montserratSemiBold18'}>  {t('navbar_home')} </Typography></ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                </NavLink>
                <NavLink to={'/price'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText><Typography
                                type={'montserratSemiBold18'}>{t('navbar_price')} </Typography></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </NavLink>
                <NavLink to={'/about'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText><Typography
                                type={'montserratSemiBold18'}>{t('navbar_about')}</Typography></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </NavLink>
                <NavLink to={'/contacts'}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText><Typography
                                type={'montserratSemiBold18'}> {t('navbar_contacts')} </Typography></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </NavLink>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpen(!open)}><MenuIcon/></IconButton>
    </>
        ;
};

export default DrawerPage;
// <TabWrap  value={t('navbar_home')} label={<Typography type={'montserratSemiBold18'}>  <NavLink to={'/'}>{t('navbar_home')}</NavLink> </Typography>} />