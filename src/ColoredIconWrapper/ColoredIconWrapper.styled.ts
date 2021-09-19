import styled, { css } from "styled-components";
import { ButtonProps } from "../buttons/Button";

interface StyledColoredIconWrapperProps {
  color?: ButtonProps["color"] | "white";
  opacity?: number;
}

const getFillColor = css<StyledColoredIconWrapperProps>`
  fill: ${({ color = "primary", theme }) => {
    if (color === "inherit") return "inherit";
    if (color === "white") return "rgba(255,255,255,1)";
    return theme.palette[color].main;
  }};
  ${({ opacity }) =>
    opacity !== undefined &&
    css`
      opacity: ${opacity};
    `}
`;

export const StyledColoredIconWrapper = styled.span<StyledColoredIconWrapperProps>`
  font-size: 0;
  ${getFillColor}

  .MuiSvgIcon-root {
    display: flex;
    justify-content: center;
    align-items: center;
    ${getFillColor};
    & * {
      ${getFillColor};
    }
  }
`;
