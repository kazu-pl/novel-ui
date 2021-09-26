import { b as __rest, a as __assign } from '../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import Autocomplete from '../inputs/Autocomplete/Autocomplete.js';
import { useField } from 'formik';
import '@mui/material/Autocomplete';
import '../inputs/TextField/TextField.js';
import '@mui/material/TextField';
import 'styled-components';
import '@mui/material/MenuItem';

var AutocompleteSyncFormik = function (_a) {
    var name = _a.name, helperText = _a.helperText, rest = __rest(_a, ["name", "helperText"]);
    var _b = useField(name); _b[0]; var meta = _b[1], helpers = _b[2];
    return (jsx(Autocomplete, __assign({ onChange: function (event, newValue) {
            newValue ? helpers.setValue(newValue.id) : helpers.setValue("");
        }, getOptionLabel: function (option) { return option && option.label; }, isOptionEqualToValue: function (option, value) { return option.id === value.id; }, helperText: (meta.touched && meta.error) || helperText, error: meta.touched && !!meta.error }, rest), void 0));
};

export { AutocompleteSyncFormik as default };
