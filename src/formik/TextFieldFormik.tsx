import MuiTextField, {
  TextfieldProps as MuiTextFieldProps,
} from "../inputs/TextField";
import { useField } from "formik";

export type TextfieldProps = Omit<
  MuiTextFieldProps,
  "name" | "value" | "onBlur" | "onChange"
> & {
  name: string;
};

const TextFieldFormik = ({
  name,
  helperText,
  clearable,
  ...rest
}: TextfieldProps) => {
  const [field, meta] = useField(name);

  return (
    <MuiTextField
      name={field.name}
      value={field.value}
      onBlur={field.onBlur}
      onChange={field.onChange}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      clearable={clearable || !!field.value}
      {...rest}
    />
  );
};

export default TextFieldFormik;
