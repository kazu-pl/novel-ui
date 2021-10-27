import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import ColoredIconWrapper from "../../src/ColoredIconWrapper";

import {
  StyledListItemText,
  StyledListItemIcon,
  StyledLink,
  StyledListItemButton,
  StyledDividerWrapper,
  StyledDivider,
} from "./SidebarMenuItem.styled";
import { useLocation } from "react-router-dom";

export interface SidebarMenuItemWithoutDropdown {
  variant: "no-dropdown";
  icon: React.ReactNode;
  label: string;
  to: string;
  renderBottomLine?: boolean;
}

export interface SidebarMenuItemWithDropdown {
  variant: "with-dropdown";
  icon: React.ReactNode;
  label: string;
  renderBottomLine?: boolean;
  dropdownItems: {
    to: string;
    label: string;
  }[];
}

export type SidebarMenuItemProps =
  | SidebarMenuItemWithoutDropdown
  | SidebarMenuItemWithDropdown;

const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const location = useLocation();
  const isSubmenuExpandedByDefault =
    props.variant === "with-dropdown"
      ? props.dropdownItems.some((item) => location.pathname.includes(item.to))
      : false;

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(
    isSubmenuExpandedByDefault
  );

  const handleClick = () => setIsSubmenuOpen((prev) => !prev);

  return props.variant === "with-dropdown" ? (
    <>
      <StyledListItemButton onClick={handleClick}>
        <StyledListItemIcon>{props.icon}</StyledListItemIcon>
        <StyledListItemText primary={props.label} color="#ffffff" />
        {isSubmenuOpen ? (
          <ColoredIconWrapper color="grey">
            <ExpandLess />
          </ColoredIconWrapper>
        ) : (
          <ColoredIconWrapper color="grey">
            <ExpandMore />
          </ColoredIconWrapper>
        )}
      </StyledListItemButton>
      <Collapse in={isSubmenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.dropdownItems.map((item, index) => (
            <StyledLink key={index} to={item.to} $asSubmenuItem>
              {item.label}
            </StyledLink>
          ))}
        </List>
      </Collapse>
      {props.renderBottomLine && (
        <StyledDividerWrapper>
          <StyledDivider />
        </StyledDividerWrapper>
      )}
    </>
  ) : (
    <>
      <StyledLink to={props.to}>
        <StyledListItemIcon>{props.icon}</StyledListItemIcon>
        <StyledListItemText primary={props.label} />
      </StyledLink>
      {props.renderBottomLine && (
        <StyledDividerWrapper>
          <StyledDivider />
        </StyledDividerWrapper>
      )}
    </>
  );
};

export default SidebarMenuItem;
