// src/screens/LoginScreen/index.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginForm } from '../../components/molecules/LoginForm';
import { TitleText } from '../../components/atoms/Text/styles';
import { Logo } from '../../components/atoms/Logo';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <TitleText color="black">PredictRU Login</TitleText>
      <LoginForm />
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