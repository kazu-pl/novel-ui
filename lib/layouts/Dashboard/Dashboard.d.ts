/// <reference types="react" />
import { AppBarProps } from "../../AppBar";
import { SidebarProps } from "../../Sidebar";
export interface DashboardProps {
    sidebarProps: SidebarProps;
    appBarProps: Omit<AppBarProps, "additionalControls">;
    bgColor?: string;
    children: React.ReactNode;
    title: string;
    additionalControls?: React.ReactNode;
}
declare const Dashboard: ({ appBarProps, sidebarProps, bgColor, children, title, additionalControls, }: DashboardProps) => JSX.Element;
export default Dashboard;
