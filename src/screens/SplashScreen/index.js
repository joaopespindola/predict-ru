import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Container, CustomText, Logo } from '../../components';
import { TitleText } from '../../components/atoms/Text/styles';

export const SplashScreen = () => {
  return (
    <Container align = "center" justify = "center">
      <Logo />
      <TitleText color="black">PredictRU</TitleText>
      <StatusBar style="auto" />
    </Container>
  );
}