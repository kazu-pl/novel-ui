import MuiCircularProgress from "@mui/material/CircularProgress";
import { ButtonAsLinksProps } from "./Button";
import { ReactNode } from "react";
import { TextTransform } from "./Button";
interface StyledWrapperProps {
    fullWidth?: boolean;
}
export declare const StyledWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledWrapperProps, never>;
interface StyledButtonProps extends ButtonAsLinksProps {
    component?: ReactNode;
    $textTransform: TextTransform;
}
export declare const StyledButton: import("styled-components").StyledComponent<import("@mui/material").ExtendButtonBase<import("@mui/material/Button").ButtonTypeMap<{}, "button">>, import("styled-components").DefaultTheme, StyledButtonProps, never>;
interface CirProgressProps {
    size: number;
}
export declare const CircularProgress: import("styled-components").StyledComponent<typeof MuiCircularProgress, import("styled-components").DefaultTheme, CirProgressProps, never>;
export {};
