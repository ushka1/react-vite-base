import { LinkProps } from '@mui/material/Link';
import createTheme from '@mui/material/styles/createTheme';
import { LinkBehavior } from './LinkBehavior';

export const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  palette: {},
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
