import styled, { css } from "styled-components";
import { HeadlineTextColor } from "./Modal";

export const StyledModalBody = styled.div<{
  maxWidthOnDesktop?: number | string;
  widthOnDesktop?: number | string;
}>`
  background-color: #efefef;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 24px 16px;
  border-radius: 6px;

  box-shadow: 0px 15px 12px rgba(0, 0, 0, 0.22),
    0px 19px 38px rgba(0, 0, 0, 0.3);
  max-height: 80vh;
  overflow-y: auto;
  width: 100%;
  max-width: calc(100vw - 32px);

  @media (min-width: ${({ theme }) => theme.breakpoints.values["md"]}px) {
    width: ${({ maxWidthOnDesktop }) => maxWidthOnDesktop || "unset"};
    max-width: ${({ widthOnDesktop }) => widthOnDesktop || "unset"};
  }
`;

interface StyledTitleWrapperProps {
  color?: HeadlineTextColor;
}

export const StyledTitleWrapper = styled.div<StyledTitleWrapperProps>`
  margin-bottom: 4px;
  ${({ color, theme }) =>
    color &&
    color !== "black" &&
    css`
      color: ${theme.palette[color].main};
    `}
`;
