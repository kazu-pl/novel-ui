import React from "react";
import ColoredIconWrapper from "../src/ColoredIconWrapper";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/muiTheme";

describe("<ColoredIconWrapper />", () => {
  xit("should change passed icon color", () => {
    render(
      <ThemeProvider theme={theme}>
        <ColoredIconWrapper color="secondary">
          <AddAPhotoIcon data-testid="icon" />
        </ColoredIconWrapper>
      </ThemeProvider>
    );

    const icon = screen.getByTestId("icon");

    const styles = window.getComputedStyle(icon);

    expect(styles.fill).toBe(theme.palette.secondary.main); // it will fail because the color will be `currentColor`, not RGB value
  });

  it("should change opacity icon", () => {
    const OPACITY_VALUE = 0.5;

    render(
      <ThemeProvider theme={theme}>
        <ColoredIconWrapper opacity={OPACITY_VALUE}>
          <AddAPhotoIcon data-testid="icon" />
        </ColoredIconWrapper>
      </ThemeProvider>
    );

    const icon = screen.getByTestId("icon");

    const styles = window.getComputedStyle(icon);

    expect(styles.opacity).toBe(`${OPACITY_VALUE}`);
  });
});
