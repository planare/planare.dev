import { styled, theme } from "@/styles/stitches.config";
import { type CSS } from "@stitches/react";
import { ReactNode, type JSX } from "react";

interface BadgeProps {
  children: ReactNode;
  css?: CSS;
  inline?: keyof typeof theme.space;
  variant?: "default" | "alternative";
}

const BadgeStyled = styled("span", {
  border: "0.1rem solid $border",
  borderRadius: "$small",
  color: "$text",
  display: "inline-flex",
  fontSize: "0.85rem",
  padding: "0.25rem 0.5rem",

  variants: {
    variant: {
      alternative: {
        backgroundColor: "$accent",
        borderColor: "$accent",
      },
      default: {
        backgroundColor: "transparent",
      },
    },
  },
});

export const Badge = ({ children, css, inline, variant = "default" }: BadgeProps): JSX.Element => {
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
