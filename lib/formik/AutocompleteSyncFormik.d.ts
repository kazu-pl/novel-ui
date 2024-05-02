import { AutocompleteProps, Option } from "../inputs/Autocomplete";
export interface AutocompleteSyncFormikProps<T> extends Omit<AutocompleteProps<T>, "value" | "onChange" | "getOptionLabel" | "isOptionEqualToValue" | "inputValue" | "onInputChange" | "TextFieldInputProps"> {
    name: string;
    inputLabel: string;
}
declare const AutocompleteSyncFormik: <T extends Option>({ name, helperText, ...rest }: AutocompleteSyncFormikProps<T>) => JSX.Element;
export default AutocompleteSyncFormik;
