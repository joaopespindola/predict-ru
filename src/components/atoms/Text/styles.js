import styled from 'styled-components/native';

export const TitleText = styled.Text`
    color: ${({ color, theme }) => color || theme.colors.blue}; /* Se passar a cor, renderiza ela, se não, renderiza o padrão que */
    font-weight: bold;
    font-size: ${({ theme }) => theme.metrics.px(24)}px;
    margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const SubtitleText = styled.Text`
    color: ${({ color, theme }) => color || theme.colors.blue};
    font-weight: bold;
    font-size: ${({ theme }) => theme.metrics.px(16)}px;
    margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;