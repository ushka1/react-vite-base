import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Typography } from '@mui/material';

import { theme } from '@/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant='h1'>Hello, world!</Typography>
    </ThemeProvider>
  );
}

export default App;
