import { b as __rest, a as __assign, c as __awaiter, d as __generator } from '../tslib.es6-905b4068.js';
import { jsx, Fragment } from 'react/jsx-runtime';
import Autocomplete from '../inputs/Autocomplete/Autocomplete.js';
import { useField } from 'formik';
import { useRef, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import '@mui/material/Autocomplete';
import '../inputs/TextField/TextField.js';
import '@mui/material/TextField';
import 'styled-components';
import '@mui/material/MenuItem';

var AutocompleteAsyncFormik = function (_a) {
    var name = _a.name, helperText = _a.helperText, noOptionsText = _a.noOptionsText, _b = _a.needMoreSingsText, needMoreSingsText = _b === void 0 ? "Type more characters" : _b, _c = _a.singsNumberToStartFetching, singsNumberToStartFetching = _c === void 0 ? 3 : _c, setOptionsOnInputChange = _a.setOptionsOnInputChange, fetchOptionsOnInputChange = _a.fetchOptionsOnInputChange, options = _a.options, rest = __rest(_a, ["name", "helperText", "noOptionsText", "needMoreSingsText", "singsNumberToStartFetching", "setOptionsOnInputChange", "fetchOptionsOnInputChange", "options"]);
    var _d = useField(name); _d[0]; var meta = _d[1], helpers = _d[2];
    var autocompleteQuery = useRef("");
    var _e = useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = useState(false), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];
    return (jsx(Autocomplete, __assign({ onOpen: function () {
            setIsDropdownOpen(true);
        }, onClose: function () {
            setIsDropdownOpen(false);
        }, options: options, onChange: function (event, newValue) {
            newValue ? helpers.setValue(newValue.id) : helpers.setValue("");
        }, onInputChange: function (event, value) { return __awaiter(void 0, void 0, void 0, function () {
            var values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        autocompleteQuery.current = value;
                        if (!(value && value.length >= singsNumberToStartFetching)) return [3 /*break*/, 2];
                        setIsLoading(true);
                        return [4 /*yield*/, fetchOptionsOnInputChange(value)];
                    case 1:
                        values = _a.sent();
                        console.log({ values: values });
                        setOptionsOnInputChange(values);
                        setIsLoading(false);
                        return [3 /*break*/, 3];
                    case 2:
                        setOptionsOnInputChange([]);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); }, loading: isLoading, noOptionsText: autocompleteQuery.current.length >= singsNumberToStartFetching
            ? noOptionsText
            : needMoreSingsText, getOptionLabel: function (option) { return option && option.label; }, isOptionEqualToValue: function (option, value) { return option.id === value.id; }, helperText: (meta.touched && meta.error) || helperText, error: meta.touched && !!meta.error, TextFieldInputProps: {
            endAdornment: (jsx(Fragment, { children: isDropdownOpen && isLoading ? (jsx(CircularProgress, { color: "inherit", size: 20 }, void 0)) : null }, void 0)),
        } }, rest), void 0));
};

export { AutocompleteAsyncFormik as default };
