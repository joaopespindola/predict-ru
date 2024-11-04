import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { FormContainer } from './styles';
import { TouchableOpacity, Text } from 'react-native';

export const LoginForm = () => {
  const navigation = useNavigation();

  return (
    <FormContainer>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => alert('Login Pressed')} />
      
      {/* Alterado para TouchableOpacity e Text para usar com useNavigation */}
      <TouchableOpacity onPress={() => navigation.navigate('../../../../routes', { screen: 'SignUp' })}>
        <Text style={{ color: 'blue', marginTop: 10 }}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </FormContainer>
  );
};
