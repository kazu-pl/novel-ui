import { AutocompleteProps, Option } from "../inputs/Autocomplete";
export interface AutocompleteAsyncFormikProps<T> extends Omit<AutocompleteProps<T>, "value" | "onChange" | "getOptionLabel" | "isOptionEqualToValue" | "inputValue" | "onInputChange" | "TextFieldInputProps"> {
    name: string;
    inputLabel: string;
    needMoreSingsText?: string;
    singsNumberToStartFetching?: number;
    setOptionsOnInputChange: (values: T[]) => void;
    fetchOptionsOnInputChange: (query: string) => Promise<T[] | []>;
}
declare const AutocompleteAsyncFormik: <T extends Option>({ name, helperText, noOptionsText, needMoreSingsText, singsNumberToStartFetching, setOptionsOnInputChange, fetchOptionsOnInputChange, options, ...rest }: AutocompleteAsyncFormikProps<T>) => JSX.Element;
export default AutocompleteAsyncFormik;
