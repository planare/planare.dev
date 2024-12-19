import { type CSS } from "@stitches/react";
import { ReactNode, type JSX } from "react";

import { styled, theme } from "@/styles/stitches.config";

interface ButtonProps {
  children: ReactNode;
  css?: CSS;
  inline?: keyof typeof theme.space;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "minimal";
}

const ButtonStyled = styled("button", {
  borderRadius: "$small",
  padding: "0.33rem 0.75rem",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "all 0.2s ease",
  fontWeight: 600,
  fontFamily: "$primary",
  position: "relative",
  display: "inline-flex",
  border: "0.1rem solid transparent",

  variants: {
    variant: {
      minimal: {
        background: "$background",
        color: "$text",
        "&:hover": {
          background: "$text",
          color: "$background",
          borderColor: "$text",
        },
      },
      default: {
        background: "$text",
        color: "$background",
        "&:hover": {
          background: "$background",
          color: "$text",
          borderColor: "$text",
        },
      },
    },
  },
});

export const Button = ({
  children,
  css,
  inline,
  variant = "default",
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      css={{
        marginRight: inline ? `$${inline}` : undefined,
        ...css,
      }}
      type="button"
      variant={variant}>
      {children}
    </ButtonStyled>
  );
};
