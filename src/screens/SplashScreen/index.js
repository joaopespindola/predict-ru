import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { CustomText, Logo } from '../../components';
import { TitleText } from '../../components/atoms/Text/styles';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <TitleText color="black">PredictRU</TitleText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
