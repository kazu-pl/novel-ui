import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { ForwardedRef, forwardRef, useState } from "react";
import { Link } from "react-router-dom";

import { StyledButton, StyledWrapper, CircularProgress } from "./Button.styled";

export type TextTransform =
  | "capitalize"
  | "lowercase"
  | "none"
  | "uppercase"
  | "inherit"
  | "initial"
  | "unset";

export interface ButtonAsLinksProps {
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: "noopener" | "noreferrer";
  download?: boolean;
  to?: string;
}

export interface ButtonProps extends MuiButtonProps, ButtonAsLinksProps {
  isLoading?: boolean;
  onClickPromise?: () => Promise<void>;
  textTransform?: TextTransform;
}

const Button = forwardRef(
  (
    {
      isLoading,
      fullWidth,
      disabled,
      color,
      size = "medium",
      onClick,
      onClickPromise,
      target,
      to,
      textTransform = "uppercase",
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const [isPromiseLoading, setIsPromiseLoading] = useState(false);

    const handleBtnClick: ButtonProps["onClick"] = async (e) => {
      if (onClick) {
        onClick(e);
      }

      if (onClickPromise) {
        setIsPromiseLoading(true);
        try {
          await onClickPromise();
          setIsPromiseLoading(false);
        } catch (err) {
          setIsPromiseLoading(false);
        }
      }
    };

    return (
      <StyledWrapper fullWidth={fullWidth}>
        <StyledButton
          fullWidth={fullWidth}
          disabled={isPromiseLoading || isLoading || disabled}
          color={color}
          size={size}
          ref={ref}
          target={target}
          onClick={handleBtnClick}
          component={to ? Link : undefined}
          to={to}
          $textTransform={textTransform}
          {...rest}
        />
        {(isPromiseLoading || isLoading) && (
          <CircularProgress
            color={color}
            size={size === "large" ? 20 : size === "medium" ? 18 : 16}
          />
        )}
      </StyledWrapper>
    );
  }
);

export default Button;
