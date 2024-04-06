import MaterialButton from '@mui/material/Button';
import styled from 'styled-components';

import { Typography } from '../typography/typography';
import { ColorEnum } from '../enums/color.enum';

export const ButtonPrimaryStyle = styled(MaterialButton)`
  background: linear-gradient(180deg, rgba(29, 150, 188, 0.5) 0%, rgba(0, 0, 0, 0) 71.61%), #7d4c9d !important;

  :disabled {
    background: ${ColorEnum.Grey} !important;
  }
`;

export const SocialButton = styled.button`
  display: flex;
  background-color: ${ColorEnum.White};
  border: 1px solid ${ColorEnum.Grey};
  box-sizing: border-box;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const SocialButtonText = styled(Typography)`
  color: ${ColorEnum.Grey};
  padding-left: 12px;
`;

export const SocialButtonBlue = styled(SocialButton)`
  background-color: ${ColorEnum.PurpleAlum}
  border: none;

  ${SocialButtonText} {
    color: ${ColorEnum.White};
  }
`;

export const SocialButtonDarkBlue = styled(SocialButton)`
  background-color: ${ColorEnum.PurpleDark};
  border: none;

  ${SocialButtonText} {
    color: ${ColorEnum.White};
  }
`;
