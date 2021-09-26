import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NavLink } from "react-router-dom";
export declare const StyledListItemText: import("styled-components").StyledComponent<typeof ListItemText, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledListItemIcon: import("styled-components").StyledComponent<typeof ListItemIcon, import("styled-components").DefaultTheme, {}, never>;
interface StyledLinkProps {
    $asSubmenuItem?: boolean;
    $isActive?: boolean;
}
export declare const StyledLink: import("styled-components").StyledComponent<typeof NavLink, import("styled-components").DefaultTheme, StyledLinkProps, never>;
export declare const StyledListItemButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledDividerWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledDivider: import("styled-components").StyledComponent<import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material/Divider").DividerTypeMap<{}, "hr">>, import("styled-components").DefaultTheme, {}, never>;
export {};
