/// <reference types="react" />
import { TextFieldProps } from "../inputs/TextField";
export declare type TextFieldFormikProps = Omit<TextFieldProps, "name" | "value" | "onBlur" | "onChange" | "error"> & {
    name: string;
    /**
     * `onChange` prop may be used when you need to fetch some data on every input change. formik onChange handler `field.onChange` is applied so you don't need to additionaly set the value
     *
     * Below is the implementation that shows how `onChange` events are handled in `TextFieldFormik`:
     * @example
     * `
     * const handleChange: TextFieldProps["onChange"] = (e) => {
     *  onChange && onChange(e)
     *  field.onChange(e);
     * };
     *
     * return (
     *   <TextField
     *    onChange={handleChange}
     *    {...rest}
     *  />
     * `
     */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};
declare const TextFieldFormik: ({ name, helperText, onChange, ...rest }: TextFieldFormikProps) => JSX.Element;
export default TextFieldFormik;
