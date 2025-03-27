import type { JSX } from "react";

import { styled } from "@/styles/stitches.config";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo-2024.png";
import { Block } from "./Block";
import { Typography } from "./Typography";

const FooterStyled = styled("footer", {
  alignItems: "center",
  background: "$accent",
  borderTop: "0.1rem solid $border",
  color: "$background",
  display: "flex",
  flexDirection: "row",
  fontSize: "0.9rem",
  gap: "$small",
  img: {
    borderRadius: "0",
  },
  justifyContent: "space-between",
  padding: "$small $normal",

  phone: {
    alignItems: "center",
    flexDirection: "column",
    gap: "$normal",
    img: {
      margin: "0 auto",
    },
    justifyContent: "center",

    padding: "$normal",
  },

  width: "100%",
});

export const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <Block>
        <Link href="/">
          <Image alt="Logo" quality={100} src={logo} width={175} />
        </Link>
        <Typography top="small" variant="small">
          {new Date().getFullYear()} Planare LLC, All Rights Reserved.
        </Typography>
      </Block>
      <Block>
        <Block
          css={{
            phone: {
              flexDirection: "column",
              gap: "$small",
              textAlign: "center",
            },
          }}
          flexAlign="center"
          justify="center">
          <Typography inline="small" variant="small">
            <Link href="https://www.linkedin.com/company/planaredev/">
              <Typography inline="smallest" variant="span">
                ▧
              </Typography>
              LinkedIn
            </Link>
          </Typography>

          <Typography inline="small" variant="small">
            <Link href="/privacy-policy">
              <Typography inline="smallest" variant="span">
                ▧
              </Typography>
              Privacy Policy
            </Link>
          </Typography>
          <Typography inline="small" variant="small">
            <Link href="/working-with-us">
              <Typography inline="smallest" variant="span">
                ▧
              </Typography>
              Working with Planare
            </Link>
          </Typography>
        </Block>
      </Block>
    </FooterStyled>
  );
};
