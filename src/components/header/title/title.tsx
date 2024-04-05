import React from 'react';
import AdfScannerRoundedIcon from "@mui/icons-material/AdfScannerRounded";
import {Typography} from "../../typography/typography";
import {Trans} from "react-i18next";

const Title = () => {
    return <>
            <AdfScannerRoundedIcon />
            <Typography type={'montserratSemiBold18'}> <Trans i18nKey={'title'}> </Trans> </Typography>
        </>
};

export default Title;