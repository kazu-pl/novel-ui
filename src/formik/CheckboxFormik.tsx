import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from "../../src/inputs/Checkbox";

import { useField } from "formik";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

export interface CheckboxFormikProps
  extends Omit<
    MuiCheckboxProps,
    "name" | "onChange" | "onBlur" | "color" | "sx" | "checked" | "error"
  > {
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
const CheckboxFormik = ({
  label,
  labelPlacement = "end",
  name,
  value,
  ...rest
}: CheckboxFormikProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      sx={{
        "& .MuiFormControlLabel-label": {
          color:
            meta.touched && !!meta.error
              ? (theme) => theme.palette.error.main
              : undefined,
        },
      }}
      onBlur={field.onBlur}
      control={
        <MuiCheckbox
          name={field.name}
          checked={
            Array.isArray(field.value)
              ? field.value.includes(value)
              : field.value
          }
          onChange={
            Array.isArray(field.value)
              ? () => {
                  field.value.includes(value)
                    ? helpers.setValue(
                        field.value.filter((item: any) => item !== value)
                      )
                    : helpers.setValue([...field.value, value]);
                }
              : field.onChange
          }
          error={meta.touched && !!meta.error}
          value={value}
          {...rest}
        />
      }
    />
  );
};

export default CheckboxFormik;
