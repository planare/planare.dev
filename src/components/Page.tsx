import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import logo from "../../public/logo-2024.png";

import { font, theme } from "./styles";

export default function Page({ children }: { children: ReactNode }): JSX.Element {
  const router = useRouter();
  const hideCTA = router.pathname === "/new-projects";

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
            <button className={hideCTA ? "hidden" : "cta"} type="button">
              ✹ New Project
            </button>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <div style={{ marginTop: theme.spacing.normal, textAlign: "center" }}>
        <small style={{ opacity: 0.5 }}>
          Typeface in use is Space Grotesk by{" "}
          <a href="https://floriankarsten.com/">Florian Karsten</a>. Hosted on{" "}
          <a href="https://vercel.com/">Vercel</a>.
        </small>
      </div>
      <footer>
        <small style={{ fontWeight: 500 }}>
          {new Date().getFullYear()} Planare LLC, All Rights Reserved.
        </small>
        <small>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </small>
        <small>
          <Link href="/working-with-us">Working with Planare</Link>
        </small>
      </footer>
    </div>
  );
}
