/// <reference types="react" />
import { ModalProps as MuiModalProps } from "@mui/material/Modal";
export declare type HeadlineTextColor = "primary" | "secondary" | "error" | "info" | "success" | "warning" | "black";
export interface ModalProps extends MuiModalProps {
    headlineText?: React.ReactNode;
    headlineTextColor?: HeadlineTextColor;
    footerContent?: React.ReactNode;
}
declare const Modal: ({ open, onClose, children, headlineText, footerContent, headlineTextColor, ...rest }: ModalProps) => JSX.Element;
export default Modal;
