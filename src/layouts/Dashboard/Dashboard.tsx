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
  sidebarProps: { width: SIDEBAR_WIDTH, ...restOfSidebarProps },
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
          <Sidebar width={SIDEBAR_WIDTH} {...restOfSidebarProps} />
        </StyledDashboardWrapper>

        <SwipeableDrawer
          anchor="left"
          open={isSidebarOpenOnMobile}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Sidebar width={SIDEBAR_WIDTH} {...restOfSidebarProps} />
        </SwipeableDrawer>

        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
          width={`calc(100% - ${SIDEBAR_WIDTH}px)`} // needs `width` style with fixed value (calculated by calc() or just plain value like `width: 1000px`) because otherwise you may occur an width issue with wide ui components (like Table) that are wider than the actuall width of this Box component: Let's imagine this Box contains XYZ wrapper with style `overflow-x: "auto";` that is wrapped around wide Table - it won't make x-axis scroll (if Table is actually wider than the wrapper XYZ) because it's inside of this Box which does not have fixed value (like plain number or calc function)
        >
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
