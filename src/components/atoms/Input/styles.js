// src/components/atoms/Input/styles.js
import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  width: 80%;
  padding: ${({ theme }) => theme.metrics.px(10)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
  border-radius: ${({ theme }) => theme.metrics.px(5)}px;
  border: ${({ theme }) => theme.metrics.px(1)}px solid #ccc;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
`;
