import { CSS } from "@stitches/react";
import { ReactNode } from "react";

import { styled, theme } from "@/styles/stitches.config"; // Ensure this is correctly imported

interface BlockProps {
  align?: "left" | "center" | "right" | "justify";
  bottom?: keyof typeof theme.space;
  children?: ReactNode;
  className?: string;
  css?: CSS;
  flexAlign?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  top?: keyof typeof theme.space;
}

const BlockStyled = styled("div", {
  position: "relative",
  // Default styles can be defined here if needed
});

export const Block = ({
  children,
  css,
  top,
  bottom,
  align,
  flexAlign,
  justify,
  className,
}: BlockProps): JSX.Element => {
  return (
    <BlockStyled
      className={className}
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
