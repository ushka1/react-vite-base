import { ThemeProvider } from '@emotion/react';
import PublicIcon from '@mui/icons-material/Public';
import { CssBaseline, Typography } from '@mui/material';

import { theme } from '@/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant='h1'>
        Hello, world! <PublicIcon sx={{ fontSize: 64 }} />
      </Typography>
    </ThemeProvider>
  );
}

export default App;
