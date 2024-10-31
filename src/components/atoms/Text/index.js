import React from "react";
import { TitleText } from './styles';


export const Text = ({ children, color }) => {
    return (
        <TitleText color={color}> 
            {children}
        </TitleText>
    )
}