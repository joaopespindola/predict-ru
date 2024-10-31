// src/components/atoms/Button/index.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

export const Button = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
