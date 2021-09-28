import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledListItemLink = styled(Link)`
  width: 100%;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;

  .MuiSvgIcon-root {
    margin-right: 8px;
  }
`;
