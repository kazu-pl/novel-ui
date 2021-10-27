import { StyledButtonGroup } from "./ButtonGroup.styled";
import { ButtonProps } from "../Button";

export interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
}

const ButtonGroup = ({ variant, color, children }: ButtonGroupProps) => {
  return (
    <StyledButtonGroup variant={variant} color={color}>
      {children}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
