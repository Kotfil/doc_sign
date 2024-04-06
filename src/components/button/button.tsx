import MaterialButton, {ButtonTypeMap} from '@mui/material/Button';
import {ExtendButtonBase} from '@mui/material/ButtonBase';
import { FontThemeStyle} from '../styles/font.theme-style';
import React from 'react';

import {ButtonPrimaryStyle} from './button.styles';
import {FontTheme} from "../styles/font.theme-style.type";

type ButtonProps = {
    typography?: keyof typeof FontThemeStyle  | string
    color?: string | boolean;
    children?: string | (React.ReactElement & React.ReactNode) | React.ReactNode | any;
    onClick?: (type: undefined) => void | any;
    className?: string;
    activeType?: any;
    fullWidth?: boolean;
    FontThemeStyle?: FontTheme
};

export const Button: ExtendButtonBase<ButtonTypeMap<ButtonProps> > = ({
                                                                               typography,
                                                                               style,
                                                                               Component = MaterialButton,
                                                                               ...props
                                                                           }:any) => {
    //@ts-ignore
    const buttonStyle =
        typography !== undefined
            ?

            {
                ...style,
                //@ts-ignore
                ...FontThemeStyle[typography]
            }
            : style;
    console.log('btn',buttonStyle)
    return <Component style={buttonStyle} {...props} />;
};

export const TextButton: ExtendButtonBase<ButtonTypeMap<ButtonProps>> = (props: any)  => (
    <Button variant="text" color="primary" {...props} />
);

export const IconButton: ExtendButtonBase<ButtonTypeMap<ButtonProps>> = (props: any)  => (
    <Button variant="empty" color="primary" {...props} />
);

export const PrimaryButton: ExtendButtonBase<ButtonTypeMap<ButtonProps>> = (props: any)  => (
    <Button Component={ButtonPrimaryStyle} variant="contained" color="primary" {...props} />
);

export const SecondaryButton: ExtendButtonBase<ButtonTypeMap<ButtonProps>> = (props: any) => (
    <Button variant="transparent" color="secondary" {...props} />
);
