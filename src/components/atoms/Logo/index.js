import React from "react";
import { LogoImage } from './styles';
import logoImage from '../../../../assets/predictRuLogo.png';

export const Logo = () => {
    return (
        <LogoImage source={logoImage} />
    )
}