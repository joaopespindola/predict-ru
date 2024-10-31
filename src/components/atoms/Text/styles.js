import styled from 'styled-components/native';

export const TitleText = styled.Text`
    color: ${({ color }) => color || 'white'}; /* Se passar a cor, renderiza ela, se não, renderiza o padrão que */
    font-weight: bold;
    font-size: 24px;
    margin-top: 12px;
`;