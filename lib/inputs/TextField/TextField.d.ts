/// <reference types="react" />
import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
export declare type TextFieldProps = MuiTextFieldProps & {
    clearable?: boolean;
    clearItemText?: string;
};
declare const TextField: ({ select, children, clearable, clearItemText, ...rest }: TextFieldProps) => JSX.Element;
export default TextField;
