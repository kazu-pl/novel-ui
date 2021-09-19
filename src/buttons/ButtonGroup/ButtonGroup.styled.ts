import styled, { css } from "styled-components";
import { ButtonProps } from "../Button";

interface StyledButtonProps {
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
}

export const StyledButtonGroup = styled.div<StyledButtonProps>`
  display: inline-flex;

  div {
    .MuiButton-root {
      border-radius: 0;
      margin-right: 1px;

      ${({ variant }) =>
        variant === "outlined" &&
        css`
          margin-left: -1px;
          margin-right: 0;
        `}

      ${({ variant, color = "primary", theme }) =>
        variant === "text" &&
        css`
          border-right: 1px solid
            ${color === "inherit" ? "inherit" : theme.palette[color].main};
        `}
    }

    &:first-of-type {
      margin-left: 0px;

      .MuiButton-root {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
    }

    &:last-of-type {
      margin-right: 0px;

      .MuiButton-root {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;

        ${({ variant }) =>
          variant === "text" &&
          css`
            border-right: none;
          `}
      }
    }
  }
`;
