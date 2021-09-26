import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material/Autocomplete";
import TextField, { TextfieldProps } from "../TextField";

export interface Option {
  id: string | number;
  label: string;
}

export interface AutocompleteProps<T>
  extends Omit<
    MuiAutocompleteProps<T, undefined, undefined, undefined>,
    "renderInput" | "multiple" | "disableClearable" | "freeSolo"
  > {
  inputLabel?: string;
  error?: boolean;
  helperText?: string;
  inputAutoComplete?: string;
  TextFieldInputProps?: TextfieldProps["InputProps"];
}

const Autocomplete = <T extends Option>({
  inputLabel,
  error,
  helperText,
  inputAutoComplete = "new-password",
  autoHighlight = true,
  noOptionsText = "No matching elements",
  TextFieldInputProps,
  ...rest
}: AutocompleteProps<T>) => {
  return (
    <MuiAutocomplete
      autoHighlight={autoHighlight}
      noOptionsText={noOptionsText}
      renderInput={({ InputProps, ...rest }) => (
        <TextField
          {...rest}
          label={inputLabel}
          error={error}
          helperText={helperText}
          inputProps={{
            ...rest.inputProps,
            autoComplete: inputAutoComplete,
          }}
          InputProps={{
            ...InputProps,
            ...TextFieldInputProps,
          }}
        />
      )}
      {...rest}
    />
  );
};

export default Autocomplete;
