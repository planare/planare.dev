import { CSS } from "@stitches/react";
import { ReactNode } from "react";

import { styled } from "@/styles/stitches.config"; // Adjust the import path as necessary

interface CardProps {
  children: ReactNode;
  css?: CSS;
  variant?: "default" | "alternative" | "form";
}

const CardStyled = styled("article", {
  // Base styles
  padding: "2rem",
  borderRadius: "0.25rem",

  // Variants
  variants: {
    variant: {
      default: {
        background: "$text",
        color: "$background",
      },
      alternative: {
        background: "$link",
        color: "$text",
      },
      form: {
        background: "$background",
        color: "$text",
      },
    },
  },
});

export const Card = ({ children, variant = "default", css }: CardProps): JSX.Element => {
  return (
    <CardStyled css={css} variant={variant}>
      {children}
    </CardStyled>
  );
};
