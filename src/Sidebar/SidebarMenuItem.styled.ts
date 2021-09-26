import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

export const StyledListItemText = styled(ListItemText)`
  color: rgba(255, 255, 255, 1);
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
`;

interface StyledLinkProps {
  $asSubmenuItem?: boolean;
  $isActive?: boolean;
}

export const StyledLink = styled(NavLink)<StyledLinkProps>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px 8px ${({ $asSubmenuItem }) => ($asSubmenuItem ? 48 : 8)}px;
  text-align: left;
  box-sizing: border-box;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

export const StyledListItemButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  text-align: left;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
`;

export const StyledDividerWrapper = styled.div`
  padding: 8px 0;
`;

export const StyledDivider = styled(Divider)`
  border-color: rgba(255, 255, 255, 0.2);
`;
