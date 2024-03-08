import { createTheme } from '@mui/material/styles';
import {  responsiveFontSizes  } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#7f7f7f',
    },
    secondary: {
      main: '#4f8e3e',
    },
  },
  typography:{
      fontFamily: "Helvetica Neue",       
  }
});

theme = responsiveFontSizes(theme);

export default theme;