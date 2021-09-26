import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledListItemLink = styled(Link)`
  width: 100%;
  padding: 6px 16px;
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
`;
