/// <reference types="react" />
export declare const bottomLineWrapperTestId = "bottomLineWrapperTestId";
/**
 * It's used for icon when dropdown is expanded so this icon indicates that when clicked the dropdown would collapse
 */
export declare const expandLessIconTestId = "expandLessIconTestId";
/**
 * It's used for icon when dropdown is collapsed so this icon indicates that when clicked the dropdown would expand
 */
export declare const expandMoreIconTestId = "expandMoreIconTestId";
export declare const dropdownCollapsableWrapper = "dropdownCollapsableWrapper";
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
