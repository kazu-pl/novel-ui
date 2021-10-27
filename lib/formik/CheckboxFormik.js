import { b as __rest, a as __assign, e as __spreadArray } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import Checkbox from '../inputs/Checkbox/Checkbox.js';
import { useField } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import '@mui/material/Checkbox';

var CheckboxFormik = function (_a) {
    var label = _a.label, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? "end" : _b, name = _a.name, value = _a.value, rest = __rest(_a, ["label", "labelPlacement", "name", "value"]);
    var _c = useField(name), field = _c[0], meta = _c[1], helpers = _c[2];
    return (jsx(FormControlLabel, { label: label, labelPlacement: labelPlacement, sx: {
            "& .MuiFormControlLabel-label": {
                color: meta.touched && !!meta.error
                    ? function (theme) { return theme.palette.error.main; }
                    : undefined,
            },
        }, onBlur: field.onBlur, control: jsx(Checkbox, __assign({ name: field.name, checked: Array.isArray(field.value)
                ? field.value.includes(value)
                : field.value, onChange: Array.isArray(field.value)
                ? function () {
                    field.value.includes(value)
                        ? helpers.setValue(field.value.filter(function (item) { return item !== value; }))
                        : helpers.setValue(__spreadArray(__spreadArray([], field.value, true), [value], false));
                }
                : field.onChange, error: meta.touched && !!meta.error, value: value }, rest), void 0) }, void 0));
};

export { CheckboxFormik as default };
