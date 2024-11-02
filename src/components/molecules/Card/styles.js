import styled from "styled-components";

export const CardContainer = styled.TouchableOpacity`
    width: ${({ theme }) => theme.metrics.px(350)}px;
    height: ${({ theme }) => theme.metrics.px(550)}px;
    border-radius: ${({ theme }) => theme.metrics.px(8)}px;
    overflow: hidden;
`;

export const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;