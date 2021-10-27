import { _ as __makeTemplateObject, a as __assign } from '../tslib.es6-905b4068.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

var StyledListItemLink = styled(Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 6px 16px;\n  display: flex;\n  align-items: center;\n  color: black;\n  text-decoration: none;\n\n  .MuiSvgIcon-root {\n    margin-right: 8px;\n  }\n"], ["\n  width: 100%;\n  padding: 6px 16px;\n  display: flex;\n  align-items: center;\n  color: black;\n  text-decoration: none;\n\n  .MuiSvgIcon-root {\n    margin-right: 8px;\n  }\n"])));
var templateObject_1;

var LangSwitcher = function (_a) {
    var langs = _a.langs, activeLang = _a.activeLang;
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var isMenuOpen = Boolean(anchorEl);
    var handleProfileMenuOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleMenuClose = function () {
        setAnchorEl(null);
    };
    return (jsxs(Fragment, { children: [jsx(IconButton, __assign({ size: "large", "aria-label": "show more", "aria-controls": "primary-search-account-menu-mobile", "aria-haspopup": "true", onClick: handleProfileMenuOpen, color: "default" }, { children: langs.filter(function (item) { return item.lang === activeLang; })[0].icon }), void 0), jsx(Menu, __assign({ anchorEl: anchorEl, anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                }, id: "primary-search-account-menu", keepMounted: true, transformOrigin: {
                    vertical: "top",
                    horizontal: "right",
                }, open: isMenuOpen, onClose: handleMenuClose }, { children: langs.map(function (item, index) { return (jsx(MenuItem, __assign({ onClick: handleMenuClose, sx: { p: 0 } }, { children: jsxs(StyledListItemLink, __assign({ to: item.to }, { children: [jsx("div", __assign({ style: { marginRight: 8 } }, { children: item.icon }), void 0), " ", item.label] }), void 0) }), index)); }) }), void 0)] }, void 0));
};

export { LangSwitcher as default };
