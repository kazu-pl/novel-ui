import AppBar, { AppBarProps } from "../../AppBar";
import Sidebar, { SidebarProps } from "../../Sidebar";
import Box from "@mui/material/Box";
import {
  StyledDashboardWrapper,
  StyledToggleMobileMenuIconWrapper,
} from "./Dashboard.styled";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import ColoredIconWrapper from "../../ColoredIconWrapper";
import Typography from "@mui/material/Typography";

export interface DashboardProps {
  sidebarProps: SidebarProps;
  appBarProps: AppBarProps;
  bgColor?: string;
  children: React.ReactNode;
  title: string;
  additionalControls?: React.ReactNode;
}

const Dashboard = ({
  appBarProps,
  sidebarProps,
  bgColor,
  children,
  title,
  additionalControls,
}: DashboardProps) => {
  const {
    additionalControls: additionalAppBarControls,
    ...restOfAppBarProps
  } = appBarProps;

  const [isSidebarOpenOnMobile, setIsSidebarOpenOnMobile] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsSidebarOpenOnMobile(open);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: bgColor || "rgb(248, 249, 250)",
      }}
      display="flex"
      flexDirection="column"
    >
      <AppBar
        additionalControls={
          <>
            <StyledToggleMobileMenuIconWrapper>
              <IconButton
                onClick={() => setIsSidebarOpenOnMobile((prev) => !prev)}
                edge="start"
              >
                <ColoredIconWrapper color="white">
                  <MenuIcon />
                </ColoredIconWrapper>
              </IconButton>
            </StyledToggleMobileMenuIconWrapper>
            {additionalAppBarControls}
          </>
        }
        {...restOfAppBarProps}
      />

      <Box display="flex" flexGrow={1} flexDirection="row">
        <StyledDashboardWrapper>
          <Sidebar {...sidebarProps} />
        </StyledDashboardWrapper>

        <SwipeableDrawer
          anchor="left"
          open={isSidebarOpenOnMobile}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Sidebar {...sidebarProps} />
        </SwipeableDrawer>

        <Box flexGrow={1} display="flex" flexDirection="column" width="100%">
          <Box p={2} height="100%" display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" component="h1">
                {title}
              </Typography>

              {additionalControls}
            </Box>

            <Box pt={2} flexGrow={1}>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
