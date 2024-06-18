import { CSS } from "@stitches/react";
import { ReactNode } from "react";

import { styled } from "@/styles/stitches.config"; // Adjust the import path as necessary

interface BadgeProps {
  children: ReactNode;
  css?: CSS;
  variant?: "default" | "alternative";
}

const BadgeStyled = styled("span", {
  // Base styles
  color: "$text",
  border: "0.1rem solid $text",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  marginRight: "0.5rem",
  fontSize: "0.85rem",

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
    },
  },
});

export const Badge = ({ children, variant = "default", css }: BadgeProps): JSX.Element => {
  return (
    <BadgeStyled css={css} variant={variant}>
      {children}
    </BadgeStyled>
  );
};
