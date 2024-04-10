import styled from "styled-components";
// import img from '../images/background/background.webp'
import Image from 'react-image-webp';
import {device} from "../styles/adaptive/device";

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 65vh;
  background: #7bc4e5;
`

export const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
`
export const Text = styled.div`
  width: 100%;
  top: 10%;
  left: 25%;
  transform: translateX(-25%);
  text-align: center;
  position: absolute;
  @media ${device.mobileS} {
    top: -3%;
  }
  @media ${device.mobileM} {
    top: 8%;
  }
  @media ${device.mobileL} {
    top: 4%;
  }
  @media ${device.tablet} {
    top: 20%;
  }
  @media ${device.laptop} {
    top: 20%;
  }
  @media ${device.laptop} {
    top: 15%;
  }
  @media ${device.laptopL} {
    top: 25%;
  }
  @media ${device.desktop} {
    top: 25%;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
`

