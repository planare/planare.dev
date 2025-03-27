"use client";

import { BookmarkIcon, PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { JSX } from "react";

import styles from "./Header.module.scss";

import { Button } from "@/ui/Button";
import { Dropdown } from "@/ui/Dropdown";
import { Flex } from "@/ui/Flex";

const recentWorks = [
  {
    icon: <PersonIcon />,
    title: "Customers",
    description: "Teams using our platform",
    href: "/customers"
  },
  {
    icon: <ReaderIcon />,
    title: "Blog",
    description: "News and updates",
    href: "/blog"
  },
  {
    icon: <BookmarkIcon />,
    title: "Guides",
    description: "Best practices",
    href: "/guides"
  }
];

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Flex align="center" className={styles.content} justify="between">
        <Flex align="center" gap="4">
          <Link className={styles.logo} href="/">
            Your Logo
          </Link>
          
          <nav className={styles.nav}>
            <Dropdown items={recentWorks}>
              <Button size="1" variant="ghost">Recent Work</Button>
            </Dropdown>
            <Link href="/enterprise">
              <Button size="1" variant="ghost">Enterprise</Button> 
            </Link>
            <Link href="/pricing">
              <Button size="1" variant="ghost">Pricing</Button>
            </Link>
            <Link href="/careers">
              <Button size="1" variant="ghost">Careers</Button>
            </Link>
          </nav>
        </Flex>

        <Flex align="center" gap="3">
          <Link href="/signup">
            <Button>Get started</Button>
          </Link>
        </Flex>
      </Flex>
    </header>
  );
} 