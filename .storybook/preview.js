import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import ScThemeProvider from "../src/ScThemeProvider";  // Adjust this import to your file structure

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
      // <ScThemeProvider>
      //   <Story />
      // </ScThemeProvider>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
  ),
];
