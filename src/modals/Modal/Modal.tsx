import MuiModal, { ModalProps as MuiModalProps } from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { StyledModalBody, StyledTitleWrapper } from "./Modal.styled";
import Box from "@mui/material/Box";

export type HeadlineTextColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | "black";

export interface ModalProps extends Omit<MuiModalProps, "children"> {
  headlineText?: React.ReactNode;
  headlineTextColor?: HeadlineTextColor;
  footerContent?: React.ReactNode;
  children: MuiModalProps["children"] | string;
  maxWidthOnDesktop?: number | string;
  widthOnDesktop?: number | string;
}

const Modal = ({
  open = false,
  onClose,
  children,
  headlineText,
  footerContent,
  headlineTextColor,
  maxWidthOnDesktop,
  widthOnDesktop,
  ...rest
}: ModalProps) => {
  return (
    <MuiModal open={open} onClose={onClose} {...rest}>
      <StyledModalBody
        maxWidthOnDesktop={maxWidthOnDesktop}
        widthOnDesktop={widthOnDesktop}
      >
        {headlineText && (
          <StyledTitleWrapper color={headlineTextColor}>
            <Typography
              variant="h6"
              color={headlineTextColor === "black" ? "textPrimary" : "inherit"}
            >
              {headlineText}
            </Typography>
          </StyledTitleWrapper>
        )}
        {children}
        {footerContent && (
          <Box display="flex" justifyContent="flex-end" mt={4}>
            {footerContent}
          </Box>
        )}
      </StyledModalBody>
    </MuiModal>
  );
};

export default Modal;
