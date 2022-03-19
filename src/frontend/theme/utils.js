import color from 'color';

export const lighten = (c, amount) => {
  return color(c)
    .lighten(amount)
    .hsl()
    .string();
};

export const darken = (c, amount) => {
  return color(c)
    .darken(amount)
    .hsl()
    .string();
};

export const alpha = (c, amount) => {
  return color(c)
    .alpha(amount)
    .hsl()
    .string();
};

export const generatePalletteItem = (c) => {
  return {
    base: c,
    lightest: lighten(c, .2),
    light: lighten(c, .1),
    dark: darken(c, .2),
    darkest: darken(c, .4)
  }
};
