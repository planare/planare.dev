import { ReactNode, useEffect, useState } from "react";

import { globalFont, globalStyles } from "@/styles/global";
import { styled } from "@/styles/stitches.config";

export const ThemeStyled = styled("div", {
  color: "$text",
  minHeight: "100vh",
  position: "relative",
  background: "linear-gradient(0deg, $background 0%, $accent 100%)",
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
