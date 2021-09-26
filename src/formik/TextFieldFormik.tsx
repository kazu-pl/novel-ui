import TextField, { TextFieldProps } from "../inputs/TextField";
import { useField } from "formik";

export type TextFieldFormikProps = Omit<
  TextFieldProps,
  "name" | "value" | "onBlur" | "onChange" | "error"
> & {
  name: string;
};

const TextFieldFormik = ({
  name,
  helperText,
  ...rest
}: TextFieldFormikProps) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      name={field.name}
      value={field.value}
      onBlur={field.onBlur}
      onChange={field.onChange}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      {...rest}
    />
  );
};

export default TextFieldFormik;
