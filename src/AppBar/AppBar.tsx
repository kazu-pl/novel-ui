import AppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ColoredIconWrapper from "../ColoredIconWrapper";
import { useState } from "react";
import { StyledListItemLink } from "./AppBar.styled";

export interface AppBarProps {
  logo?: React.ReactNode;
  bgColor?: MuiAppBarProps["color"];
  userData: {
    avatarLink?: string;
    name: string;
    surname?: string;
    job: string;
  };
  userDropdown: {
    label: string;
    to: string;
  }[];
  newNotificationsCounter?: number;
  showNotifications?: boolean;
}

const AppBarLayout = ({
  logo,
  bgColor = "transparent",
  userData,
  userDropdown,
  newNotificationsCounter,
  showNotifications,
}: AppBarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={bgColor} sx={{ boxShadow: 0 }}>
        <Toolbar>
          {logo}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {showNotifications && (
              <IconButton
                size="large"
                aria-label="show new notifications"
                color="inherit"
              >
                <Badge badgeContent={newNotificationsCounter} color="error">
                  <ColoredIconWrapper color="inherit" opacity={0.9}>
                    <NotificationsIcon />
                  </ColoredIconWrapper>
                </Badge>
              </IconButton>
            )}

            <CardHeader
              sx={{
                paddingTop: 0,
                paddingBottom: 0,
              }}
              avatar={
                <Avatar
                  aria-label="recipe"
                  src={userData.avatarLink || undefined}
                >
                  {userData.avatarLink ? undefined : userData.name[0]}
                </Avatar>
              }
              title={`${userData.name} ${userData.surname}`}
              subheader={userData.job}
            />
          </Box>

          <IconButton
            size="large"
            aria-label="show more"
            aria-controls="primary-search-account-menu-mobile"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        disablePortal
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {userDropdown.map((item) => (
          <MenuItem key={item.label} onClick={handleMenuClose} sx={{ p: 0 }}>
            <StyledListItemLink to={item.to}>{item.label}</StyledListItemLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AppBarLayout;
