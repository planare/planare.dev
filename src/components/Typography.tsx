import { styled, theme } from "@/styles/stitches.config";
import { type CSS } from "@stitches/react";
import { ReactNode, type JSX } from "react";

interface TypographyProps {
  bottom?: keyof typeof theme.space;
  children: ReactNode;
  css?: CSS;
  accent?: boolean;
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
  margin: 0,
  padding: 0,
  variants: {
    accent: {
      false: {},
      true: { color: "$accent" },
    },
    inline: {
      false: {},
      true: { display: "inline-block", marginBottom: "0 !important" },
    },
    variant: {
      code: { fontFamily: "monospace" },
      h1: {
        "&:last-child": { marginBottom: 0 },
        fontSize: "2.9rem",
        fontWeight: 700,
        lineHeight: "1.2",
        marginBottom: "$normal",
        phone: {
          fontSize: "2.2rem",
        },
      },
      h2: {
        "&:last-child": { marginBottom: 0 },
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: "1.3",
        marginBottom: "$small",
        phone: {
          fontSize: "2rem",
        },
      },
      h3: {
        "&:last-child": { marginBottom: 0 },
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "1.35",
        marginBottom: "$small",
        phone: {
          fontSize: "1.7rem",
        },
      },
      h4: {
        "&:last-child": { marginBottom: 0 },
        fontSize: "1.7rem",
        fontWeight: 600,
        lineHeight: "1.4",
        marginBottom: "$small",
        phone: {
          fontSize: "1.5rem",
        },
      },
      h5: {
        "&:last-child": { marginBottom: 0 },
        fontSize: "1.3rem",
        fontWeight: 500,
        lineHeight: "1.5",
        marginBottom: "$small",
      },
      h6: {
        "&:last-child": { marginBottom: 0 },
        fontSize: "1.2rem",
        fontWeight: 500,
        lineHeight: "1.6",
        marginBottom: "$small",
      },
      li: { marginBottom: "0.5rem" },
      ol: { paddingLeft: "20px" },
      p: {
        "&:last-child": { marginBottom: 0 },
        fontSize: "1.1rem",
        lineHeight: "1.6",
        marginBottom: "$small",
        maxWidth: "60rem",
      },
      small: {
        "&:last-child": { marginBottom: 0 },
        display: "block",
        fontSize: "0.95rem",
        lineHeight: "1.5",
        marginBottom: "$small",
      },
      span: {},
      ul: { listStylePosition: "inside", listStyleType: "disc", paddingLeft: "20px" },
    },
  },
});

export const Typography = ({
  accent,
  bottom,
  children,
  css,
  inline,
  top,
  variant = "p",
}: TypographyProps): JSX.Element => {
  return (
    <TypographyStyled
      accent={accent ? "true" : "false"}
      as={variant}
      css={{
        marginBottom: bottom ? `$${bottom}` : undefined,
        marginRight: inline ? `$${inline}` : undefined,
        marginTop: top ? `$${top}` : undefined,
        ...css,
      }}
      inline={inline ? "true" : "false"}
      variant={variant}>
      {children}
    </TypographyStyled>
  );
};
