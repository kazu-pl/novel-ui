import { a as __assign } from '../../tslib.es6-905b4068.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import Box from '@mui/material/Box';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ColoredIconWrapper from '../../ColoredIconWrapper/ColoredIconWrapper.js';
import VisibilityIcon from '@mui/icons-material/Visibility';
import 'react';
import 'styled-components';

var SingleFile = function (_a) {
    var file = _a.file, onDeleteIconClick = _a.onDeleteIconClick, onPreviewFileIconClick = _a.onPreviewFileIconClick;
    return (jsxs(Box, __assign({ mt: 1, mb: 1, borderBottom: 2, sx: {
            borderColor: function (theme) { return theme.palette.text.disabled; },
        }, display: "flex", width: "auto", justifyContent: "flex-start", alignItems: "center" }, { children: [jsx(ColoredIconWrapper, __assign({ color: "grey" }, { children: jsx(InsertDriveFileIcon, {}, void 0) }), void 0), jsx(Box, __assign({ marginLeft: 2, display: "flex", flexGrow: 1, justifyContent: "flex-start", alignItems: "center", textAlign: "left" }, { children: jsx(Typography, { children: file.file.name }, void 0) }), void 0), onPreviewFileIconClick && (jsx(IconButton, __assign({ onClick: function () { return onPreviewFileIconClick(file); } }, { children: jsx(VisibilityIcon, {}, void 0) }), void 0)), jsx(IconButton, __assign({ onClick: function () { return onDeleteIconClick(file.id); } }, { children: jsx(DeleteIcon, {}, void 0) }), void 0)] }), void 0));
};

export { SingleFile as default };
