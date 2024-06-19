import { CSS } from "@stitches/react";
import { ReactNode } from "react";

import { styled, theme } from "@/styles/stitches.config"; // Adjust the import path as necessary

interface TypographyProps {
  bottom?: keyof typeof theme.space;
  children: ReactNode;
  css?: CSS;
  inline?: keyof typeof theme.space;
  top?: keyof typeof theme.space;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "ul"
    | "ol"
    | "li"
    | "small"
    | "code"
    | "span";
}

const TypographyStyled = styled("span", {
  padding: 0,
  margin: 0,
  variants: {
    variant: {
      h1: {
        fontSize: "2.9rem",
        fontWeight: 700,
        lineHeight: "1.2",
        marginBottom: "$normal",
        "&:last-child": { marginBottom: 0 },
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: "1.3",
        marginBottom: "$small",
        "&:last-child": { marginBottom: 0 },
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "1.35",
        marginBottom: "$small",
        "&:last-child": { marginBottom: 0 },
      },
      h4: {
        fontSize: "1.7rem",
        fontWeight: 600,
        lineHeight: "1.4",
        marginBottom: "$smaller",
        "&:last-child": { marginBottom: 0 },
      },
      h5: {
        fontSize: "1.3rem",
        fontWeight: 500,
        lineHeight: "1.5",
        marginBottom: "$smaller",
        "&:last-child": { marginBottom: 0 },
      },
      h6: {
        fontSize: "1.2rem",
        fontWeight: 500,
        lineHeight: "1.6",
        marginBottom: "$smaller",
        "&:last-child": { marginBottom: 0 },
      },
      p: {
        fontSize: "1.1rem",
        lineHeight: "1.6",
        marginBottom: "$smaller",
        "&:last-child": { marginBottom: 0 },
      },
      ul: { paddingLeft: "20px" },
      ol: { paddingLeft: "20px" },
      li: { marginBottom: "0.5rem" },
      small: {
        fontSize: "0.9rem",
        opacity: 0.8,
        lineHeight: "1.5",
        marginBottom: "$small",
        "&:last-child": { marginBottom: 0 },
      },
      code: { fontFamily: "monospace" },
      span: {},
    },
    top: {
      large: { marginTop: "$large" },
      largest: { marginTop: "$largest" },
      normal: { marginTop: "$normal" },
      small: { marginTop: "$small" },
      smallest: { marginTop: "$smallest" },
    },
    bottom: {
      large: { marginBottom: "$large" },
      largest: { marginBottom: "$largest" },
      normal: { marginBottom: "$normal" },
      small: { marginBottom: "$small" },
      smallest: { marginBottom: "$smallest" },
    },
    inline: {
      true: { display: "inline-block", marginBottom: "0 !important" },
      false: { display: "block" },
    },
  },
});

export const Typography = ({
  children,
  top,
  bottom,
  inline,
  variant = "p",
  css,
}: TypographyProps): JSX.Element => {
  return (
    <TypographyStyled
      as={variant}
      css={{
        marginTop: top ? `$${top}` : undefined,
        marginBottom: bottom ? `$${bottom}` : undefined,
        marginRight: inline ? `$${inline}` : undefined,
        ...css,
      }}
      variant={variant}>
      {children}
    </TypographyStyled>
  );
};
