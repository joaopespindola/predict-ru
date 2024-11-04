import React from "react";
import { TitleText, SimpleText, SubtitleText } from './styles';

export const Text = ({ children, color, variant = 'simple' }) => {
    // Define o componente de estilo com base na variante passada
    let Component;
    switch (variant) {
        case 'title':
            Component = TitleText;
            break;
        case 'subtitle':
            Component = SubtitleText;
            break;
        default:
            Component = SimpleText;
    }

    // Renderiza o componente de texto correspondente
    return <Component color={color}>{children}</Component>;
};