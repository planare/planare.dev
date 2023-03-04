import Image from "next/image";
import Link from "next/link";

import { Div } from "../components/Div";
import { theme } from "../components/Theme";
import { showDarkScheme, showLightScheme } from "../components/Utils";
import logoInverse from "../public/inline-inverse.png";
import logo from "../public/inline.png";

export const Logo = (): JSX.Element => {
  return (
    <Div
      style={{
        position: "fixed",
        top: theme.spacing.normal,
        left: theme.spacing.normal,
        padding: theme.spacing.small,
        zIndex: 100,
        textAlign: "left",
      }}>
      <Link href="/">
        <Image
          alt="Planare"
          className={showDarkScheme}
          height={544 * 0.04}
          sizes="(max-width: 600px) 100vw, 600px"
          src={logoInverse.src}
          width={1442 * 0.04}
        />

        <Image
          alt="Planare"
          className={showLightScheme}
          height={544 * 0.04}
          sizes="(max-width: 600px) 100vw, 600px"
          src={logo.src}
          width={1442 * 0.04}
        />
      </Link>
    </Div>
  );
};
