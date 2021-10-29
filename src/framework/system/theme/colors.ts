export enum Colors {
  Black = '#2c2c2c',
  White = '#ffffff',
  Red = '#c25343',
  LightRed = '#ff9791',
  Yellow = '#f5d87d',
  Green = '#a0da8c',
  DarkGreen = '#5a7e68',
  P1 = '#3e4651',
  P2 = '#386d82',
  P3 = '#ccc1b4',
  S1 = '#54402d',
  S2 = '#9fbbc4',
  S3 = '#4d555f',
  S4 = '#71777f',
  N1 = '#58595b',
  N2 = '#696a6b',
  N3 = '#bcbdbd',
  N4 = '#eeeeef',
  N5 = '#f9f9f9',
}

export interface ColorsProps {
  black?: Colors.Black;
  white?: Colors.White;
  red?: Colors.Red;
  lightRed?: Colors.LightRed;
  yellow?: Colors.Yellow;
  green?: Colors.Green;
  darkGreen?: Colors.DarkGreen;
  p1?: Colors.P1;
  p2?: Colors.P2;
  p3?: Colors.P3;
  s1?: Colors.S1;
  s2?: Colors.S2;
  s3?: Colors.S3;
  s4?: Colors.S4;
  n1?: Colors.N1;
  n2?: Colors.N2;
  n3?: Colors.N3;
  n4?: Colors.N4;
  n5?: Colors.N5;
}

export interface ThemeOptions {
  info?: Colors.P2;
  success?: Colors.Green;
  warn?: Colors.Yellow;
  error?: Colors.Red;
  default?: Colors.Black;
}

export interface ThemeColor {
  bg?: Colors;
  bgHover?: Colors;
  text?: Colors;
  textLight?: Colors;
  border?: Colors;
}
