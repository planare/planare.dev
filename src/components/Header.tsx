import type { JSX } from "react";

import { styled } from "@/styles/stitches.config";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo-2024-inverse.png";
import { Block } from "./Block";
import { Button } from "./Button";
import { Typography } from "./Typography";

const HeaderStyled = styled("header", {
  ".logo": {
    "&:hover": {
      borderColor: "$border",
    },
    border: "2px solid transparent",
    borderRadius: "$normal",
    img: {
      borderRadius: "0",
    },

    padding: "0.25rem 0.5rem",

    transition: "all 0.2s ease-in-out",
  },
  a: {
    "&:hover": {
      opacity: 0.8,
      textDecoration: "underline",
    },
  },

  alignItems: "center",

  display: "flex",
  justifyContent: "space-between",

  margin: "0 auto",

  padding: "$small $normal 0 $normal",

  phone: {
    flexDirection: "column",
    gap: "$normal",
    padding: "$normal 0",
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
          <Button type="button" variant="minimal">
            {" "}
            <Typography inline="smallest" variant="span">
              ▧
            </Typography>
            New Project
          </Button>
        </Link>
      </Block>
    </HeaderStyled>
  );
}
