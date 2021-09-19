import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(41, 114, 196)",
      contrastText: "rgb(230, 238, 247)",
      dark: "rgb(35, 68, 140)",
      light: "rgb(66, 145, 235)",
    },
  },
});

export default theme;
