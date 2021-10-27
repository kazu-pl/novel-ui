/// <reference types="react" />
import { ButtonProps } from "../buttons/Button";
export interface ColoredIconWrapperProps {
    color?: ButtonProps["color"] | "white" | "grey";
    /**
     * If opacity is specified it must be a number between 0 and 1
     */
    opacity?: number;
    children?: React.ReactNode;
}
declare const ColoredIconWrapper: import("react").ForwardRefExoticComponent<ColoredIconWrapperProps & import("react").RefAttributes<HTMLSpanElement>>;
export default ColoredIconWrapper;
