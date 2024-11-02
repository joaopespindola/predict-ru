import React from "react";
import { CardContainer, CardImage } from "./styles";

export const Card = ({ image }) => {
    return (
        <CardContainer>
            <CardImage source={image} />
        </CardContainer>
    )
}
