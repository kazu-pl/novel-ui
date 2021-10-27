/// <reference types="react" />
import { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { RadioProps } from "../inputs/Radio";
export interface RadioFormikProps extends Omit<RadioProps, "name" | "sx" | "value" | "checked" | "onChange" | "onBlur" | "error"> {
    name: string;
    value: string;
    label?: React.ReactNode;
    labelPlacement?: FormControlLabelProps["labelPlacement"];
}
declare const RadioFormik: ({ label, labelPlacement, name, value, ...rest }: RadioFormikProps) => JSX.Element;
export default RadioFormik;
