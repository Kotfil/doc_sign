import React, {useEffect, useState} from 'react';
import AdfScannerRoundedIcon from "@mui/icons-material/AdfScannerRounded";
import {Typography} from "../../typography/typography";
import {Trans} from "react-i18next";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useTranslation} from "react-i18next";



const Language = () => {
    const {t, i18n} = useTranslation()
    const [lang, setLang] = useState<string>('ua')

    const changeLanguage = (e: any) => {
         setLang(e.target.value)
         i18n.changeLanguage(e.target.value)
    }
    useEffect(() => {
        i18n.changeLanguage('ua')
    },[])


    return <>
        <FormControl style={{minWidth: 25}}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                onChange={changeLanguage}
            >
                    <MenuItem  value={'en'}><Typography
                        type={'montserratSemiBold18'}>en</Typography></MenuItem>
                <MenuItem  value={'ru'}><Typography
                    type={'montserratSemiBold18'}>ru</Typography></MenuItem>
                <MenuItem value={'ua'}><Typography
                type={'montserratSemiBold18'}>ua</Typography></MenuItem>
            </Select>

        </FormControl>
    </>
};

export default Language;