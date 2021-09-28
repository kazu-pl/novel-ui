import { _ as __makeTemplateObject, a as __assign } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

var getFillColor = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fill: ", ";\n  ", "\n"], ["\n  fill: ", ";\n  ", "\n"])), function (_a) {
    var _b = _a.color, color = _b === void 0 ? "primary" : _b, theme = _a.theme;
    if (color === "grey")
        return "" + theme.palette.grey[700];
    if (color === "inherit")
        return "inherit";
    if (color === "white")
        return "rgba(255,255,255,1)";
    return theme.palette[color].main;
}, function (_a) {
    var opacity = _a.opacity;
    return opacity !== undefined && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      opacity: ", ";\n    "], ["\n      opacity: ", ";\n    "])), opacity);
});
var StyledColoredIconWrapper = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 0;\n  ", "\n\n  .MuiSvgIcon-root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ", ";\n    & * {\n      ", ";\n    }\n  }\n"], ["\n  font-size: 0;\n  ", "\n\n  .MuiSvgIcon-root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    ", ";\n    & * {\n      ", ";\n    }\n  }\n"])), getFillColor, getFillColor, getFillColor);
var templateObject_1, templateObject_2, templateObject_3;

var ColoredIconWrapper = forwardRef(function (_a, ref) {
    var children = _a.children, color = _a.color, opacity = _a.opacity;
    return (jsx(StyledColoredIconWrapper, __assign({ ref: ref, color: color, opacity: opacity }, { children: children }), void 0));
});

export { ColoredIconWrapper as default };
