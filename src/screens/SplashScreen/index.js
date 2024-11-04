import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from '../../components/atoms/Text';
import { Container, Logo } from '../../components';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);

  return (
    <Container align = "center" justify = "center">
      <Logo />
      <Text variant="title">PredictRU</Text>
      <StatusBar style="auto" />
    </Container>
  );
}