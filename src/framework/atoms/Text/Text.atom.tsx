import { ColorsProps, ThemeOptions } from 'framework/system/theme';
import React, { ReactNode } from 'react';
import * as S from './Text.style';

export interface TextProps extends ColorsProps, ThemeOptions {
  children?: string | number | ReactNode;
}

export const Text: React.FC<TextProps> = (props: TextProps) => {
  const { children } = props;
  return <S.TextNm>{children}</S.TextNm>;
};
