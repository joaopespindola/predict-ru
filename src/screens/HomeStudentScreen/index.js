import React from 'react';
import { Text } from '../../components/atoms/Text';
import { useNavigation } from '@react-navigation/native';
import { Container, Logo } from '../../components';

export const HomeStudentScreen = () => {
  const navigation = useNavigation();

  return (
    <Container align = "center" justify = "center">
      <Text variant="title" color="black">Home PredictRU</Text>
    </Container>
  );
};