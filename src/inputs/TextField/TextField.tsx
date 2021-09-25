import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import { StyledEmptyMenuItem } from "./TextField.styled";

export type TextfieldProps = MuiTextFieldProps & {
  clearable?: boolean;
  clearItemText?: string;
};

const TextField = ({
  select,
  children,
  clearable,
  clearItemText = "Clear input",
  ...rest
}: TextfieldProps) => {
  return (
    <MuiTextField
      select={select}
      children={
        select && clearable
          ? [
              <StyledEmptyMenuItem value="">
                <em>{clearItemText}</em>
              </StyledEmptyMenuItem>,
              children,
            ]
          : children
      }
      {...rest}
    />
  );
};

export default TextField;
