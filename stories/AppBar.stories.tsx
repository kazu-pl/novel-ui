import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import AcUnitSharp from "@mui/icons-material/AcUnitSharp";
import { BrowserRouter } from "react-router-dom";

import { ArgType } from "../types/storybookArgs";

import AppBar, { AppBarProps } from "../src/AppBar";

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
    name: "John",
    surname: "Doe",
    job: "Programmer",
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
  logo: <AcUnitSharp />,
  userData: {
    avatarLink: "https://mui.com/static/images/avatar/1.jpg",
    name: "John",
    surname: "Doe",
    job: "Programmer",
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
  logo: <AcUnitSharp />,
  userData: {
    name: "John",
    surname: "Doe",
    job: "Programmer",
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

export const WithNotifyList = Template.bind({});
WithNotifyList.args = {
  logo: <AcUnitSharp />,
  userData: {
    name: "John",
    surname: "Doe",
    job: "Programmer",
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
