import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import css from "styled-jsx/css";

import logo from "../../public/inline.png";

import { Icon } from "./icons";

const font = Space_Grotesk({
  subsets: ["latin-ext"],
});

export const theme = {
  colors: {
    background: "rgb(255,255,255)",
    text: "#010163",
    link: "rgb(226, 225, 241)",
    accent: "rgb(210, 205, 255)",
    warning: "rgb(255 156 47)",
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
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-display: swap;
    font-family: ${font.style.fontFamily};
    margin-block-start: 0;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: ${font.style.fontFamily};
    line-height: 1.4;
    font-size: 17px;
    color: ${theme.colors.text};
    background: linear-gradient(0deg, ${theme.colors.background} 0%, ${theme.colors.accent} 100%);
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

  header {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    padding: 4rem 2rem;
    min-height: 90vh;
    max-width: 65rem;
    margin: 0 auto;
  }

  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  article {
    padding: 2rem;
    background: ${theme.colors.text};
    color: ${theme.colors.background};
    border-radius: 0.25rem;
  }

  article.alternative {
    background: ${theme.colors.link};
    color: ${theme.colors.text};
  }

  article.form {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  article p {
    font-size: 0.98rem;
  }

  button {
    background: ${theme.colors.text};
    color: ${theme.colors.background};
    border-radius: 0.25rem;
    padding: 0.33rem 0.75rem;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    transition: all 0.2s ease;
    vertical-align: middle;
  }

  button:hover {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  footer {
    padding: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.85rem;
  }

  h5 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2rem;
  }

  ul {
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  hr {
    opacity: 0.5;
  }

  strong {
    font-weight: 500;
    margin-right: 0.25rem;
  }

  h3:last-child,
  h5:last-child,
  p:last-child {
    margin-bottom: 0;
  }

  .warning {
    background: ${theme.colors.warning};
    color: rgba(0, 0, 0, 0.85);
    padding: 1rem;
    border-radius: 0.25rem;
    margin-top: 2rem;
    display: inline-block;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 1.9rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    h5 {
      font-size: 1.1rem;
    }

    header {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding: 2rem 0.5rem 0 0.5rem;
    }

    .sign-in {
      display: none;
    }

    a.cta {
      display: block;
    }
  }
`;

export default function Provider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div>
      <header>
        <Link href="/">
          <Image alt={""} src={logo} width={75} />
        </Link>

        <nav>
          <Link href="/">Home</Link>

          <Link href="/contact">Contact</Link>
          <a className="sign-in" href="https://planare.dev/billing">
            Sign In
          </a>
          <a href="https://github.com/planare" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <Link href="/new-projects">
            <button type="button">New Project</button>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <small>
          <Icon.Flag />
          &copy; {new Date().getFullYear()} Planare LLC.{" "}
        </small>
        <small>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </small>
        <small>
          <Link href="/fulfillment-policy">Fulfillment Policy</Link>
        </small>
      </footer>
      <style global jsx>
        {global}
      </style>
    </div>
  );
}
