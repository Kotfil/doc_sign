import React, {FC} from 'react';
import styled from 'styled-components';
import {FontThemeStyle} from "../styles/font.theme-style";

type TypographyProps = {
  tag?: string;
  color?: string;
  type?: keyof typeof FontThemeStyle
  children?: React.ReactNode | string
};

export const TypographyStyle = styled.span(({ type = 'interRegular16' }: TypographyProps) => FontThemeStyle[type]);

export const Typography: FC<TypographyProps> = props => <TypographyStyle {...props} as={props.tag as any} />;
