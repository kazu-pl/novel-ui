import { _ as __makeTemplateObject, a as __assign } from '../tslib.es6-905b4068.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import Box from '@mui/material/Box';
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
import AppBar from '@mui/material/AppBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

var StyledListItemLink = styled(Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 6px 16px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  text-decoration: none;\n\n  .MuiSvgIcon-root {\n    margin-right: 8px;\n  }\n"], ["\n  width: 100%;\n  padding: 6px 16px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  text-decoration: none;\n\n  .MuiSvgIcon-root {\n    margin-right: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme, $isErrorColor = _a.$isErrorColor;
    return $isErrorColor ? theme.palette.error.main : theme.palette.text.primary;
});
var StyledToolbar = styled(Toolbar)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-left: 16px;\n  padding-right: 16px;\n"], ["\n  padding-left: 16px;\n  padding-right: 16px;\n"])));
var templateObject_1, templateObject_2;

var appBarMenuTestid = "appBar-Menu";
var appBarShowMoreBtnTestid = "appBar-showMoreBtn";
var appBarNotificationsBtn = "appBar-notificationsBtn";
var appBarNotificationsBadge = "appBar-notificationsBadge";
var AppBarLayout = function (_a) {
    var logo = _a.logo, userData = _a.userData, userDropdown = _a.userDropdown, newNotificationsCounter = _a.newNotificationsCounter, showNotifications = _a.showNotifications, additionalControls = _a.additionalControls;
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var isMenuOpen = Boolean(anchorEl);
    var handleProfileMenuOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleMenuClose = function () {
        setAnchorEl(null);
    };
    return (jsxs(Box, __assign({ sx: {
            width: "100%",
        } }, { children: [jsx(AppBar, __assign({ position: "static", sx: { boxShadow: 0 } }, { children: jsxs(StyledToolbar, { children: [logo, jsx(Box, { sx: { flexGrow: 1 } }, void 0), jsxs(Box, __assign({ sx: { display: { xs: "none", md: "flex" } } }, { children: [showNotifications && (jsx(IconButton, __assign({ size: "large", "aria-label": "show new notifications", color: "inherit", "data-testid": appBarNotificationsBtn }, { children: jsx(Badge, __assign({ badgeContent: newNotificationsCounter, color: "error" }, { children: jsx(ColoredIconWrapper, __assign({ color: "white", "data-testid": appBarNotificationsBadge }, { children: jsx(NotificationsIcon, {}, void 0) }), void 0) }), void 0) }), void 0)), jsx(CardHeader, { sx: {
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                    }, avatar: jsx(Avatar, __assign({ "aria-label": "recipe", src: userData.avatarLink || undefined, "data-testid": "appBar-avatar" }, { children: userData.avatarLink ? undefined : userData.title[0] }), void 0), title: userData.title }, void 0)] }), void 0), additionalControls, jsx(IconButton, __assign({ size: "large", "aria-label": "show more", "aria-controls": "primary-search-account-menu-mobile", "aria-haspopup": "true", onClick: handleProfileMenuOpen, color: "default", edge: "end", "data-testid": appBarShowMoreBtnTestid }, { children: jsx(ColoredIconWrapper, __assign({ color: "white" }, { children: jsx(MoreIcon, {}, void 0) }), void 0) }), void 0)] }, void 0) }), void 0), jsx(Menu, __assign({ anchorEl: anchorEl, anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                }, id: "primary-search-account-menu", keepMounted: true, transformOrigin: {
                    vertical: "top",
                    horizontal: "right",
                }, open: isMenuOpen, onClose: handleMenuClose, "data-testid": appBarMenuTestid }, { children: userDropdown.map(function (item) { return (jsx(MenuItem, __assign({ onClick: handleMenuClose, sx: {
                        p: 0,
                        borderTop: item.isErrorColor
                            ? function (theme) { return "1px solid " + theme.palette.grey[300]; }
                            : undefined,
                    } }, { children: jsxs(StyledListItemLink, __assign({ to: item.to, "$isErrorColor": item.isErrorColor }, { children: [item.icon, item.label] }), void 0) }), item.label)); }) }), void 0)] }), void 0));
};

export { appBarMenuTestid, appBarNotificationsBadge, appBarNotificationsBtn, appBarShowMoreBtnTestid, AppBarLayout as default };
