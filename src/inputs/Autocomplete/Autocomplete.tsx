import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material/Autocomplete";
import TextField from "../TextField";

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
}

const Autocomplete = <T extends Option>({
  inputLabel,
  error,
  helperText,
  inputAutoComplete = "new-password",
  autoHighlight = true,
  noOptionsText = "No matcihng elements",
  ...rest
}: AutocompleteProps<T>) => {
  return (
    <MuiAutocomplete
      autoHighlight={autoHighlight}
      noOptionsText={noOptionsText}
      renderInput={(params) => (
        <TextField
          {...params}
          label={inputLabel}
          error={error}
          helperText={helperText}
          inputProps={{
            ...params.inputProps,
            autoComplete: inputAutoComplete,
          }}
        />
      )}
      {...rest}
    />
  );
};

export default Autocomplete;
