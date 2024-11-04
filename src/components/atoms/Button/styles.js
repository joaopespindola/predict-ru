import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => theme.metrics.px(12)}px ${({ theme }) => theme.metrics.px(24)}px;
  border-radius: ${({ theme }) => theme.metrics.px(5)}px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.metrics.px(16)}px
`;
