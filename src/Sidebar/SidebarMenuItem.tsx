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

export const bottomLineWrapperTestId = "bottomLineWrapperTestId";
/**
 * It's used for icon when dropdown is expanded so this icon indicates that when clicked the dropdown would collapse
 */
export const expandLessIconTestId = "expandLessIconTestId";
/**
 * It's used for icon when dropdown is collapsed so this icon indicates that when clicked the dropdown would expand
 */
export const expandMoreIconTestId = "expandMoreIconTestId";
export const dropdownCollapsableWrapper = "dropdownCollapsableWrapper";

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
            <ExpandLess data-testid={expandLessIconTestId} />
          </ColoredIconWrapper>
        ) : (
          <ColoredIconWrapper color="grey">
            <ExpandMore data-testid={expandMoreIconTestId} />
          </ColoredIconWrapper>
        )}
      </StyledListItemButton>
      <Collapse
        // `navigator.userAgent === "ReactSnap"` checks if react-snap is running. If so, then open tabs so they are mounted into DOM so react-snap can detect its children (Links) and create links based on that
        in={navigator.userAgent === "ReactSnap" ? true : isSubmenuOpen}
        timeout="auto"
        unmountOnExit
        data-testid={dropdownCollapsableWrapper}
      >
        <List component="div" disablePadding>
          {props.dropdownItems.map((item, index) => (
            <StyledLink key={index} to={item.to} $asSubmenuItem>
              {item.label}
            </StyledLink>
          ))}
        </List>
      </Collapse>
      {props.renderBottomLine && (
        <StyledDividerWrapper data-testid={bottomLineWrapperTestId}>
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
        <StyledDividerWrapper data-testid={bottomLineWrapperTestId}>
          <StyledDivider />
        </StyledDividerWrapper>
      )}
    </>
  );
};

export default SidebarMenuItem;
