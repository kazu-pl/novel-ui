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
/**
 * This component can be used to allow user to select couple of values (or even to not select anything at all) from a set of some values.
 *
 * It also can be used as a button with some agreement and user can select it (if they agree) or deselect (if they disagree - radio would not be the best choice for that purpose because radio can't be and shouldn't be unselected).
 */
declare const CheckboxFormik: ({ label, labelPlacement, name, value, ...rest }: CheckboxFormikProps) => JSX.Element;
export default CheckboxFormik;
