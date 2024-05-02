import { a as __assign } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import Box from '@mui/material/Box';

var FlagWrapperTestId = "FlagWrapper";
var FlagWrapper = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, size = _a.size;
    return (jsx(Box, __assign({ width: size || width || 25, height: size || height || 25, display: "flex", justifyContent: "center", alignItems: "center", "data-testid": FlagWrapperTestId }, { children: jsx("img", { src: src, alt: alt, width: "100%" }, void 0) }), void 0));
};

export { FlagWrapperTestId, FlagWrapper as default };
