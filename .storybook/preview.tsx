import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
// import { StylesProvider } from "@mui/styled-engine-sc/modern";
import {
  StyleSheetManager,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";

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
    <StyleSheetManager disableVendorPrefixes>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            {Story()}
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </StyleSheetManager>
  ),
];
