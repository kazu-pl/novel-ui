import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import IconButton from "@mui/material/IconButton";

import { useState } from "react";

import { StyledListItemLink } from "./LangSwitcher.styled";

export const LangSwitcherBthWithCurrLangTestId = "LangSwitcher-wrapper";
export const LangSwitcherMenuTestId = "LangSwitcher_menuPaper";
export const LangSwtchingMenuItemTestIdPrefix = "LangSwitcher_LangMenuLink-";
export const LangSwtchingLinkTestIdPrefix = "LangSwitcher_LangLink-";

export interface LangSwitcherProps<Lang> {
  langs: {
    icon: React.ReactNode;
    to: string;
    lang: Lang;
    label: string;
  }[];
  activeLang: Lang;
}

const LangSwitcher = <Lang extends string>({
  langs,
  activeLang,
}: LangSwitcherProps<Lang>) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls="primary-search-account-menu-mobile"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="default"
        data-testid={LangSwitcherBthWithCurrLangTestId}
      >
        {langs.filter((item) => item.lang === activeLang)[0].icon}
      </IconButton>
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
        PaperProps={{
          // @ts-ignore
          "data-testid": LangSwitcherMenuTestId,
        }}
      >
        {langs.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleMenuClose}
            sx={{ p: 0 }}
            data-testid={LangSwtchingMenuItemTestIdPrefix + item.lang}
          >
            <StyledListItemLink
              to={item.to}
              data-testid={LangSwtchingLinkTestIdPrefix + item.lang}
            >
              <div style={{ marginRight: 8 }}>{item.icon}</div> {item.label}
            </StyledListItemLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LangSwitcher;
