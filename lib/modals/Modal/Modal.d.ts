/// <reference types="react" />
import { ModalProps as MuiModalProps } from "@mui/material/Modal";
export declare type HeadlineTextColor = "primary" | "secondary" | "error" | "info" | "success" | "warning" | "black";
export interface ModalProps extends Omit<MuiModalProps, "children"> {
    headlineText?: React.ReactNode;
    headlineTextColor?: HeadlineTextColor;
    footerContent?: React.ReactNode;
    children: MuiModalProps["children"] | string;
    maxWidthOnDesktop?: number | string;
    widthOnDesktop?: number | string;
}
declare const Modal: ({ open, onClose, children, headlineText, footerContent, headlineTextColor, maxWidthOnDesktop, widthOnDesktop, ...rest }: ModalProps) => JSX.Element;
export default Modal;
