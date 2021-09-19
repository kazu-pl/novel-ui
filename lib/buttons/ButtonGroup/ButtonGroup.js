import { _ as __makeTemplateObject, a as __assign } from '../../tslib.es6-c9f71ef4.js';
import { jsx } from 'react/jsx-runtime';
import styled, { css } from 'styled-components';

var StyledButtonGroup = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-flex;\n\n  div {\n    .MuiButton-root {\n      border-radius: 0;\n      margin-right: 1px;\n\n      ", "\n\n      ", "\n    }\n\n    &:first-of-type {\n      margin-left: 0px;\n\n      .MuiButton-root {\n        border-top-left-radius: 50px;\n        border-bottom-left-radius: 50px;\n      }\n    }\n\n    &:last-of-type {\n      margin-right: 0px;\n\n      .MuiButton-root {\n        border-top-right-radius: 50px;\n        border-bottom-right-radius: 50px;\n\n        ", "\n      }\n    }\n  }\n"], ["\n  display: inline-flex;\n\n  div {\n    .MuiButton-root {\n      border-radius: 0;\n      margin-right: 1px;\n\n      ", "\n\n      ", "\n    }\n\n    &:first-of-type {\n      margin-left: 0px;\n\n      .MuiButton-root {\n        border-top-left-radius: 50px;\n        border-bottom-left-radius: 50px;\n      }\n    }\n\n    &:last-of-type {\n      margin-right: 0px;\n\n      .MuiButton-root {\n        border-top-right-radius: 50px;\n        border-bottom-right-radius: 50px;\n\n        ", "\n      }\n    }\n  }\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "outlined" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          margin-left: -1px;\n          margin-right: 0;\n        "], ["\n          margin-left: -1px;\n          margin-right: 0;\n        "])));
}, function (_a) {
    var variant = _a.variant, _b = _a.color, color = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return variant === "text" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          border-right: 1px solid\n            ", ";\n        "], ["\n          border-right: 1px solid\n            ", ";\n        "])), color === "inherit" ? "inherit" : theme.palette[color].main);
}, function (_a) {
    var variant = _a.variant;
    return variant === "text" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            border-right: none;\n          "], ["\n            border-right: none;\n          "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var ButtonGroup = function (_a) {
    var variant = _a.variant, color = _a.color, children = _a.children;
    return (jsx(StyledButtonGroup, __assign({ variant: variant, color: color }, { children: children }), void 0));
};

export { ButtonGroup as default };
