// src/screens/SignUpScreen/index.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SignUpForm } from '../../components/molecules/SignUpForm';
import { TitleText } from '../../components/atoms/Text/styles';
import { Container, CustomText, Logo } from '../../components';

export const SignUpScreen = () => {
  return (
    <Container align = "center" justify = "center">
      <Logo />
      <TitleText>Cadastro PredictRU</TitleText>
      <SignUpForm />
    </Container>
  );
};
