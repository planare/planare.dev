import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo-2024-inverse.png";

import { Block } from "./Block";
import { Typography } from "./Typography";

import { styled } from "@/styles/stitches.config";

const FooterStyled = styled("footer", {
  padding: "$normal",
  background: "#05052b",
  color: "$background",
  fontSize: "0.9rem",
  display: "flex",
  flexDirection: "row",
  gap: "$small",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  phone: {
    padding: "$normal",
    flexDirection: "column",
    gap: "$normal",
    justifyContent: "center",
    alignItems: "center",

    img: {
      margin: "0 auto",
    },
  },
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
