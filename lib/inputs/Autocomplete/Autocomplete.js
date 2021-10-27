import { b as __rest, a as __assign } from '../../tslib.es6-905b4068.js';
import { jsx } from 'react/jsx-runtime';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '../TextField/TextField.js';
import '@mui/material/TextField';
import 'styled-components';
import '@mui/material/MenuItem';

var Autocomplete = function (_a) {
    var inputLabel = _a.inputLabel, error = _a.error, helperText = _a.helperText, _b = _a.inputAutoComplete, inputAutoComplete = _b === void 0 ? "new-password" : _b, _c = _a.autoHighlight, autoHighlight = _c === void 0 ? true : _c, _d = _a.noOptionsText, noOptionsText = _d === void 0 ? "No matching elements" : _d, TextFieldInputProps = _a.TextFieldInputProps, rest = __rest(_a, ["inputLabel", "error", "helperText", "inputAutoComplete", "autoHighlight", "noOptionsText", "TextFieldInputProps"]);
    return (jsx(MuiAutocomplete, __assign({ autoHighlight: autoHighlight, noOptionsText: noOptionsText, renderInput: function (_a) {
            var InputProps = _a.InputProps, rest = __rest(_a, ["InputProps"]);
            return (jsx(TextField, __assign({}, rest, { label: inputLabel, error: error, helperText: helperText, inputProps: __assign(__assign({}, rest.inputProps), { autoComplete: inputAutoComplete }), InputProps: __assign(__assign({}, InputProps), TextFieldInputProps) }), void 0));
        } }, rest), void 0));
};

export { Autocomplete as default };
