import { StyledInput } from "./TextField.styled";

export type Variant = "error" | "info" | "success";

export interface TextfieldProps {
  variant?: Variant;
  children: string;
}

const TextField = ({ variant, children }: TextfieldProps) => {
  return <StyledInput variant={variant}>{children}</StyledInput>;
};

export default TextField;
