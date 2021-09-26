import { _ as __makeTemplateObject, a as __assign } from '../tslib.es6-905b4068.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ColoredIconWrapper from '../ColoredIconWrapper/ColoredIconWrapper.js';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

var StyledListItemLink = styled(Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 6px 16px;\n  color: ", ";\n  text-decoration: none;\n"], ["\n  width: 100%;\n  padding: 6px 16px;\n  color: ", ";\n  text-decoration: none;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.palette.text.primary;
});
var templateObject_1;

var AppBarLayout = function (_a) {
    var logo = _a.logo, _b = _a.bgColor, bgColor = _b === void 0 ? "transparent" : _b, userData = _a.userData, userDropdown = _a.userDropdown, newNotificationsCounter = _a.newNotificationsCounter, showNotifications = _a.showNotifications;
    var _c = useState(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var isMenuOpen = Boolean(anchorEl);
    var handleProfileMenuOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleMenuClose = function () {
        setAnchorEl(null);
    };
    return (jsxs(Box, __assign({ sx: { flexGrow: 1 } }, { children: [jsx(AppBar, __assign({ position: "static", color: bgColor, sx: { boxShadow: 0 } }, { children: jsxs(Toolbar, { children: [logo, jsx(Box, { sx: { flexGrow: 1 } }, void 0), jsxs(Box, __assign({ sx: { display: { xs: "none", md: "flex" } } }, { children: [showNotifications && (jsx(IconButton, __assign({ size: "large", "aria-label": "show new notifications", color: "inherit" }, { children: jsx(Badge, __assign({ badgeContent: newNotificationsCounter, color: "error" }, { children: jsx(ColoredIconWrapper, __assign({ color: "inherit", opacity: 0.9 }, { children: jsx(NotificationsIcon, {}, void 0) }), void 0) }), void 0) }), void 0)), jsx(CardHeader, { sx: {
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                    }, avatar: jsx(Avatar, __assign({ "aria-label": "recipe", src: userData.avatarLink || undefined }, { children: userData.avatarLink ? undefined : userData.name[0] }), void 0), title: userData.name + " " + userData.surname, subheader: userData.job }, void 0)] }), void 0), jsx(IconButton, __assign({ size: "large", "aria-label": "show more", "aria-controls": "primary-search-account-menu-mobile", "aria-haspopup": "true", onClick: handleProfileMenuOpen, color: "inherit" }, { children: jsx(MoreIcon, {}, void 0) }), void 0)] }, void 0) }), void 0), jsx(Menu, __assign({ anchorEl: anchorEl, anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                }, id: "primary-search-account-menu", keepMounted: true, transformOrigin: {
                    vertical: "top",
                    horizontal: "right",
                }, disablePortal: true, open: isMenuOpen, onClose: handleMenuClose }, { children: userDropdown.map(function (item) { return (jsx(MenuItem, __assign({ onClick: handleMenuClose, sx: { p: 0 } }, { children: jsx(StyledListItemLink, __assign({ to: item.to }, { children: item.label }), void 0) }), item.label)); }) }), void 0)] }), void 0));
};

export { AppBarLayout as default };
