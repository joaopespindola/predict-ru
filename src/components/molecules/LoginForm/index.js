// src/components/molecules/LoginForm/index.js
import React from 'react'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { FormContainer } from './styles'

export const LoginForm = ({ onLogin }) => {
return (
    <FormContainer>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={onLogin} /> 
    </FormContainer>
  )
}