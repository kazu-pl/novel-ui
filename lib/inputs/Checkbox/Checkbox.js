import { b as __rest, a as __assign } from '../../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import Checkbox$1 from '@mui/material/Checkbox';

var Checkbox = function (_a) {
    var error = _a.error, sx = _a.sx, rest = __rest(_a, ["error", "sx"]);
    return (jsx(Checkbox$1, __assign({ sx: __assign({ color: error ? function (theme) { return theme.palette.error.main; } : undefined }, sx) }, rest), void 0));
};

export { Checkbox as default };
