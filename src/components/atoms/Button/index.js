import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

export const Button = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
