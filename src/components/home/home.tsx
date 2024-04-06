import {useTranslation} from "react-i18next";
import {Wrapper,Title,Text} from "./home.style";
import {PrimaryButton} from "../button/button";
import {Typography} from "../typography/typography";
// @ts-ignore
import Image from '../images/background/background.webp'

const Home = () => {
    const {t}=useTranslation()
    return (
        <Wrapper>
          <Title><Typography type='interMedium20'>{t('home_title')}</Typography></Title>
            <Text><Typography type='interRegular14'>{t('home_text')}</Typography></Text>
            <PrimaryButton>Learn</PrimaryButton>
        </Wrapper>
    );
};

export default Home;