import styled, { css } from "styled-components";
import Muibutton from "@mui/material/Button";
import MuiCircularProgress from "@mui/material/CircularProgress";
import { ButtonAsLinksProps } from "./Button";
import { ReactNode } from "react";
import { TextTransform } from "./Button";

interface StyledWrapperProps {
  fullWidth?: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          display: block;
          width: 100%;
        `
      : css`
          display: inline-block;
        `}
`;

interface StyledButtonProps extends ButtonAsLinksProps {
  component?: ReactNode;
  $textTransform: TextTransform;
}

export const StyledButton = styled(Muibutton)<StyledButtonProps>`
  border-radius: 50px;
  text-transform: ${({ $textTransform }) => $textTransform};
`;

interface CirProgressProps {
  size: number;
}

export const CircularProgress = styled(MuiCircularProgress)<CirProgressProps>`
  position: absolute;
  top: ${({ size }) => size / 2}px;
  left: ${({ size }) => `calc(50% - ${size / 2}px)`};
`;
