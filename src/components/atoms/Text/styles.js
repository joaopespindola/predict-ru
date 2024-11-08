import styled from 'styled-components/native';

export const TitleText = styled.Text`
    color: ${({ color, theme }) => color || theme.colors.black};
    font-weight: bold;
    font-size: ${({ theme }) => theme.metrics.px(24)}px;
    margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const SimpleText = styled.Text`
    color: ${({ color, theme }) => color || theme.colors.black};
    font-weight: normal;
    font-size: ${({ theme }) => theme.metrics.px(14)}px;
    margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;

export const SubtitleText = styled.Text`
    color: ${({ color, theme }) => color || theme.colors.black};
    font-weight: bold;
    font-size: ${({ theme }) => theme.metrics.px(16)}px;
    margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;
