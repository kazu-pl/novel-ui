import { _ as __makeTemplateObject, a as __assign } from '../tslib.es6-905b4068.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import ColoredIconWrapper from '../ColoredIconWrapper/ColoredIconWrapper.js';
import styled from 'styled-components';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLink, useLocation } from 'react-router-dom';
import Divider from '@mui/material/Divider';

var StyledListItemText = styled(ListItemText)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: rgba(255, 255, 255, 1);\n"], ["\n  color: rgba(255, 255, 255, 1);\n"])));
var StyledListItemIcon = styled(ListItemIcon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-width: 40px;\n"], ["\n  min-width: 40px;\n"])));
var StyledLink = styled(NavLink)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 8px 16px 8px ", "px;\n  text-align: left;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 1);\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n  }\n\n  &.active {\n    background-color: rgba(255, 255, 255, 0.2);\n    border-radius: 4px;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 8px 16px 8px ", "px;\n  text-align: left;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 1);\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n  }\n\n  &.active {\n    background-color: rgba(255, 255, 255, 0.2);\n    border-radius: 4px;\n  }\n"])), function (_a) {
    var $asSubmenuItem = _a.$asSubmenuItem;
    return ($asSubmenuItem ? 48 : 8);
});
var StyledListItemButton = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 8px;\n  text-align: left;\n  box-sizing: border-box;\n  text-decoration: none;\n  cursor: pointer;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 1);\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 8px;\n  text-align: left;\n  box-sizing: border-box;\n  text-decoration: none;\n  cursor: pointer;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 1);\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 4px;\n  }\n"])));
var StyledDividerWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 8px 0;\n"], ["\n  padding: 8px 0;\n"])));
var StyledDivider = styled(Divider)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-color: rgba(255, 255, 255, 0.2);\n"], ["\n  border-color: rgba(255, 255, 255, 0.2);\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var SidebarMenuItem = function (props) {
    var location = useLocation();
    var isSubmenuExpandedByDefault = props.variant === "with-dropdown"
        ? props.dropdownItems.some(function (item) { return location.pathname.includes(item.to); })
        : false;
    var _a = useState(isSubmenuExpandedByDefault), isSubmenuOpen = _a[0], setIsSubmenuOpen = _a[1];
    var handleClick = function () { return setIsSubmenuOpen(function (prev) { return !prev; }); };
    return props.variant === "with-dropdown" ? (jsxs(Fragment, { children: [jsxs(StyledListItemButton, __assign({ onClick: handleClick }, { children: [jsx(StyledListItemIcon, { children: props.icon }, void 0), jsx(StyledListItemText, { primary: props.label, color: "#ffffff" }, void 0), isSubmenuOpen ? (jsx(ColoredIconWrapper, __assign({ color: "white" }, { children: jsx(ExpandLess, {}, void 0) }), void 0)) : (jsx(ColoredIconWrapper, __assign({ color: "white" }, { children: jsx(ExpandMore, {}, void 0) }), void 0))] }), void 0), jsx(Collapse, __assign({ in: isSubmenuOpen, timeout: "auto", unmountOnExit: true }, { children: jsx(List, __assign({ component: "div", disablePadding: true }, { children: props.dropdownItems.map(function (item, index) { return (jsx(StyledLink, __assign({ to: item.to, "$asSubmenuItem": true }, { children: item.label }), index)); }) }), void 0) }), void 0), props.renderBottomLine && (jsx(StyledDividerWrapper, { children: jsx(StyledDivider, {}, void 0) }, void 0))] }, void 0)) : (jsxs(Fragment, { children: [jsxs(StyledLink, __assign({ to: props.to }, { children: [jsx(StyledListItemIcon, { children: props.icon }, void 0), jsx(StyledListItemText, { primary: props.label }, void 0)] }), void 0), props.renderBottomLine && (jsx(StyledDividerWrapper, { children: jsx(StyledDivider, {}, void 0) }, void 0))] }, void 0));
};

export { SidebarMenuItem as default };
