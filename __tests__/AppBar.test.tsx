import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AppBar from "../src/AppBar";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  appBarMenuTestid,
  appBarNotificationsBadge,
  appBarNotificationsBtn,
  appBarShowMoreBtnTestid,
} from "../src/AppBar/AppBar";

describe("<AppBar />", () => {
  it("Should display logo", () => {
    render(
      <AppBar
        userData={{ title: "" }}
        userDropdown={[]}
        logo={<AddAPhotoIcon data-testid="logo" />}
      />
    );

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
  });

  it("should have initialy closed menu", () => {
    render(<AppBar userData={{ title: "" }} userDropdown={[]} />);

    const menu = screen.queryByTestId(appBarMenuTestid);

    expect(menu).not.toBeVisible();
  });

  it("should open menu after user clicks", () => {
    render(<AppBar userData={{ title: "" }} userDropdown={[]} />);

    const menu = screen.queryByTestId(appBarMenuTestid);

    expect(menu).not.toBeVisible();

    const btn = screen.getByTestId(appBarShowMoreBtnTestid);

    fireEvent.click(btn, {});

    expect(menu).toBeVisible();
  });

  it("should close menu on click away", () => {
    render(
      <AppBar
        userData={{ title: "" }}
        userDropdown={[]}
        logo={<AddAPhotoIcon data-testid="logo" />}
      />
    );

    const menu = screen.queryByTestId(appBarMenuTestid);

    expect(menu).not.toBeVisible();

    const logo = screen.getByTestId("logo");

    fireEvent.click(logo, {});

    expect(menu).not.toBeVisible();
  });

  it("should show notifications btn when it's enabled", () => {
    render(
      <AppBar userData={{ title: "" }} userDropdown={[]} showNotifications />
    );

    const btn = screen.getByTestId(appBarNotificationsBtn);

    expect(btn).toBeVisible();
    expect(btn).toBeInTheDocument();
  });

  it("should NOT show notifications badge when it's enabled but there's no any notification", () => {
    render(
      <AppBar
        userData={{ title: "" }}
        userDropdown={[]}
        showNotifications
        newNotificationsCounter={0}
      />
    );

    const badge = screen.queryByTestId(appBarNotificationsBadge);

    expect(badge).toBeNull();
  });
});
