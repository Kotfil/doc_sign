import React from 'react';
import {AppBar, Grid, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {ColorEnum} from 'components/enums/color.enum';
import Navigation from "./navigation/navigation";

import Language from "./language/language";
import Title from './title/title';
import DrawerPage from "../drawer/drawer";

export const Header = () => {
const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return      <AppBar sx={{ background: `${ColorEnum.SecondarykAccent}`}}>
        <Toolbar>
            {
                isMatch ? <Grid container justifyContent={'space-between'}>
                    <Grid item><Title /></Grid>
                    <Grid item><DrawerPage /></Grid>
                </Grid> : <>
                    <Title/>
                    <Navigation/>
                    <Language/>
                </>
            }

        </Toolbar>
    </AppBar>
}


