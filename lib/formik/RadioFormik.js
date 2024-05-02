import { b as __rest, a as __assign } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import { useField } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '../inputs/Radio/Radio.js';
import '@mui/material/Radio';

/**
 * Radio buttons are used when user HAS TO select exactly one value among set with couple of values and it's not possible to not select anything. User has to select something and then can't unselect it later.
 */
var RadioFormik = function (_a) {
    var label = _a.label, labelPlacement = _a.labelPlacement, name = _a.name, value = _a.value, rest = __rest(_a, ["label", "labelPlacement", "name", "value"]);
    var _b = useField(name), field = _b[0], meta = _b[1], helpers = _b[2];
    return (jsx(FormControlLabel, { label: label, labelPlacement: labelPlacement, onBlur: field.onBlur, sx: {
            "& .MuiFormControlLabel-label": {
                color: meta.touched && !!meta.error
                    ? function (theme) { return theme.palette.error.main; }
                    : undefined,
            },
        }, control: jsx(Radio, __assign({ name: field.name, checked: field.value === value, value: value, onChange: function () { return helpers.setValue(value); }, error: meta.touched && !!meta.error }, rest), void 0) }, void 0));
};

export { RadioFormik as default };
