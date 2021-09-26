/// <reference types="react" />
import { SidebarMenuItemProps } from "./SidebarMenuItem";
export interface SidebarProps {
    width?: number;
    bgColor?: string;
    logo?: React.ReactNode;
    sidebarItems: SidebarMenuItemProps[];
}
declare const Sidebar: ({ width, logo, bgColor, sidebarItems, }: SidebarProps) => JSX.Element;
export default Sidebar;
