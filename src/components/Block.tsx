import { type CSS } from "@stitches/react";
import { ReactNode, RefObject, type JSX } from "react";

import { styled, theme } from "@/styles/stitches.config";

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
        maxWidth: "80rem",
        margin: "0 auto",
      },
    },
  },
});

export const Block = ({
  children,
  css,
  top,
  bottom,
  align,
  flexAlign,
  justify,
  container,
  ref,
  className,
}: BlockProps): JSX.Element => {
  return (
    <BlockStyled
      ref={ref}
      className={className}
      container={container}
      css={{
        marginTop: top ? `$${top}` : undefined,
        marginBottom: bottom ? `$${bottom}` : undefined,
        textAlign: align,
        ...(flexAlign && { display: "flex", alignItems: flexAlign }),
        ...(justify && { justifyContent: justify }),

        ...css,
      }}>
      {children}
    </BlockStyled>
  );
};
