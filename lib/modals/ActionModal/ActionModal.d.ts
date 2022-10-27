/// <reference types="react" />
import { HeadlineTextColor, ModalProps } from "../Modal";
import { ButtonProps } from "../../../src/buttons/Button";
export interface ActionModalProps extends Pick<ModalProps, "maxWidthOnDesktop" | "widthOnDesktop"> {
    open: boolean;
    onClose: () => void;
    headlineText?: React.ReactNode;
    color?: HeadlineTextColor;
    children: ModalProps["children"];
    onActionBtnClick?: ButtonProps["onClick"];
    onActionBtnClickPromise?: () => Promise<any>;
    buttonsTextTransform?: ButtonProps["textTransform"];
    closeBtnText?: string;
    actionBtnText?: string;
}
declare const ActionModal: ({ open, onClose, headlineText, color, onActionBtnClick, onActionBtnClickPromise, children, buttonsTextTransform, closeBtnText, actionBtnText, ...rest }: ActionModalProps) => JSX.Element;
export default ActionModal;
