import { ReactNode } from "react";

import { styled } from "@/styles/stitches.config"; // Adjust the import path as necessary

interface MainProps {
  children: ReactNode;
}

const MainStyled = styled("div", {
  padding: "4rem 2rem",
  minHeight: "90vh",
  maxWidth: "80rem",
  margin: "0 auto",
});

export const Main = ({ children }: MainProps): JSX.Element => {
  return <MainStyled>{children}</MainStyled>;
};
