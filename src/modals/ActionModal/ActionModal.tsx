import BasicModal, { HeadlineTextColor, ModalProps } from "../Modal";
import Button, { ButtonProps } from "../../../src/buttons/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

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

const ActionModal = ({
  open,
  onClose,
  headlineText = "Caution",
  headlineTextColor = "primary",
  onActionBtnClick,
  onActionBtnClickPromise,
  children,
  buttonsTextTransform,
  closeBtnText = "Close",
  actionBtnText = "Confirm",
  ...rest
}: ActionModalProps) => {
  const [isActionInProgress, setIsActionInProgress] = useState(false);

  const handleActionBtnClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onActionBtnClick) {
      onActionBtnClick(event);
    }

    if (onActionBtnClickPromise) {
      setIsActionInProgress(true);
      try {
        await onActionBtnClickPromise();
        setIsActionInProgress(false);
      } catch (err) {
        setIsActionInProgress(false);
      }
    }
  };

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      headlineText={headlineText}
      headlineTextColor={headlineTextColor}
      footerContent={
        <>
          <Box mr={2}>
            <Button
              variant="text"
              color="inherit"
              onClick={onClose}
              textTransform={buttonsTextTransform}
            >
              {closeBtnText}
            </Button>
          </Box>
          <Button
            variant="contained"
            onClick={handleActionBtnClick}
            isLoading={isActionInProgress}
            textTransform={buttonsTextTransform}
          >
            {actionBtnText}
          </Button>
        </>
      }
      {...rest}
    >
      {children}
    </BasicModal>
  );
};

export default ActionModal;
