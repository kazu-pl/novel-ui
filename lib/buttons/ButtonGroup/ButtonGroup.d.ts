/// <reference types="react" />
import { ButtonProps } from "../Button";
export interface ButtonGroupProps {
    children: React.ReactNode;
    variant?: ButtonProps["variant"];
    color?: ButtonProps["color"];
}
declare const ButtonGroup: ({ variant, color, children }: ButtonGroupProps) => JSX.Element;
export default ButtonGroup;
