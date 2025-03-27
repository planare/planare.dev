import { styled, theme } from "@/styles/stitches.config";
import { type CSS } from "@stitches/react";
import { ReactNode, type JSX } from "react";

interface ButtonProps {
  children: ReactNode;
  css?: CSS;
  inline?: keyof typeof theme.space;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "minimal";
}

const ButtonStyled = styled("button", {
  border: "0.1rem solid transparent",
  borderRadius: "$small",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "$primary",
  fontSize: "1rem",
  fontWeight: 600,
  padding: "0.33rem 0.75rem",
  position: "relative",
  transition: "all 0.2s ease",

  variants: {
    variant: {
      default: {
        "&:hover": {
          background: "$accent",
          borderColor: "$border",
          color: "$background",
        },
        background: "$text",
        borderColor: "$border",
        color: "$background",
      },
      minimal: {
        "&:hover": {
          background: "$background",
          borderColor: "$border",
          color: "$text",
        },
        background: "$accent",
        borderColor: "$border",
        color: "$background",
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
