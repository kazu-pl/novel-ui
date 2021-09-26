/// <reference types="react" />
import { TextFieldProps } from "../inputs/TextField";
export declare type TextFieldFormikProps = Omit<TextFieldProps, "name" | "value" | "onBlur" | "onChange" | "error"> & {
    name: string;
};
declare const TextFieldFormik: ({ name, helperText, ...rest }: TextFieldFormikProps) => JSX.Element;
export default TextFieldFormik;
