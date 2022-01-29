import { b as __rest, a as __assign } from '../../tslib.es6-905b4068.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import InputLabel from '@mui/material/InputLabel';
import Button from '../../buttons/Button/Button.js';
import AddIcon from '@mui/icons-material/Add';
import FormHelperText from '@mui/material/FormHelperText';
import SingleFile from './SingleFile.js';
import 'react';
import 'react-router-dom';
import 'styled-components';
import '@mui/material/Button';
import '@mui/material/CircularProgress';
import '@mui/material/Box';
import '@mui/icons-material/InsertDriveFile';
import '@mui/material/Typography';
import '@mui/icons-material/Delete';
import '@mui/material/IconButton';
import '../../ColoredIconWrapper/ColoredIconWrapper.js';
import '@mui/icons-material/Visibility';

var FileInput = function (_a) {
    var id = _a.id, inputRef = _a.inputRef, text = _a.text, _b = _a.buttonProps, buttonProps = _b === void 0 ? {
        variant: "contained",
        color: "primary",
        startIcon: jsx(AddIcon, {}, void 0),
    } : _b, helperText = _a.helperText, error = _a.error, onDeleteIconClick = _a.onDeleteIconClick, onPreviewFileIconClick = _a.onPreviewFileIconClick, value = _a.value, rest = __rest(_a, ["id", "inputRef", "text", "buttonProps", "helperText", "error", "onDeleteIconClick", "onPreviewFileIconClick", "value"]);
    return (jsxs("div", { children: [jsx("input", __assign({ id: id, type: "file", hidden: true, ref: inputRef }, rest), void 0), jsx(InputLabel, __assign({ htmlFor: id }, { children: jsx(Button, __assign({ component: "span" }, buttonProps, { children: text }), void 0) }), void 0), helperText && (jsx(FormHelperText, __assign({ sx: __assign({}, (error && { color: function (theme) { return theme.palette.error.main; } })) }, { children: helperText }), void 0)), Array.isArray(value) &&
                value.map(function (file) { return (jsx(SingleFile, { file: file, onDeleteIconClick: onDeleteIconClick, onPreviewFileIconClick: onPreviewFileIconClick }, file.id)); }), !Array.isArray(value) && value && (jsx(SingleFile, { file: value, onDeleteIconClick: onDeleteIconClick, onPreviewFileIconClick: onPreviewFileIconClick }, void 0))] }, void 0));
};

export { FileInput as default };
