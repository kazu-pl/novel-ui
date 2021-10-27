/// <reference types="react" />
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
export declare type SidebarMenuItemProps = SidebarMenuItemWithoutDropdown | SidebarMenuItemWithDropdown;
declare const SidebarMenuItem: (props: SidebarMenuItemProps) => JSX.Element;
export default SidebarMenuItem;
