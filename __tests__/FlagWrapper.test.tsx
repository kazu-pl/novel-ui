import React from "react";
import { render, screen } from "@testing-library/react";

import FlagWrapper, {
  FlagWrapperTestId,
} from "../src/LangSwitcher/FlagFrapper";

describe("<FlagWrapper />", () => {
  it("should render correctly and be visible and in the document", () => {
    render(
      <FlagWrapper
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
        alt="pl"
      />
    );

    const flagWrapper = screen.getByTestId(FlagWrapperTestId);

    expect(flagWrapper).toBeInTheDocument();
    expect(flagWrapper).toBeVisible();
  });

  it("should have same width and height when `size` prop is passed", () => {
    const size = 40;
    render(
      <FlagWrapper
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
        alt="pl"
        size={size}
      />
    );

    const flagWrapper = screen.getByTestId(FlagWrapperTestId);

    const computedStyles = getComputedStyle(flagWrapper);

    expect(computedStyles.width).toEqual(`${size}px`);
    expect(computedStyles.height).toEqual(`${size}px`);
  });

  it("should have width and heigth same as values passed in those props", () => {
    const width = 40;
    const height = 35;

    render(
      <FlagWrapper
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
        alt="pl"
        height={height}
        width={width}
      />
    );

    const flagWrapper = screen.getByTestId(FlagWrapperTestId);

    const computedStyles = getComputedStyle(flagWrapper);

    expect(computedStyles.width).toEqual(`${width}px`);
    expect(computedStyles.height).toEqual(`${height}px`);
  });

  it("should use size instead of manually set width and height", () => {
    const width = 45;
    const height = 35;
    const size = 40;

    render(
      <FlagWrapper
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
        alt="pl"
        size={size}
        height={height}
        width={width}
      />
    );

    const flagWrapper = screen.getByTestId(FlagWrapperTestId);

    const computedStyles = getComputedStyle(flagWrapper);

    expect(computedStyles.width).toEqual(`${size}px`);
    expect(computedStyles.height).toEqual(`${size}px`);
  });

  it("should have the initial size when no size, width, height were provided", () => {
    render(
      <FlagWrapper
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
        alt="pl"
      />
    );

    const flagWrapper = screen.getByTestId(FlagWrapperTestId);

    const computedStyles = getComputedStyle(flagWrapper);

    expect(computedStyles.width).toEqual(`${25}px`);
    expect(computedStyles.height).toEqual(`${25}px`);
  });
});
