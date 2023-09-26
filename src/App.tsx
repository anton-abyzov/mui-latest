// App.tsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // replace './theme' with the actual path to your theme file

function App() {
  return (
      <ThemeProvider theme={theme}>
        {/* your components */}
      </ThemeProvider>
  );
}

export default App;
