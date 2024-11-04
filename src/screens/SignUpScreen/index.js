import React from 'react';
import { SignUpForm } from '../../components/molecules/SignUpForm';
import { Container, Logo } from '../../components';
import { Text } from '../../components/atoms/Text';

export const SignUpScreen = () => {
  return (
    <Container align = "center" justify = "center">
      <Logo />
      <Text variant="title">Cadastro PredictRU</Text>
      <SignUpForm />
    </Container>
  );
};
