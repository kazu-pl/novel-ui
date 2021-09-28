import { ForwardedRef, forwardRef } from "react";
import { ButtonProps } from "../buttons/Button";
import { StyledColoredIconWrapper } from "./ColoredIconWrapper.styled";

export interface ColoredIconWrapperProps {
  color?: ButtonProps["color"] | "white" | "grey";
  /**
   * If opacity is specified it must be a number between 0 and 1
   */
  opacity?: number;
  children?: React.ReactNode;
}

const ColoredIconWrapper = forwardRef(
  (
    { children, color, opacity }: ColoredIconWrapperProps,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
    return (
      <StyledColoredIconWrapper ref={ref} color={color} opacity={opacity}>
        {children}
      </StyledColoredIconWrapper>
    );
  }
);

export default ColoredIconWrapper;
