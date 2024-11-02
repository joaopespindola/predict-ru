// src/components/atoms/Button/styles.js
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 12px 24px;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
