import { _ as __makeTemplateObject, b as __rest, a as __assign } from '../../tslib.es6-905b4068.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import MuiModal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import styled, { css } from 'styled-components';
import Box from '@mui/material/Box';

var StyledModalBody = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #efefef;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 24px 24px 16px;\n  border-radius: 6px;\n\n  box-shadow: 0px 15px 12px rgba(0, 0, 0, 0.22),\n    0px 19px 38px rgba(0, 0, 0, 0.3);\n  max-height: 80vh;\n  overflow-y: auto;\n  width: 100%;\n  max-width: calc(100vw - 32px);\n\n  @media (min-width: ", "px) {\n    width: ", ";\n    max-width: ", ";\n  }\n"], ["\n  background-color: #efefef;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 24px 24px 16px;\n  border-radius: 6px;\n\n  box-shadow: 0px 15px 12px rgba(0, 0, 0, 0.22),\n    0px 19px 38px rgba(0, 0, 0, 0.3);\n  max-height: 80vh;\n  overflow-y: auto;\n  width: 100%;\n  max-width: calc(100vw - 32px);\n\n  @media (min-width: ", "px) {\n    width: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.breakpoints.values["md"];
}, function (_a) {
    var maxWidthOnDesktop = _a.maxWidthOnDesktop;
    return typeof maxWidthOnDesktop === "number"
        ? maxWidthOnDesktop + "px"
        : maxWidthOnDesktop || "unset";
}, function (_a) {
    var widthOnDesktop = _a.widthOnDesktop;
    return typeof widthOnDesktop === "number"
        ? widthOnDesktop + "px"
        : widthOnDesktop || "unset";
});
var StyledTitleWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 4px;\n  ", "\n"], ["\n  margin-bottom: 4px;\n  ", "\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return color &&
        color !== "black" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), theme.palette[color].main);
});
var templateObject_1, templateObject_2, templateObject_3;

var Modal = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children, headlineText = _a.headlineText, footerContent = _a.footerContent, headlineTextColor = _a.headlineTextColor, maxWidthOnDesktop = _a.maxWidthOnDesktop, widthOnDesktop = _a.widthOnDesktop, rest = __rest(_a, ["open", "onClose", "children", "headlineText", "footerContent", "headlineTextColor", "maxWidthOnDesktop", "widthOnDesktop"]);
    return (jsx(MuiModal, __assign({ open: open, onClose: onClose }, rest, { children: jsxs(StyledModalBody, __assign({ maxWidthOnDesktop: maxWidthOnDesktop, widthOnDesktop: widthOnDesktop }, { children: [headlineText && (jsx(StyledTitleWrapper, __assign({ color: headlineTextColor }, { children: jsx(Typography, __assign({ variant: "h6", color: headlineTextColor === "black" ? "textPrimary" : "inherit" }, { children: headlineText }), void 0) }), void 0)), children, footerContent && (jsx(Box, __assign({ display: "flex", justifyContent: "flex-end", mt: 4 }, { children: footerContent }), void 0))] }), void 0) }), void 0));
};

export { Modal as default };
