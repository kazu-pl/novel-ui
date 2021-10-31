import { b as __rest, a as __assign, e as __spreadArray } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import FileInput from '../inputs/FileInput/FileInput.js';
import { useField } from 'formik';
import { v4 } from 'uuid';
import '@mui/material/InputLabel';
import '../buttons/Button/Button.js';
import 'react';
import 'react-router-dom';
import 'styled-components';
import '@mui/material/Button';
import '@mui/material/CircularProgress';
import '@mui/icons-material/Add';
import '@mui/material/FormHelperText';
import '../inputs/FileInput/SingleFile.js';
import '@mui/material/Box';
import '@mui/icons-material/InsertDriveFile';
import '@mui/material/Typography';
import '@mui/icons-material/Delete';
import '@mui/material/IconButton';
import '../ColoredIconWrapper/ColoredIconWrapper.js';

var InputTypeFileFormik = function (_a) {
    var name = _a.name, multiple = _a.multiple, helperText = _a.helperText, rest = __rest(_a, ["name", "multiple", "helperText"]);
    var _b = useField(name), field = _b[0], meta = _b[1], helpers = _b[2];
    var onChange = function (event) {
        if (!event.target.files)
            return;
        var filesList = Array.from(event.target.files);
        multiple
            ? Array.isArray(field.value)
                ? helpers.setValue(__spreadArray(__spreadArray([], field.value, true), filesList.map(function (file) { return ({
                    file: file,
                    id: v4(),
                }); }), true))
                : helpers.setValue(filesList.map(function (file) { return ({ file: file, id: v4() }); }))
            : helpers.setValue({ file: filesList[0], id: v4() });
    };
    var handleDeleteFile = function (fileId) {
        multiple
            ? helpers.setValue(field.value.filter(function (file) { return file.id !== fileId; }))
            : helpers.setValue(null);
    };
    return (jsx(FileInput, __assign({ name: name, value: field.value, onDeleteIconClick: handleDeleteFile, onChange: onChange, error: !!meta.error, helperText: meta.error || helperText, multiple: multiple }, rest), void 0));
};

export { InputTypeFileFormik as default };
