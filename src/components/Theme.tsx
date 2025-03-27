import { globalFont, globalStyles } from "@/styles/global";
import { styled } from "@/styles/stitches.config";
import { ReactNode, useEffect, useState, type JSX } from "react";

export const ThemeStyled = styled("div", {
  background: "linear-gradient(0deg, $background 0%, $darkest 100%)",
  color: "$text",
  minHeight: "100vh",
  position: "relative",
});

export function Theme({ children }: { children: ReactNode }): JSX.Element {
  const [mounted, setMounted] = useState(false);

  globalStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div />;
  }

  return <ThemeStyled style={globalFont.style}>{children}</ThemeStyled>;
}
