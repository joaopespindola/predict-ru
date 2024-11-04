import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../../components/atoms/Text';
import { useNavigation } from '@react-navigation/native';
import { LoginForm } from '../../components/molecules/LoginForm';
import { Container, Logo } from '../../components';

export const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <Container align = "center" justify = "center">
      <Logo />
      <Text variant="title" color="black">PredictRU Login</Text>
      <LoginForm onLogin={() => navigation.navigate('StudentHome')} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </Container>
  );
};