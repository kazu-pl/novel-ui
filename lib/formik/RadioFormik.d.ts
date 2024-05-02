/// <reference types="react" />
import { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { RadioProps } from "../inputs/Radio";
export interface RadioFormikProps extends Omit<RadioProps, "name" | "sx" | "value" | "checked" | "onChange" | "onBlur" | "error"> {
    name: string;
    value: string;
    label?: React.ReactNode;
    labelPlacement?: FormControlLabelProps["labelPlacement"];
}
/**
 * Radio buttons are used when user HAS TO select exactly one value among set with couple of values and it's not possible to not select anything. User has to select something and then can't unselect it later.
 */
declare const RadioFormik: ({ label, labelPlacement, name, value, ...rest }: RadioFormikProps) => JSX.Element;
export default RadioFormik;
