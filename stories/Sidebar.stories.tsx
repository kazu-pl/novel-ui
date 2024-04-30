import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ColoredIconWrapper from "../src/ColoredIconWrapper";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { BrowserRouter } from "react-router-dom";

import { ArgType } from "../types/storybookArgs";
// import Box from "@mui/material/Box";

import Sidebar, { SidebarProps } from "../src/Sidebar";

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
  argTypes: {} as ArgType<SidebarProps>,
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <BrowserRouter>
    {/* <Box height="100vh"> */}
    <Sidebar {...args} />
    {/* </Box> */}
  </BrowserRouter>
);

export const Basic = Template.bind({});
Basic.args = {
  sidebarItems: [
    {
      variant: "no-dropdown",
      icon: (
        <ColoredIconWrapper color="grey">
          <DashboardIcon />
        </ColoredIconWrapper>
      ),
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      variant: "no-dropdown",
      icon: (
        <ColoredIconWrapper color="grey">
          <NotificationsIcon />
        </ColoredIconWrapper>
      ),
      label: "Notifications",
      to: "/notifications",
      renderBottomLine: true,
    },
    {
      variant: "with-dropdown",
      icon: (
        <ColoredIconWrapper color="grey">
          <InboxIcon />
        </ColoredIconWrapper>
      ),
      label: "Account",
      dropdownItems: [
        {
          to: "/account/avatar",
          label: "News",
        },
        {
          to: "/account/settings",
          label: "News",
        },
        {
          to: "/account/friends",
          label: "News",
        },
      ],
    },
  ],
} as SidebarProps;
