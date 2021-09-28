/// <reference types="react" />
import { AppBarProps } from "../../AppBar";
import { SidebarProps } from "../../Sidebar";
export interface DashboardProps {
    sidebarProps: SidebarProps;
    appBarProps: AppBarProps;
    bgColor?: string;
    children: React.ReactNode;
    title: string;
}
declare const Dashboard: ({ appBarProps, sidebarProps, bgColor, children, title, }: DashboardProps) => JSX.Element;
export default Dashboard;
