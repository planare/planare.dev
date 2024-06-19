import { CSS } from "@stitches/react";
import { ReactNode } from "react";

import { styled, theme } from "@/styles/stitches.config"; // Adjust the import path as necessary

interface ButtonProps {
  children: ReactNode;
  css?: CSS;
  inline?: keyof typeof theme.space;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "minimal";
}

const ButtonStyled = styled("button", {
  // Base styles
  borderRadius: "0.25rem",
  padding: "0.33rem 0.75rem",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "all 0.2s ease",
  fontWeight: 600,
  border: "none",
  fontFamily: "$primary",
  position: "relative",
  display: "inline-flex",

  // Variants
  variants: {
    variant: {
      minimal: {
        background: "$background",
        color: "$text",
        "&:hover": {
          background: "$text",
          color: "$background",
        },
      },
      default: {
        background: "$text",
        color: "$background",
        "&:hover": {
          background: "$background",
          color: "$text",
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