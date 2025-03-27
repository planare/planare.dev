import { styled } from "@/styles/stitches.config";
import { ReactNode, type JSX } from "react";

interface MainProps {
  children: ReactNode;
}

const MainStyled = styled("div", {
  margin: "0 auto",
  minHeight: "90vh",
  padding: "0 $normal",
});

export const Main = ({ children }: MainProps): JSX.Element => {
  return <MainStyled>{children}</MainStyled>;
};
