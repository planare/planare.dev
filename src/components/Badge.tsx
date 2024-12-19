import { type CSS } from "@stitches/react";
import { ReactNode, type JSX } from "react";

import { styled, theme } from "@/styles/stitches.config";

interface BadgeProps {
  children: ReactNode;
  css?: CSS;
  inline?: keyof typeof theme.space;
  variant?: "default" | "alternative";
}

const BadgeStyled = styled("span", {
  color: "$text",
  border: "0.1rem solid $border",
  padding: "0.25rem 0.5rem",
  borderRadius: "$small",
  fontSize: "0.85rem",
  display: "inline-flex",

  variants: {
    variant: {
      default: {
        backgroundColor: "transparent",
      },
      alternative: {
        backgroundColor: "$accent",
        borderColor: "$accent",
      },
    },
  },
});

export const Badge = ({ children, inline, variant = "default", css }: BadgeProps): JSX.Element => {
  return (
    <BadgeStyled
      css={{
        marginRight: inline ? `$${inline}` : undefined,
        ...css,
      }}
      variant={variant}>
      {children}
    </BadgeStyled>
  );
};
