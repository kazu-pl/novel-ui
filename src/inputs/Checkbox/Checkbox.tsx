import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material/Checkbox";

export interface CheckboxProps extends MuiCheckboxProps {
  error?: boolean;
}

const Checkbox = ({ error, sx, ...rest }: CheckboxProps) => {
  return (
    <MuiCheckbox
      sx={{
        color: error ? (theme) => theme.palette.error.main : undefined,
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Checkbox;
