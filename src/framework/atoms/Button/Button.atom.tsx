import React, { MouseEventHandler, ReactNode } from 'react';
import { Size, ThemeOptions } from 'framework/system/theme';
import * as S from './Button.style';

export interface ButtonProps extends Size, ThemeOptions {
  children?: ReactNode;
  dataTestid?: string;
  disabled?: boolean;
  rounded?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  dataTestid = 'button-atom',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      {...props}
      disabled={disabled}
      data-testid={dataTestid}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!disabled && onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </S.Button>
  );
};

// Button.Outlined = (props: ButtonProps) => <Button {...props} />;
