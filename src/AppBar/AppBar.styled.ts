import styled from "styled-components";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

export const StyledListItemLink = styled(Link)<{ $isErrorColor?: boolean }>`
  width: 100%;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  color: ${({ theme, $isErrorColor }) =>
    $isErrorColor ? theme.palette.error.main : theme.palette.text.primary};
  text-decoration: none;

  .MuiSvgIcon-root {
    margin-right: 8px;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  padding-left: 16px;
  padding-right: 16px;
`;
