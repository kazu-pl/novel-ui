import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/muiTheme";

import renderer from "react-test-renderer";

import { BrowserRouter, Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SidebarMenuItem, {
  SidebarMenuItemWithDropdown,
  bottomLineWrapperTestId,
  dropdownCollapsableWrapper,
} from "../src/Sidebar/SidebarMenuItem";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

const dropdownItems: SidebarMenuItemWithDropdown["dropdownItems"] = [
  {
    to: "/account/avatar",
    label: "Avatar",
  },
  {
    to: "/account/settings",
    label: "Settings",
  },
  {
    to: "/account/friends",
    label: "Friends",
  },
];

describe("<SidebarMenuItem />", () => {
  it("should render correctly and match the snapshot", () => {
    const tree = renderer
      .create(
        <Wrapper>
          <SidebarMenuItem
            variant="no-dropdown"
            icon={<NotificationsIcon />}
            label={"Notifications"}
            to={"/notifications"}
          />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render bottom line when no dropdown", () => {
    render(
      <SidebarMenuItem
        variant="no-dropdown"
        icon={<NotificationsIcon />}
        label={"Notifications"}
        to={"/notifications"}
        renderBottomLine
      />,
      {
        wrapper: Wrapper,
      }
    );

    const bottomLineWrapper = screen.getByTestId(bottomLineWrapperTestId);

    expect(bottomLineWrapper).toBeVisible();
  });

  it("should render bottom line when dropdown is used", () => {
    render(
      <SidebarMenuItem
        variant="with-dropdown"
        icon={<NotificationsIcon />}
        label={"Notifications"}
        dropdownItems={[]}
        renderBottomLine
      />,
      {
        wrapper: Wrapper,
      }
    );

    const bottomLineWrapper = screen.getByTestId(bottomLineWrapperTestId);

    expect(bottomLineWrapper).toBeVisible();
  });

  it("Dropdown should not be opened initially", () => {
    render(
      <SidebarMenuItem
        variant="with-dropdown"
        icon={<NotificationsIcon />}
        label={"Account"}
        dropdownItems={dropdownItems}
      />,
      {
        wrapper: Wrapper,
      }
    );

    const collapsableWrapper = screen.queryByTestId(dropdownCollapsableWrapper);

    expect(collapsableWrapper).toBe(null); // it should not exist
  });

  it("Dropdown should be opened when user clicks button that opens dropdown", () => {
    const label = "Account";

    render(
      <SidebarMenuItem
        variant="with-dropdown"
        icon={<NotificationsIcon />}
        label={label}
        dropdownItems={dropdownItems}
      />,
      {
        wrapper: Wrapper,
      }
    );

    const btnOpeningDropdown = screen.getByText(label);

    fireEvent.click(btnOpeningDropdown, {});

    const collapsableWrapper = screen.queryByTestId(dropdownCollapsableWrapper);

    expect(collapsableWrapper).not.toBe(null);
    expect(collapsableWrapper).toBeInTheDocument();
    expect(collapsableWrapper).toBeVisible();
  });

  it("Dropdown should NOT be opened initially when url matches only first part of url", () => {
    const label = "Account";

    render(
      <Wrapper>
        <SidebarMenuItem
          variant="with-dropdown"
          icon={<NotificationsIcon />}
          label={label}
          dropdownItems={dropdownItems}
        />
        <Link to={"/account"} data-testid="set-url-for-test" />
        <Link to="/" data-testid="reset-url" />
      </Wrapper>
    );

    const link = screen.getByTestId("set-url-for-test");
    fireEvent.click(link, {});

    const collapsableWrapper = screen.queryByTestId(dropdownCollapsableWrapper);

    expect(collapsableWrapper).toBe(null);
    expect(collapsableWrapper).not.toBeInTheDocument();
    // expect(collapsableWrapper).not.toBeVisible(); // you can't use it because collapsableWrapper is null and toBeInTheDocument() expects you pass HTML or SVG element so it can check if it's in the document or not

    // - - - - - below - is - reset - of - url - - - - -
    const resetLink = screen.getByTestId("reset-url");
    fireEvent.click(resetLink, {});
  });

  it("Dropdown should be opened INITIALLY (on page refresh) when url matches url from single dropdown item", () => {
    // First I have to render link which will set the url and after that I can render SidebarMenuItem so when it renders it already has url set
    const { rerender } = render(
      <Wrapper>
        <Link to={dropdownItems[0].to} data-testid="set-avatar-url" />
      </Wrapper>
    );
    const link = screen.getByTestId("set-avatar-url");

    fireEvent.click(link, {});

    // Now when url is already set I can render SidebarMenuItem which will be opened by default because when its internal useState will fire it wil lcheck that some of its dropdown items indeed includes location.pathname so the dropdown will be opened
    rerender(
      <Wrapper>
        <SidebarMenuItem
          variant="with-dropdown"
          icon={<NotificationsIcon />}
          label={"Avatar"}
          dropdownItems={dropdownItems}
        />
        <Link to="/" data-testid="reset-url" />
      </Wrapper>
    );

    const collapsableWrapper = screen.queryByTestId(dropdownCollapsableWrapper);

    expect(collapsableWrapper).not.toBe(null);

    expect(collapsableWrapper).toBeInTheDocument();
    expect(collapsableWrapper).toBeVisible();

    // // - - - - - below - is - reset - of - url - - - - -
    const resetLink = screen.getByTestId("reset-url");
    fireEvent.click(resetLink, {});
  });

  it("When dropdown item is clicked it should change url", () => {
    const dropdownLabel = "Account";

    render(
      <Wrapper>
        <SidebarMenuItem
          variant="with-dropdown"
          icon={<NotificationsIcon />}
          label={dropdownLabel}
          dropdownItems={dropdownItems}
        />
        <Link to="/" data-testid="reset-url" />
      </Wrapper>
    );

    const btnOpeningDropdown = screen.getByText(dropdownLabel);
    fireEvent.click(btnOpeningDropdown, {});

    const { pathname } = window.location;
    expect(pathname).toBe("/");

    const firstItemFromDropdown = screen.getByText(dropdownItems[0].label);
    fireEvent.click(firstItemFromDropdown, {});

    const { pathname: pathnameAfterClick } = window.location;
    expect(pathnameAfterClick).toBe(dropdownItems[0].to);

    // // - - - - - below - is - reset - of - url - - - - -
    const resetLink = screen.getByTestId("reset-url");
    fireEvent.click(resetLink, {});
  });
});
