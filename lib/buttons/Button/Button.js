import { _ as __makeTemplateObject, b as __rest, a as __assign, c as __awaiter, d as __generator } from '../../tslib.es6-905b4068.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Muibutton from '@mui/material/Button';
import CircularProgress$1 from '@mui/material/CircularProgress';

var StyledWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  ", "\n"], ["\n  position: relative;\n  ", "\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return fullWidth
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          display: block;\n          width: 100%;\n        "], ["\n          display: block;\n          width: 100%;\n        "]))) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          display: inline-block;\n        "], ["\n          display: inline-block;\n        "])));
});
var StyledButton = styled(Muibutton)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-radius: 50px;\n  text-transform: ", ";\n"], ["\n  border-radius: 50px;\n  text-transform: ", ";\n"])), function (_a) {
    var $textTransform = _a.$textTransform;
    return $textTransform;
});
var CircularProgress = styled(CircularProgress$1)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: ", "px;\n  left: ", ";\n"], ["\n  position: absolute;\n  top: ", "px;\n  left: ", ";\n"])), function (_a) {
    var size = _a.size;
    return size / 2;
}, function (_a) {
    var size = _a.size;
    return "calc(50% - " + size / 2 + "px)";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var circularProgressDataTestid = "btn-CircularProgress";
var Button = forwardRef(function (_a, ref) {
    var isLoading = _a.isLoading, fullWidth = _a.fullWidth, disabled = _a.disabled, color = _a.color, _b = _a.size, size = _b === void 0 ? "medium" : _b, onClick = _a.onClick, onClickPromise = _a.onClickPromise, target = _a.target, to = _a.to, _c = _a.textTransform, textTransform = _c === void 0 ? "uppercase" : _c, component = _a.component, rest = __rest(_a, ["isLoading", "fullWidth", "disabled", "color", "size", "onClick", "onClickPromise", "target", "to", "textTransform", "component"]);
    var _d = useState(false), isPromiseLoading = _d[0], setIsPromiseLoading = _d[1];
    var handleBtnClick = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (onClick) {
                        onClick(e);
                    }
                    if (!onClickPromise) return [3 /*break*/, 4];
                    setIsPromiseLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onClickPromise(e)];
                case 2:
                    _a.sent();
                    setIsPromiseLoading(false);
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    setIsPromiseLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (jsxs(StyledWrapper, __assign({ fullWidth: fullWidth }, { children: [jsx(StyledButton, __assign({ fullWidth: fullWidth, disabled: isPromiseLoading || isLoading || disabled, color: color, size: size, ref: ref, target: target, onClick: handleBtnClick, component: to ? Link : component || undefined, to: to, "$textTransform": textTransform }, rest), void 0), (isPromiseLoading || isLoading) && (jsx(CircularProgress, { color: color, size: size === "large" ? 20 : size === "medium" ? 18 : 16, "data-testid": circularProgressDataTestid }, void 0))] }), void 0));
});

export { circularProgressDataTestid, Button as default };
