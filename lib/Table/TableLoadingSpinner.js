import { a as __assign } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

var TableLoadingPaper = function () {
    return (jsx(Box, __assign({ sx: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            background: "linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 100%)",
        } }, { children: jsx(CircularProgress, {}, void 0) }), void 0));
};

export { TableLoadingPaper as default };
