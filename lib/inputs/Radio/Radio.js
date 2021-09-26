import { b as __rest, a as __assign } from '../../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import MuiRadio from '@mui/material/Radio';

var Radio = function (_a) {
    _a.name; var error = _a.error, sx = _a.sx, rest = __rest(_a, ["name", "error", "sx"]);
    return (jsx(MuiRadio, __assign({ sx: __assign({ color: error ? function (theme) { return theme.palette.error.main; } : undefined }, sx) }, rest), void 0));
};

export { Radio as default };
