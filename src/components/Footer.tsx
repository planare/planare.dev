import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo-2024-inverse.png";

import { Block } from "./Block";
import { Typography } from "./Typography";

import { styled } from "@/styles/stitches.config"; // Adjust the import path as necessary

const FooterStyled = styled("footer", {
  padding: "$normal",
  background: "#05052b",
  color: "$background",
  fontSize: "0.9rem",
  marginTop: "4rem",
});

export const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <Block className="logo">
        <Link href="/">
          <Image alt="Logo" quality={100} src={logo} width={175} />
        </Link>
      </Block>
      <Block top="normal">
        <Typography variant="small">
          Typeface in use is{" "}
          <a href="https://floriankarsten.com/">Space Grotesk by Florian Karsten</a>
        </Typography>
      </Block>
      <Block top="normal">
        <Typography css={{ fontWeight: 500 }} inline="normal" variant="small">
          {new Date().getFullYear()} Planare LLC, All Rights Reserved.
        </Typography>
        <Typography inline="small" variant="small">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Typography>
        <Typography inline="small" variant="small">
          <Link href="/working-with-us">Working with Planare</Link>
        </Typography>
      </Block>
    </FooterStyled>
  );
};
