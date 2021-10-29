import styled, { css } from 'styled-components';

export const TextNm = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.Nm};
    color: ${theme.colors.N1};
  `}
`;
