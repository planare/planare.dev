import { Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import css from "styled-jsx/css";

import { Icon } from "./icons";

const font = Space_Grotesk({
  subsets: ["latin-ext"],
});

export const theme = {
  colors: {
    background: "rgb(0,0,0)",
    border: "rgba(0, 0, 90, 0.33)",
    text: "rgb(255,255,255)",
    link: "rgb(200,200,200)",
  },
  spacing: {
    large: "4rem",
    largest: "8rem",
    normal: "2rem",
    small: "1rem",
    smallest: "0.5rem",
  },
};

export const global = css.global`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${font.style.fontFamily};
    line-height: 1.4;
    font-size: 17px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

a,
a:visited,
a:active {
  color: inherit;
  transition: all 0.2s ease;
  text-decoration: none;
}
a:hover {
  font-weight: 600;
  letter-spacing: -0.0025rem;
}

  img {
    max-width: 100%;
    display: block;
  }

  main {
    padding: 2rem;
    min-height: 100vh;
    max-width: 50rem;
    margin: 0 auto;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  img {
    object-fit: fit !important;
    object-position: center;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${theme.spacing.small};
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    body {
      font-size: 14.5px;
    }

    main {
      padding: 1rem;
      display: block;
    }

    a.cta {
      display: block;
    }
    
    footer {
      position: static;
      padding: 0;
      margin-top: ${theme.spacing.large};
      display: block;
  }
`;

export default function Provider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <main>
      {children}
      <footer>
        <small>
          <Icon.Flag />
          &copy; {new Date().getFullYear()} Planare LLC.{" "}
        </small>
        <small>
          <a href="https://planare.dev/billing">Manage your billing.</a>
        </small>
      </footer>
      <style global jsx>
        {global}
      </style>
    </main>
  );
}
