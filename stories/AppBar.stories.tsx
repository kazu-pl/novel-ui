import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import { ArgType } from "../types/storybookArgs";
import AppBar, { AppBarProps } from "../src/AppBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import ColoredIconWrapper from "../src/ColoredIconWrapper";

// @ts-ignore
import codeBracketsSVGUrl from "../stories/introduction/assets/code-brackets.svg";

export default {
  title: "Layout/AppBar",
  component: AppBar,
  argTypes: {} as ArgType<AppBarProps>,
} as Meta;

const Template: Story<AppBarProps> = (args) => (
  <BrowserRouter>
    <AppBar {...args} />
  </BrowserRouter>
);

export const Basic = Template.bind({});
Basic.args = {
  userData: {
    avatarLink: "https://mui.com/static/images/avatar/1.jpg",
    title: "John Doe",
  },
  userDropdown: [
    {
      label: "Account",
      to: "/account",
    },
    {
      label: "Settings",
      to: "/settings",
    },
    {
      label: "Logout",
      to: "/logout",
    },
  ],
} as AppBarProps;

export const WithLogo = Template.bind({});
WithLogo.args = {
  logo: <img src={codeBracketsSVGUrl} alt="logo" width={50} />,
  userData: {
    avatarLink: "https://mui.com/static/images/avatar/1.jpg",
    title: "John Doe",
  },
  userDropdown: [
    {
      label: "Account",
      to: "/account",
    },
    {
      label: "Settings",
      to: "/settings",
    },
    {
      label: "Logout",
      to: "/logout",
    },
  ],
} as AppBarProps;

export const WithoutAvatarPhoto = Template.bind({});
WithoutAvatarPhoto.args = {
  logo: <img src={codeBracketsSVGUrl} alt="logo" width={50} />,
  userData: {
    title: "John Doe",
  },
  userDropdown: [
    {
      label: "Account",
      to: "/account",
    },
    {
      label: "Settings",
      to: "/settings",
    },
    {
      label: "Logout",
      to: "/logout",
    },
  ],
} as AppBarProps;

export const WithNotifyIcon = Template.bind({});
WithNotifyIcon.args = {
  logo: <img src={codeBracketsSVGUrl} alt="logo" width={50} />,
  userData: {
    avatarLink: "https://mui.com/static/images/avatar/1.jpg",
    title: "John Doe",
  },
  userDropdown: [
    {
      label: "Account",
      to: "/account",
    },
    {
      label: "Settings",
      to: "/settings",
    },
    {
      label: "Logout",
      to: "/logout",
    },
  ],
  showNotifications: true,
  newNotificationsCounter: 5,
} as AppBarProps;

export const UserMenu = Template.bind({});
UserMenu.args = {
  logo: <img src={codeBracketsSVGUrl} alt="logo" width={50} />,
  userData: {
    avatarLink: "https://mui.com/static/images/avatar/1.jpg",
    title: "John Doe",
  },
  userDropdown: [
    {
      label: "Account",
      to: "/account",
      icon: <AccountCircleIcon />,
    },
    {
      label: "Settings",
      to: "/settings",
      icon: <SettingsIcon />,
    },
    {
      label: "Logout",
      to: "/logout",
      icon: <ExitToAppIcon />,
      isErrorColor: true,
    },
  ],
} as AppBarProps;

export const AdditionalControls = Template.bind({});
AdditionalControls.args = {
  logo: <img src={codeBracketsSVGUrl} alt="logo" width={50} />,
  userData: {
    avatarLink: "https://mui.com/static/images/avatar/1.jpg",
    title: "John Doe",
  },
  userDropdown: [
    {
      label: "Account",
      to: "/account",
      icon: <AccountCircleIcon />,
    },
    {
      label: "Settings",
      to: "/settings",
      icon: <SettingsIcon />,
    },
    {
      label: "Logout",
      to: "/logout",
      icon: <ExitToAppIcon />,
      isErrorColor: true,
    },
  ],
  additionalControls: (
    <>
      <IconButton>
        <ColoredIconWrapper color="white">
          <LanguageIcon />
        </ColoredIconWrapper>
      </IconButton>
    </>
  ),
} as AppBarProps;
