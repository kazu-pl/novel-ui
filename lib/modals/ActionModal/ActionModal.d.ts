/// <reference types="react" />
import { HeadlineTextColor, ModalProps } from "../Modal";
import { ButtonProps } from "../../../src/buttons/Button";
export interface ActionModalProps {
    open: boolean;
    onClose: () => void;
    headlineText?: React.ReactNode;
    headlineTextColor?: HeadlineTextColor;
    children: ModalProps["children"];
    onActionBtnClick?: ButtonProps["onClick"];
    onActionBtnClickPromise?: ButtonProps["onClickPromise"];
    buttonsTextTransform?: ButtonProps["textTransform"];
    closeBtnText?: string;
    actionBtnText?: string;
}
declare const ActionModal: ({ open, onClose, headlineText, headlineTextColor, onActionBtnClick, onActionBtnClickPromise, children, buttonsTextTransform, closeBtnText, actionBtnText, ...rest }: ActionModalProps) => JSX.Element;
export default ActionModal;
