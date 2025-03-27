import { styled } from "@/styles/stitches.config";
import { type CSS } from "@stitches/react";
import { ReactNode, type JSX } from "react";

interface CardProps {
  children: ReactNode;
  css?: CSS;
  variant?: "default" | "alternative";
}

const CardStyled = styled("div", {
  border: "0.1rem solid transparent",
  borderRadius: "$small",
  height: "100%",
  margin: "0 auto",
  maxWidth: "60rem",
  padding: "$normal",
  variants: {
    variant: {
      alternative: {
        background: "$overlay",
        borderColor: "$border",
        color: "$text",
      },
      default: {
        background: "$text",
        borderColor: "$text",
        color: "$background",
      },
    },
  },

  width: "100%",
});

export const Card = ({ children, css, variant = "default" }: CardProps): JSX.Element => {
  return (
    <CardStyled css={css} variant={variant}>
      {children}
    </CardStyled>
  );
};
