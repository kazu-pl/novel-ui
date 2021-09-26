import { b as __rest, a as __assign, c as __awaiter, d as __generator } from '../../tslib.es6-905b4068.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import Modal from '../Modal/Modal.js';
import Button from '../../buttons/Button/Button.js';
import Box from '@mui/material/Box';
import { useState } from 'react';
import '@mui/material/Modal';
import '@mui/material/Typography';
import 'styled-components';
import 'react-router-dom';
import '@mui/material/Button';
import '@mui/material/CircularProgress';

var ActionModal = function (_a) {
    var open = _a.open, onClose = _a.onClose, _b = _a.headlineText, headlineText = _b === void 0 ? "Caution" : _b, _c = _a.headlineTextColor, headlineTextColor = _c === void 0 ? "primary" : _c, onActionBtnClick = _a.onActionBtnClick, onActionBtnClickPromise = _a.onActionBtnClickPromise, children = _a.children, buttonsTextTransform = _a.buttonsTextTransform, _d = _a.closeBtnText, closeBtnText = _d === void 0 ? "Close" : _d, _e = _a.actionBtnText, actionBtnText = _e === void 0 ? "Confirm" : _e, rest = __rest(_a, ["open", "onClose", "headlineText", "headlineTextColor", "onActionBtnClick", "onActionBtnClickPromise", "children", "buttonsTextTransform", "closeBtnText", "actionBtnText"]);
    var _f = useState(false), isActionInProgress = _f[0], setIsActionInProgress = _f[1];
    var handleActionBtnClick = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (onActionBtnClick) {
                        onActionBtnClick(event);
                    }
                    if (!onActionBtnClickPromise) return [3 /*break*/, 4];
                    setIsActionInProgress(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onActionBtnClickPromise()];
                case 2:
                    _a.sent();
                    setIsActionInProgress(false);
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    setIsActionInProgress(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (jsx(Modal, __assign({ open: open, onClose: onClose, headlineText: headlineText, headlineTextColor: headlineTextColor, footerContent: jsxs(Fragment, { children: [jsx(Box, __assign({ mr: 2 }, { children: jsx(Button, __assign({ variant: "text", color: "inherit", onClick: onClose, textTransform: buttonsTextTransform }, { children: closeBtnText }), void 0) }), void 0), jsx(Button, __assign({ variant: "contained", onClick: handleActionBtnClick, isLoading: isActionInProgress, textTransform: buttonsTextTransform }, { children: actionBtnText }), void 0)] }, void 0) }, rest, { children: children }), void 0));
};

export { ActionModal as default };
