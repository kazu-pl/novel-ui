import { _ as __makeTemplateObject, b as __rest, a as __assign } from '../../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import MuiTextField from '@mui/material/TextField';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';

var StyledEmptyMenuItem = styled(MenuItem)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 36px;\n"], ["\n  min-height: 36px;\n"])));
var templateObject_1;

var TextField = function (_a) {
    var select = _a.select, children = _a.children, clearable = _a.clearable, _b = _a.clearItemText, clearItemText = _b === void 0 ? "Clear input" : _b, rest = __rest(_a, ["select", "children", "clearable", "clearItemText"]);
    return (jsx(MuiTextField, __assign({ select: select, children: select && clearable
            ? [
                jsx(StyledEmptyMenuItem, __assign({ value: "" }, { children: jsx("em", { children: clearItemText }, void 0) }), void 0),
                children,
            ]
            : children }, rest), void 0));
};

export { TextField as default };
