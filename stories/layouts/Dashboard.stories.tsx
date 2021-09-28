import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import { ArgType } from "../../types/storybookArgs";
import { BrowserRouter } from "react-router-dom";

import ColoredIconWrapper from "../../src/ColoredIconWrapper";
import Dashboard, { DashboardProps } from "../../src/layouts/Dashboard";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ApartmentIcon from "@mui/icons-material/Apartment";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import LangSwitcher from "../../src/LangSwitcher";

// @ts-ignore
import codeBracketsSVGUrl from "../../stories/introduction/assets/code-brackets.svg";

export default {
  title: "Layout/Dashboard",
  component: Dashboard,
  argTypes: {
    opacity: {
      variant: "number-or-range",
      control: {
        type: "number",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  } as ArgType<DashboardProps>,
} as Meta;

const Template: Story<DashboardProps> = (args) => (
  <BrowserRouter>
    <Dashboard {...args} />
  </BrowserRouter>
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Dashboard",
  additionalControls: (
    <>
      <LangSwitcher
        activeLang="pl"
        langs={[
          {
            icon: (
              <div
                style={{
                  width: 20,
                  height: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
                  alt="de"
                  width={20}
                />
              </div>
            ),
            to: "/de",
            lang: "de",
            label: "Germany",
          },
          {
            icon: (
              <div
                style={{
                  width: 20,
                  height: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
                  alt="pl"
                  width={20}
                />
              </div>
            ),
            to: "/pl",
            lang: "pl",
            label: "Polski",
          },
          {
            icon: (
              <div
                style={{
                  width: 20,
                  height: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="en"
                  width={20}
                />
              </div>
            ),
            to: "/en",
            lang: "en",
            label: "English",
          },
        ]}
      />
    </>
  ),
  appBarProps: {
    logo: (
      <ColoredIconWrapper color="white">
        <img src={codeBracketsSVGUrl} alt="logo" width={45} />
      </ColoredIconWrapper>
    ),
    userData: {
      title: "Johnattan Bowen",
      avatarLink: "https://mui.com/static/images/avatar/1.jpg",
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
        isErrorColor: true,
        icon: <LogoutIcon />,
      },
    ],
  },
  sidebarProps: {
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
            <CallToActionIcon />
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
            <ProductionQuantityLimitsIcon />
          </ColoredIconWrapper>
        ),
        label: "Product",
        dropdownItems: [
          {
            label: "details",
            to: "/product/details",
          },
          {
            label: "edit",
            to: "/product/Edit",
          },
          {
            label: "summary",
            to: "/product/summary",
          },
        ],
      },
      {
        variant: "with-dropdown",
        icon: (
          <ColoredIconWrapper color="grey">
            <ApartmentIcon />
          </ColoredIconWrapper>
        ),
        label: "Company",
        dropdownItems: [
          {
            label: "Informations",
            to: "/company/details",
          },
          {
            label: "edit",
            to: "/company/Edit",
          },
          {
            label: "testing",
            to: "/company/testing",
          },
          {
            label: "news",
            to: "/company/news",
          },
          {
            label: "tasks",
            to: "/company/tasks",
          },
        ],
      },
    ],

    // bgColor
    // width
  },
  children: "CONTENT",
} as DashboardProps;
