import { DefaultTheme } from 'styled-components';

const color = {
  primary: '#21BF48', //녹색
  disabled: '#C4C4C4', //회색
  error: '#EB5757', //빨강
};

export type ColorsTypes = typeof color;

const theme: DefaultTheme = {
  color,
};

export default theme;
