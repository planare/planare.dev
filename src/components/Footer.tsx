import Link from "next/link";

import { Block } from "./Block";
import { Typography } from "./Typography";

import { styled } from "@/styles/stitches.config"; // Adjust the import path as necessary

const FooterStyled = styled("footer", {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  background: "$accent", // Assuming you have defined 'accent' in your theme
  color: "$text", // Assuming you have defined 'text' in your theme
  fontSize: "0.9rem",
  fontWeight: 500,
  marginTop: "4rem",
  a: {
    color: "$text", // Assuming you have defined 'text' in your theme
  },
});

export const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <Block align="center" top="normal">
        <Typography css={{ opacity: 0.5 }} variant="small">
          Typeface in use is Space Grotesk by{" "}
          <a href="https://floriankarsten.com/">Florian Karsten</a>. Hosted on{" "}
          <a href="https://vercel.com/">Vercel</a>.
        </Typography>
      </Block>
      <Typography css={{ fontWeight: 500 }} variant="small">
        {new Date().getFullYear()} Planare LLC, All Rights Reserved.
      </Typography>
      <Typography variant="small">
        <Link href="/privacy-policy">Privacy Policy</Link>
      </Typography>
      <Typography variant="small">
        <Link href="/fulfillment-policy">Working with Planare</Link>
      </Typography>
    </FooterStyled>
  );
};
