import MuiRadio, { RadioProps as MuiRadioProps } from "@mui/material/Radio";

export interface RadioProps extends MuiRadioProps {
  error?: boolean;
}

const Radio = ({ name, error, sx, ...rest }: RadioProps) => {
  return (
    <MuiRadio
      sx={{
        color: error ? (theme) => theme.palette.error.main : undefined,
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Radio;
