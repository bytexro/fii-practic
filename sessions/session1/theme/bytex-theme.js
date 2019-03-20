import theme from 'mdx-deck/themes';

export const bytexTheme = {
  ...theme,
  font: 'Roboto, sans-serif',
  h1: {
    ...theme.h1,
    textTransform: 'none',
  },
  h2: {
    ...theme.h2,
    textTransform: 'none',
  },
  h3: {
    ...theme.h3,
    textTransform: 'none',
  },
  colors: {
    ...theme.colors,
    background: 'transparent'
  }
};