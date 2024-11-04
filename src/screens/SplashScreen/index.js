import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Container, CustomText, Logo } from '../../components';
import { TitleText } from '../../components/atoms/Text/styles';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);

  return (
    <Container align = "center" justify = "center">
      <Logo />
      <TitleText color="black">PredictRU</TitleText>
      <StatusBar style="auto" />
    </Container>
  );
}