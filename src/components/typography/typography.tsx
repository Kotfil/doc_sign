import  {FC} from 'react';
import styled from 'styled-components';
import {FontThemeStyle} from "../styles/font.theme-style";
import {FontTheme} from "../styles/font.theme-style.type";

type TypographyProps = {
  tag?: string;
  color?: string;
  type?: keyof typeof FontThemeStyle | FontTheme | any
  children?: React.ReactNode | string
};
//@ts-ignore
export const TypographyStyle = styled.span(({ type = 'interRegular16' }: TypographyProps) => FontThemeStyle[type]);

export const Typography: FC<TypographyProps> = props => <TypographyStyle {...props} as={props.tag as any} />;
