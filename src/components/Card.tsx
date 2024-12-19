import { type CSS } from "@stitches/react";
import { ReactNode, type JSX } from "react";

import { styled } from "@/styles/stitches.config";

interface CardProps {
  children: ReactNode;
  css?: CSS;
  variant?: "default" | "alternative" | "form";
}

const CardStyled = styled("div", {
  padding: "2rem",
  borderRadius: "$small",
  height: "100%",
  border: "0.1rem solid transparent",

  variants: {
    variant: {
      default: {
        background: "$text",
        color: "$background",
        borderColor: "$text",
      },
      alternative: {
        background: "$overlay",
        color: "$text",
        borderColor: "$border",
      },
      form: {
        background: "$background",
        color: "$text",
        borderColor: "$border",
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
