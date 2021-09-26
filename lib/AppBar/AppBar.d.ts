/// <reference types="react" />
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
export interface AppBarProps {
    logo?: React.ReactNode;
    bgColor?: MuiAppBarProps["color"];
    userData: {
        avatarLink?: string;
        name: string;
        surname?: string;
        job: string;
    };
    userDropdown: {
        label: string;
        to: string;
    }[];
    newNotificationsCounter?: number;
    showNotifications?: boolean;
}
declare const AppBarLayout: ({ logo, bgColor, userData, userDropdown, newNotificationsCounter, showNotifications, }: AppBarProps) => JSX.Element;
export default AppBarLayout;
