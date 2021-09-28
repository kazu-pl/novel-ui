import styled from "styled-components";

export const StyledDashboardWrapper = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: block;
  }
`;

export const StyledToggleMobileMenuIconWrapper = styled.div`
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`;
