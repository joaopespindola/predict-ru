import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    backgroundColor: ${({ bg, theme }) => theme.colors[bg || 'white']};
    alignItems: ${({ align }) => align || 'flex-start'};
    justifyContent: ${({ justify }) => justify || 'flex-start'};
    width: ${({ theme, width }) => (width ? "${theme.metrics.px(width)}px" : '100%')};
    height: ${({ theme, height }) => (height ? "${theme.metrics.px(height)}px" : '100%')};
`;