import { ReactNode, type JSX } from "react";

import { styled } from "@/styles/stitches.config";

interface MainProps {
  children: ReactNode;
}

const MainStyled = styled("div", {
  padding: "0 $normal",
  minHeight: "90vh",
  margin: "0 auto",
});

export const Main = ({ children }: MainProps): JSX.Element => {
  return <MainStyled>{children}</MainStyled>;
};
