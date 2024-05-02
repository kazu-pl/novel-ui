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
import '@mui/icons-material/Visibility';

var InputTypeFileFormik = function (_a) {
    var name = _a.name, multiple = _a.multiple, helperText = _a.helperText, rest = __rest(_a, ["name", "multiple", "helperText"]);
    var _b = useField(name), field = _b[0], meta = _b[1], helpers = _b[2];
    var onChange = function (event) {
        if (!event.target.files)
            return;
        var filesList = Array.from(event.target.files);
        if (multiple) {
            if (Array.isArray(field.value)) {
                helpers.setValue(__spreadArray(__spreadArray([], field.value, true), filesList.map(function (file) {
                    return ({
                        file: file,
                        id: v4(),
                    });
                }), true));
            }
            else {
                helpers.setValue(filesList.map(function (file) { return ({ file: file, id: v4() }); }));
            }
        }
        else {
            helpers.setValue({ file: filesList[0], id: v4() });
        }
    };
    /**
     * This function will be called only when file exists so it's not possible for field.value to be null
     */
    var handleDeleteFile = function (fileId) {
        // below check is just to get rid of possibly null warning
        if (!field.value)
            return;
        if (multiple) {
            var valueAsArray = field.value; // if `multiple` is true then field.value will always be array here
            helpers.setValue(valueAsArray.length > 1
                ? valueAsArray.filter(function (file) { return file.id !== fileId; })
                : null
            // above I check if length is greater than 1 and if so, I filter, if not, I set null. Previously I didn't check so if length was 1 then empty array was left and formik could give user different error message ("at least one item is required"). But if I want to set min number of uploaded files I can make it it yup, I don't need to pass empty array here so I added length check
            );
        }
        else {
            helpers.setValue(null);
        }
    };
    return (jsx(FileInput, __assign({ name: name, value: field.value, onDeleteIconClick: handleDeleteFile, onChange: onChange, error: !!meta.error, helperText: (meta.touched && meta.error) || helperText, multiple: multiple }, rest), void 0));
};

export { InputTypeFileFormik as default };
