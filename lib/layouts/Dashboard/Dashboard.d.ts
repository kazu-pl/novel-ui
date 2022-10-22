import { AppBarProps } from "../../AppBar";
import { SidebarProps } from "../../Sidebar";
import React from "react";
export interface DashboardProps {
    sidebarProps: SidebarProps;
    appBarProps: AppBarProps;
    bgColor?: string;
    children: React.ReactNode;
    title: string;
    additionalControls?: React.ReactNode;
}
declare const Dashboard: ({ appBarProps, sidebarProps, bgColor, children, title, additionalControls, }: DashboardProps) => JSX.Element;
export default Dashboard;
