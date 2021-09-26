import Autocomplete, {
  AutocompleteProps,
  Option,
} from "../inputs/Autocomplete";
import { useField } from "formik";
import { useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export interface AutocompleteAsyncFormikProps<T>
  extends Omit<
    AutocompleteProps<T>,
    | "value"
    | "onChange"
    | "getOptionLabel"
    | "isOptionEqualToValue"
    | "inputValue"
    | "onInputChange"
    | "TextFieldInputProps"
  > {
  name: string;
  inputLabel: string;
  needMoreSingsText?: string;
  singsNumberToStartFetching?: number;
  setOptionsOnInputChange: (values: T[]) => void;
  fetchOptionsOnInputChange: (query: string) => Promise<T[] | []>;
}

const AutocompleteAsyncFormik = <T extends Option>({
  name,
  helperText,
  noOptionsText,
  needMoreSingsText = "Type more characters",
  singsNumberToStartFetching = 3,
  setOptionsOnInputChange,
  fetchOptionsOnInputChange,
  options,
  ...rest
}: AutocompleteAsyncFormikProps<T>) => {
  const [field, meta, helpers] = useField(name);

  const autocompleteQuery = useRef("");

  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Autocomplete
      onOpen={() => {
        setIsDropdownOpen(true);
      }}
      onClose={() => {
        setIsDropdownOpen(false);
      }}
      options={options}
      onChange={(event, newValue) => {
        newValue ? helpers.setValue(newValue.id) : helpers.setValue("");
      }}
      onInputChange={async (event, value) => {
        autocompleteQuery.current = value;

        if (value && value.length >= singsNumberToStartFetching) {
          setIsLoading(true);
          const values = await fetchOptionsOnInputChange(value);
          console.log({ values });
          setOptionsOnInputChange(values);
          setIsLoading(false);
        } else {
          setOptionsOnInputChange([]);
        }
      }}
      loading={isLoading}
      noOptionsText={
        autocompleteQuery.current.length >= singsNumberToStartFetching
          ? noOptionsText
          : needMoreSingsText
      }
      getOptionLabel={(option) => option && option.label}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      helperText={(meta.touched && meta.error) || helperText}
      error={meta.touched && !!meta.error}
      TextFieldInputProps={{
        endAdornment: (
          <>
            {isDropdownOpen && isLoading ? (
              <CircularProgress color="inherit" size={20} />
            ) : null}
          </>
        ),
      }}
      {...rest}
    />
  );
};

export default AutocompleteAsyncFormik;
