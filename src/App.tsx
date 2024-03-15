import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { theme } from '@/config/theme';
import Home from '@/pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
