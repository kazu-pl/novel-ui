import { a as __assign } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import SidebarMenuItem from './SidebarMenuItem.js';
import '@mui/material/Collapse';
import '@mui/icons-material/ExpandLess';
import '@mui/icons-material/ExpandMore';
import 'react';
import '../ColoredIconWrapper/ColoredIconWrapper.js';
import 'styled-components';
import '@mui/material/ListItemText';
import '@mui/material/ListItemIcon';
import 'react-router-dom';
import '@mui/material/Divider';
import '@mui/material/styles';

var Sidebar = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 280 : _b, sidebarItems = _a.sidebarItems;
    return (jsx(Box, __assign({ sx: {
            width: width,
            backgroundColor: "white",
            borderRight: function (theme) { return "1px solid " + theme.palette.grey[300]; },
            minHeight: "100%",
            p: 1,
        } }, { children: jsx(List, __assign({ sx: { width: "100%" }, component: "nav" }, { children: sidebarItems.map(function (item, index) { return (jsx(SidebarMenuItem, __assign({}, item), index)); }) }), void 0) }), void 0));
};

export { Sidebar as default };
