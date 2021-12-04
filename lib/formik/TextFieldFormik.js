import { b as __rest, a as __assign } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import TextField from '../inputs/TextField/TextField.js';
import { useField } from 'formik';
import '@mui/material/TextField';
import 'styled-components';
import '@mui/material/MenuItem';

var TextFieldFormik = function (_a) {
    var name = _a.name, helperText = _a.helperText, onChange = _a.onChange, rest = __rest(_a, ["name", "helperText", "onChange"]);
    var _b = useField(name), field = _b[0], meta = _b[1];
    var handleChange = function (e) {
        onChange && onChange(e);
        field.onChange(e);
    };
    return (jsx(TextField, __assign({ name: field.name, value: field.value, onBlur: field.onBlur, onChange: handleChange, error: meta.touched && !!meta.error, helperText: (meta.touched && meta.error) || helperText }, rest), void 0));
};

export { TextFieldFormik as default };
