import 'react-native-gesture-handler';
import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';

export default function App() {
 return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}