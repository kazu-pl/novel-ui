/// <reference types="react" />
import { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";
export interface CheckboxProps extends MuiCheckboxProps {
    error?: boolean;
}
declare const Checkbox: ({ error, sx, ...rest }: CheckboxProps) => JSX.Element;
export default Checkbox;
