import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../src/theme';
import { GlobalStyle } from '../src/index';

export const decorators = [
  (Stroy) => (
    <>
      <ThemeProvider theme={mainTheme} />
      <GlobalStyle />
      <Stroy />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
