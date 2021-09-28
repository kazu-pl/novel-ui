/// <reference types="react" />
export interface AppBarProps {
    logo?: React.ReactNode;
    userData: {
        avatarLink?: string;
        title: string;
    };
    userDropdown: {
        label: string;
        to: string;
        icon: React.ReactNode;
        isErrorColor?: boolean;
    }[];
    newNotificationsCounter?: number;
    showNotifications?: boolean;
    additionalControls?: React.ReactNode;
}
declare const AppBarLayout: ({ logo, userData, userDropdown, newNotificationsCounter, showNotifications, additionalControls, }: AppBarProps) => JSX.Element;
export default AppBarLayout;
