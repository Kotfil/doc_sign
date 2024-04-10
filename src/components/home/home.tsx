import {useTranslation} from "react-i18next";
import {ImageWrap, Text, Title, Wrapper} from "./home.style";
import {PrimaryButton} from "../button/button";
import {Typography} from "../typography/typography";
import Image from 'react-image-webp';

const Home = () => {
    const {t}=useTranslation()
    return (
        <Wrapper>
            <ImageWrap>
            <Image   src={require('../images/background/background.webp')}
                         webp={require('../images/background/background3.webp')}/>
            </ImageWrap>
            <Text>
            <Title><Typography type='interMedium20'>{t('home_title')}</Typography></Title>
          <Typography type='interRegular14'>{t('home_text')}</Typography>
           <div> <PrimaryButton>Learn</PrimaryButton></div>
            </Text>

        </Wrapper>
    );
};

export default Home;