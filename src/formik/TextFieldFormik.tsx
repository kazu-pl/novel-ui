import TextField, { TextFieldProps } from "../inputs/TextField";
import { FieldInputProps, useField } from "formik";

export type TextFieldFormikProps = Omit<
  TextFieldProps,
  "name" | "value" | "onBlur" | "onChange" | "error"
> & {
  name: string;
  /**
   * `onChange` prop may be used when you need to fetch some data on every input change. Usually you don't need that prop. If you don't use the prop, `field.onChange` from formik will be used. However if you use that prop then you will get `formik.onChange` function as 2nd argument of `onChange` method and you have to manually use it to update form field.
   *
   * Below is the implementation that shows how `onChange` events are handled in `TextFieldFormik`:
   * @example
   * `
   * const handleChange: TextFieldProps["onChange"] = (e) => {
   *  onChange && onChange(e, field.onChange);
   *  !onChange && field.onChange(e);
   * };
   *
   * return (
   *   <TextField
   *    onChange={handleChange}
   *    {...rest}
   *  />
   * `
   */
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    formikChangeHandler: FieldInputProps<string>["onChange"]
  ) => void;
};

const TextFieldFormik = ({
  name,
  helperText,
  onChange,
  ...rest
}: TextFieldFormikProps) => {
  const [field, meta] = useField(name);

  const handleChange: TextFieldProps["onChange"] = (e) => {
    onChange && onChange(e, field.onChange);
    !onChange && field.onChange(e);
  };

  return (
    <TextField
      name={field.name}
      value={field.value}
      onBlur={field.onBlur}
      onChange={handleChange}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      {...rest}
    />
  );
};

export default TextFieldFormik;
