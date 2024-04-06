import AdfScannerRoundedIcon from "@mui/icons-material/AdfScannerRounded";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {TitleWrapper} from "./title.style";

const Title = () => {
    const {t} = useTranslation()
    return <>
            <AdfScannerRoundedIcon />
        <NavLink to={'/'}><TitleWrapper  type={'montserratSemiBold18'}>{t('title')} </TitleWrapper> </NavLink>
        </>
};

export default Title;