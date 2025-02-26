import { _ as __makeTemplateObject, b as __rest, a as __assign } from '../../tslib.es6-905b4068.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import AppBarLayout from '../../AppBar/AppBar.js';
import Sidebar from '../../Sidebar/Sidebar.js';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ColoredIconWrapper from '../../ColoredIconWrapper/ColoredIconWrapper.js';
import Typography from '@mui/material/Typography';
import '@mui/material/Badge';
import '@mui/material/MenuItem';
import '@mui/material/Menu';
import '@mui/material/Avatar';
import '@mui/material/CardHeader';
import '@mui/icons-material/Notifications';
import '@mui/icons-material/MoreVert';
import '@mui/material/AppBar';
import 'react-router-dom';
import '@mui/material/Toolbar';
import '@mui/material/List';
import '../../Sidebar/SidebarMenuItem.js';
import '@mui/material/Collapse';
import '@mui/icons-material/ExpandLess';
import '@mui/icons-material/ExpandMore';
import '@mui/material/ListItemText';
import '@mui/material/ListItemIcon';
import '@mui/material/Divider';
import '@mui/material/styles';

var StyledDashboardWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: none;\n  @media (min-width: ", "px) {\n    display: block;\n  }\n"], ["\n  display: none;\n  @media (min-width: ", "px) {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.breakpoints.values.md;
});
var StyledToggleMobileMenuIconWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  @media (min-width: ", "px) {\n    display: none;\n  }\n"], ["\n  display: block;\n  @media (min-width: ", "px) {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.breakpoints.values.md;
});
var templateObject_1, templateObject_2;

var Dashboard = function (_a) {
    var appBarProps = _a.appBarProps, _b = _a.sidebarProps, _c = _b.width, SIDEBAR_WIDTH = _c === void 0 ? 280 : _c, restOfSidebarProps = __rest(_b, ["width"]), bgColor = _a.bgColor, children = _a.children, title = _a.title, additionalControls = _a.additionalControls;
    var additionalAppBarControls = appBarProps.additionalControls, restOfAppBarProps = __rest(appBarProps, ["additionalControls"]);
    var _d = useState(false), isSidebarOpenOnMobile = _d[0], setIsSidebarOpenOnMobile = _d[1];
    var toggleDrawer = function (open) { return function (event) {
        if (event &&
            event.type === "keydown" &&
            (event.key === "Tab" ||
                event.key === "Shift")) {
            return;
        }
        setIsSidebarOpenOnMobile(open);
    }; };
    return (jsxs(Box, __assign({ sx: {
            minHeight: "100vh",
            backgroundColor: bgColor || "rgb(248, 249, 250)",
        }, display: "flex", flexDirection: "column" }, { children: [jsx(AppBarLayout, __assign({ additionalControls: jsxs(Fragment, { children: [jsx(StyledToggleMobileMenuIconWrapper, { children: jsx(IconButton, __assign({ onClick: function () { return setIsSidebarOpenOnMobile(function (prev) { return !prev; }); }, edge: "start" }, { children: jsx(ColoredIconWrapper, __assign({ color: "white" }, { children: jsx(MenuIcon, {}, void 0) }), void 0) }), void 0) }, void 0), additionalAppBarControls] }, void 0) }, restOfAppBarProps), void 0), jsxs(Box, __assign({ display: "flex", flexGrow: 1, flexDirection: "row" }, { children: [jsx(StyledDashboardWrapper, { children: jsx(Sidebar, __assign({ width: SIDEBAR_WIDTH }, restOfSidebarProps), void 0) }, void 0), jsx(SwipeableDrawer, __assign({ anchor: "left", open: isSidebarOpenOnMobile, onClose: toggleDrawer(false), onOpen: toggleDrawer(true) }, { children: jsx(Sidebar, __assign({ width: SIDEBAR_WIDTH }, restOfSidebarProps), void 0) }), void 0), jsx(Box, __assign({ flexGrow: 1, display: "flex", flexDirection: "column", width: "calc(100% - " + SIDEBAR_WIDTH + "px)" }, { children: jsxs(Box, __assign({ p: 2, height: "100%", display: "flex", flexDirection: "column" }, { children: [jsxs(Box, __assign({ display: "flex", justifyContent: "space-between" }, { children: [jsx(Typography, __assign({ variant: "h6", component: "h1" }, { children: title }), void 0), additionalControls] }), void 0), jsx(Box, __assign({ pt: 2, flexGrow: 1 }, { children: children }), void 0)] }), void 0) }), void 0)] }), void 0)] }), void 0));
};

export { Dashboard as default };
