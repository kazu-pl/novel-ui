import { StylesProvider, MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import theme from "../theme/muiTheme";

export const parameters = {
  // layout: "centered", // to center all stories
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
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>{Story()}</StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  ),
];
