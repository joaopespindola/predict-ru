// src/screens/SignUpScreen/index.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SignUpForm } from '../../components/molecules/SignUpForm';
import { TitleText } from '../../components/atoms/Text/styles';
import { Logo } from '../../components/atoms/Logo';

export const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <TitleText>Cadastro PredictRU</TitleText>
      <SignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
