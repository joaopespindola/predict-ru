// src/components/atoms/Input/index.js
import React from 'react';
import { TextInput } from './styles';

export const Input = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput 
      placeholder={placeholder} 
      secureTextEntry={secureTextEntry} 
    />
  );
};
