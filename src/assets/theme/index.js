import { getContrastText } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const headerFont = '"Orbitron","Helvetica","Arial", sans-serif';

export default () => {
  return createMuiTheme({
    palette: {
      type: 'light',
      primary: { main: '#2C3E50' },
      secondary: { main: '#e7a53c' },
      midnight: {
        main: '#0a1322',
        // contrast: getContrastText(palette.midnight.main),
      },
      capitalist: {
        main: '#DCBC00',
        // contrast: getContrastText(palette.capitalist.main),
      },
      explorer: {
        main: '#0C6471',
        // contrast: getContrastText(palette.explorer.main),
      },
      solider: {
        main: '#CB2E27',
        // contrast: getContrastText(palette.solider.main),
      },
    },
    typography: {
      useNextVariants: true,
      h1: { fontFamily: headerFont },
      h2: { fontFamily: headerFont },
      h3: { fontFamily: headerFont },
      h4: { fontFamily: headerFont },
      h5: { fontFamily: headerFont },
      h6: { fontFamily: headerFont },
    },
  });
};
