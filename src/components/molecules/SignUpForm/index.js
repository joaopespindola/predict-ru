import React, { useState } from 'react';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { FormContainer } from './styles';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword || !cpf) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    alert('Cadastro realizado com sucesso!');
  };

  return (
    <FormContainer>
      <Input placeholder="Email Institucional" value={email} keyboardType="email-address" onChangeText={setEmail} required/>
      <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} required/>
      <Input placeholder="Confirmar Senha" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} required/>
      <Input placeholder="CPF" value={cpf} keyboardType="numeric" onChangeText={setCpf} required/>
      <Input placeholder="Número de Matrícula (Caso tenha)" value={matricula} onChangeText={setMatricula} />
      <Button title="Cadastrar" onPress={handleRegister} />
    </FormContainer>
  );
};
