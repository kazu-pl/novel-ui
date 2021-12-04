/// <reference types="react" />
import { TextFieldProps } from "../inputs/TextField";
import { FieldInputProps } from "formik";
export declare type TextFieldFormikProps = Omit<TextFieldProps, "name" | "value" | "onBlur" | "onChange" | "error"> & {
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
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, formikChangeHandler: FieldInputProps<string>["onChange"]) => void;
};
declare const TextFieldFormik: ({ name, helperText, onChange, ...rest }: TextFieldFormikProps) => JSX.Element;
export default TextFieldFormik;
