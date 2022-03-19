import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  lighten,
  darken,
  alpha,
  generatePalletteItem
} from './utils'

const purple = '#764abc';
const blue = '#007bff';
const gray100 = '#212529';
const gray200 = '#6c757d';
const gray300 = '#e3e3e3';
const gray400 = '#f2f5f7';
const gray500 = '#a7a7a7';
const green = '#3bb33b';
const red = '#ff3347';
const white = '#fff';

const defaultTheme = {
  colors: {
    primary: generatePalletteItem(purple),
    secondary: generatePalletteItem(white),
    success: generatePalletteItem(green),
    danger: generatePalletteItem(red),
    white: generatePalletteItem(white),
  },

  bodyColor: gray100,
  mutedColor: gray200,
  borderColor: gray300,
  bodyBgColor: gray400,

  inputPlaceholderColor: gray200,
  inputBgColor: white,
  inputColor: gray100,
  inputBorderColor: gray300,

  container: {
    maxWidth: 1200
  },

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },

  grid: {
    gutter: 15,
    columns: 12
  }
};

const Theme = ({
  children
}) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider >
);

export default Theme;
