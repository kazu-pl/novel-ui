import { RadioProps as MuiRadioProps } from "@mui/material/Radio";
export interface RadioProps extends MuiRadioProps {
    error?: boolean;
}
declare const Radio: ({ name, error, sx, ...rest }: RadioProps) => JSX.Element;
export default Radio;
