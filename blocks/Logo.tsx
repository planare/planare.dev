import Image from "next/image";

import { Div } from "../components/Div";
import { showDarkScheme, showLightScheme } from "../components/Utils";
import logoInverse from "../public/inline-inverse.png";
import logo from "../public/inline.png";

export const Logo = (): JSX.Element => {
  return (
    <Div
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 100,
      }}>
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
    </Div>
  );
};
