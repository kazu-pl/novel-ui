import { _ as __makeTemplateObject, a as __assign } from '../tslib.es6-c9f71ef4.js';
import { jsx } from 'react/jsx-runtime';
import styled, { css } from 'styled-components';

var StyledInput = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 20px 50px;\n  ", "\n"], ["\n  padding: 20px 50px;\n  ", "\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-family: ", ";\n    color: ", ";\n  "], ["\n    font-family: ", ";\n    color: ", ";\n  "])), theme.typography.fontFamily, variant === "error"
        ? theme.palette.error.main
        : variant === "info"
            ? theme.palette.primary.main
            : theme.palette.success.main);
});
var templateObject_1, templateObject_2;

var TextField = function (_a) {
    var variant = _a.variant, children = _a.children;
    return jsx(StyledInput, __assign({ variant: variant }, { children: children }), void 0);
};

export { TextField as default };
