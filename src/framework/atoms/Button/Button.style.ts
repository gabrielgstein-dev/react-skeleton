import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.atom';

export const Button =
  styled.button.attrs(() => ({
    type: 'button',
  })) <
  ButtonProps >
  `
  ${({ theme, disabled }) => css`
    width: 100%;
    text-transform: uppercase;
    box-sizing: border-box;
    font-size: ${theme.fontSize.Xs};
    font-weight: ${theme.fontWeight.Semibold};
    border-radius: ${theme.radius.Nm};
    opacity: ${!disabled ? 1 : theme.opacity.Disable};
    cursor: ${!disabled ? 'pointer' : 'not-allowed'};
  `}
`;
