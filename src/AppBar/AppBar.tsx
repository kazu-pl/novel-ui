import Box from "@mui/material/Box";
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
import AppBar from "@mui/material/AppBar";
import { StyledListItemLink, StyledToolbar } from "./AppBar.styled";

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

const AppBarLayout = ({
  logo,
  userData,
  userDropdown,
  newNotificationsCounter,
  showNotifications,
  additionalControls,
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
    <Box
      sx={{
        width: "100%",
      }}
    >
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <StyledToolbar>
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
                  <ColoredIconWrapper color="white">
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
                  {userData.avatarLink ? undefined : userData.title[0]}
                </Avatar>
              }
              title={userData.title}
            />
          </Box>

          {additionalControls}

          <IconButton
            size="large"
            aria-label="show more"
            aria-controls="primary-search-account-menu-mobile"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="default"
            edge="end"
          >
            <ColoredIconWrapper color="white">
              <MoreIcon />
            </ColoredIconWrapper>
          </IconButton>
        </StyledToolbar>
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
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {userDropdown.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleMenuClose}
            sx={{
              p: 0,
              borderTop: item.isErrorColor
                ? (theme) => `1px solid ${theme.palette.grey[300]}`
                : undefined,
            }}
          >
            <StyledListItemLink to={item.to} $isErrorColor={item.isErrorColor}>
              {item.icon}
              {item.label}
            </StyledListItemLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AppBarLayout;
