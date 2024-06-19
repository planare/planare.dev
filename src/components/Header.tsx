import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo-2024.png";

import { Block } from "./Block";
import { Button } from "./Button";
import { Typography } from "./Typography";

import { styled } from "@/styles/stitches.config";

const HeaderStyled = styled("header", {
  padding: "$small $normal 0 $normal",
  display: "flex",

  margin: "0 auto",

  justifyContent: "space-between",
  alignItems: "center",

  ".logo": {
    background: "$background",
    border: "2px solid $background",
    padding: "0.25rem 0.5rem",
    borderRadius: "0.50rem",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      background: "rgba(255,255,255, 0.85)",
      borderColor: "$text",
    },
  },
});

export function Header(): JSX.Element {
  return (
    <HeaderStyled>
      <Block className="logo">
        <Link href="/">
          <Image alt="Logo" quality={100} src={logo} width={175} />
        </Link>
      </Block>

      <Block flexAlign="center">
        <Link href="/contact">
          <Typography inline="small" variant="p">
            Contact
          </Typography>
        </Link>
        <a href="https://planare.dev/billing">
          <Typography inline="small" variant="p">
            Sign In
          </Typography>
        </a>

        <Link href="/new-projects">
          <Button type="button">✹ New Project</Button>
        </Link>
      </Block>
    </HeaderStyled>
  );
}
