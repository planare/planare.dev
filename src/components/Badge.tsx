import { CSS } from "@stitches/react";
import { ReactNode } from "react";

import { styled, theme } from "@/styles/stitches.config"; // Adjust the import path as necessary

interface BadgeProps {
  children: ReactNode;
  css?: CSS;
  inline?: keyof typeof theme.space;
  variant?: "default" | "alternative" | "warning";
}

const BadgeStyled = styled("span", {
  // Base styles
  color: "$text",
  border: "0.1rem solid $text",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  fontSize: "0.85rem",
  display: "inline-flex",

  // Variants
  variants: {
    variant: {
      default: {
        backgroundColor: "transparent",
      },
      alternative: {
        backgroundColor: "$accent",
        borderColor: "$accent",
      },
      warning: {
        backgroundColor: "$warning",
        borderColor: "$warning",
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
