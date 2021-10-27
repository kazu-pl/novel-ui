/// <reference types="react" />
import { AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";
import { TextFieldProps } from "../TextField";
export interface Option {
    id: string | number;
    label: string;
}
export interface AutocompleteProps<T> extends Omit<MuiAutocompleteProps<T, undefined, undefined, undefined>, "renderInput" | "multiple" | "disableClearable" | "freeSolo"> {
    inputLabel?: string;
    error?: boolean;
    helperText?: string;
    inputAutoComplete?: string;
    TextFieldInputProps?: TextFieldProps["InputProps"];
}
declare const Autocomplete: <T extends Option>({ inputLabel, error, helperText, inputAutoComplete, autoHighlight, noOptionsText, TextFieldInputProps, ...rest }: AutocompleteProps<T>) => JSX.Element;
export default Autocomplete;
