import styled, { css } from "styled-components";
import { Variant } from "./TextField";

interface StyledInputProps {
  variant?: Variant;
}

export const StyledInput = styled.div<StyledInputProps>`
  padding: 20px 50px;
  ${({ theme, variant }) => css`
    font-family: ${theme.typography.fontFamily};
    color: ${variant === "error"
      ? theme.palette.error.main
      : variant === "info"
      ? theme.palette.primary.main
      : theme.palette.success.main};
  `}
`;
