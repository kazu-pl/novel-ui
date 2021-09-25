import { useField } from "formik";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import MuiRadio, { RadioProps as MuiRadioProps } from "../inputs/Radio";

export interface RadioFormikProps
  extends Omit<
    MuiRadioProps,
    "name" | "sx" | "value" | "checked" | "onChange" | "onBlur" | "error"
  > {
  name: string;
  value: string;
  label?: React.ReactNode;
  labelPlacement?: FormControlLabelProps["labelPlacement"];
}

const RadioFormik = ({
  label,
  labelPlacement,
  name,
  value,
  ...rest
}: RadioFormikProps) => {
  const [field, meta, helpers] = useField(name);
  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      onBlur={field.onBlur}
      sx={{
        "& .MuiFormControlLabel-label": {
          color:
            meta.touched && !!meta.error
              ? (theme) => theme.palette.error.main
              : undefined,
        },
      }}
      control={
        <MuiRadio
          name={field.name}
          checked={field.value === value}
          value={value}
          onChange={() => helpers.setValue(value)}
          error={meta.touched && !!meta.error}
          {...rest}
        />
      }
    />
  );
};

export default RadioFormik;
