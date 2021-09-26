/// <reference types="react" />
import { CheckboxProps as MuiCheckboxProps } from "../../src/inputs/Checkbox";
import { FormControlLabelProps } from "@mui/material/FormControlLabel";
export interface CheckboxFormikProps extends Omit<MuiCheckboxProps, "name" | "onChange" | "onBlur" | "color" | "sx" | "checked" | "error"> {
    name: string;
    label?: React.ReactNode;
    /**
     * @remarks Value prop is passed if you want to use Checkbox to check multiple options
     */
    value?: string;
    labelPlacement?: FormControlLabelProps["labelPlacement"];
}
declare const CheckboxFormik: ({ label, labelPlacement, name, value, ...rest }: CheckboxFormikProps) => JSX.Element;
export default CheckboxFormik;
