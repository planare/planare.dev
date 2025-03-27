import Link from "next/link";
import { JSX } from "react";

import styles from "./not-found.module.scss";

import { Badge } from "@/ui/Badge";

export default function NotFound(): JSX.Element {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <Badge inline="2" variant="alternative">404</Badge>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link className={styles.link} href="/">
          Return Home
        </Link>
      </section>
    </main>
  );
} 