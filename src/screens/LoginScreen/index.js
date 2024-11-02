// src/screens/LoginScreen/index.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginForm } from '../../components/molecules/LoginForm';
import { TitleText } from '../../components/atoms/Text/styles';
import { Container, CustomText, Logo } from '../../components';

export const LoginScreen = () => {
  return (
    <Container align = "center" justify = "center">
      <Logo />
      <TitleText color="black">PredictRU Login</TitleText>
      <LoginForm />
    </Container>
  );
};