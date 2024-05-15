import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import logo from "../../public/logo-2024.png";

import { Icon } from "./icons";
import { font } from "./styles";

export default function Page({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={font.className}>
      <header>
        <div className="logo">
          <Link href="/">
            <Image alt={""} quality={90} src={logo} width={150} />
          </Link>
        </div>

        <nav>
          <Link href="/">Home</Link>

          <Link href="/contact">Contact</Link>
          <a href="https://github.com/planare" rel="noreferrer" target="_blank">
            Projects
          </a>
          <a href="https://planare.dev/billing">Sign In</a>

          <Link href="/new-projects">
            <button className="cta" type="button">
              ✹ New Project
            </button>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <Icon.Flag />
          &copy; {new Date().getFullYear()} Planare LLC
        </p>
        <small>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </small>
        <small>
          <Link href="/fulfillment-policy">Working with Planare</Link>
        </small>
      </footer>
    </div>
  );
}
