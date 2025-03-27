import { styled, theme } from "@/styles/stitches.config";
import { type CSS } from "@stitches/react";
import { ReactNode, RefObject, type JSX } from "react";

interface BlockProps {
  align?: "left" | "center" | "right" | "justify";
  bottom?: keyof typeof theme.space;
  children?: ReactNode;
  className?: string;
  container?: boolean;
  css?: CSS;
  flexAlign?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  ref?: RefObject<HTMLDivElement | null>;
  top?: keyof typeof theme.space;
}

const BlockStyled = styled("div", {
  position: "relative",

  variants: {
    container: {
      true: {
        margin: "0 auto",
        maxWidth: "80rem",
      },
    },
  },
});

export const Block = ({
  align,
  bottom,
  children,
  className,
  container,
  css,
  flexAlign,
  justify,
  ref,
  top,
}: BlockProps): JSX.Element => {
  return (
    <BlockStyled
      ref={ref}
      className={className}
      container={container}
      css={{
        marginBottom: bottom ? `$${bottom}` : undefined,
        marginTop: top ? `$${top}` : undefined,
        textAlign: align,
        ...(flexAlign && { alignItems: flexAlign, display: "flex" }),
        ...(justify && { justifyContent: justify }),

        ...css,
      }}>
      {children}
    </BlockStyled>
  );
};
