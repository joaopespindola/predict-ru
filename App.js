import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens/SplashScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import { MealAvaliationsScreen } from './src/screens/MealAvaliationsScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);// useState é um hook do React para gerenciar estado em componentes funcionais

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // exibe a tela de splash por 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <MealAvaliationsScreen />
      )}
    </ThemeProvider>
  );
}