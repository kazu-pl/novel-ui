import { SidebarMenuItemProps } from "./SidebarMenuItem";
export interface SidebarProps {
    width?: number;
    sidebarItems: SidebarMenuItemProps[];
}
declare const Sidebar: ({ width, sidebarItems }: SidebarProps) => JSX.Element;
export default Sidebar;
