import styled, { css } from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";

const commonLinkStyles = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  box-sizing: border-box;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const hoverLinkStyles = css`
  background-color: ${({ theme }) => alpha(theme.palette.primary.light, 0.1)};
  border-radius: 8px;
`;

const activeLinkStyles = css`
  background-color: ${({ theme }) => alpha(theme.palette.primary.light, 0.2)};
  border-radius: 8px;
`;

export const StyledListItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
`;

interface StyledLinkProps {
  $asSubmenuItem?: boolean;
  $isActive?: boolean;
}

export const StyledLink = styled(NavLink)<StyledLinkProps>`
  ${commonLinkStyles}
  padding: 8px 16px 8px ${({ $asSubmenuItem }) => ($asSubmenuItem ? 48 : 8)}px;

  &:hover {
    ${hoverLinkStyles}
  }

  &.active {
    ${activeLinkStyles}
  }
`;

export const StyledListItemButton = styled.button`
  ${commonLinkStyles}
  padding: 8px;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    ${hoverLinkStyles}
  }
`;

export const StyledDividerWrapper = styled.div`
  padding: 8px 0;
`;

export const StyledDivider = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.grey[300]};
`;
