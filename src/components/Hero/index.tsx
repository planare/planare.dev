/* eslint-disable @next/next/no-img-element */
"use client";

import { ShadowInnerIcon } from "@radix-ui/react-icons";
import { JSX } from "react";

import styles from "./Hero.module.scss";

import { Card } from "@/ui/Card";
import { Flex } from "@/ui/Flex";

const caseStudies = [
  {
    title: "Brand narrative workshop",
    description: "Customized workshop for launching brand, exploring new directions",
    category: "Featured Work",
    tags: ["Figma", "Webflow", "Framer", "Design System"],
    link: "/case-studies/brand-workshop",
    preview: "/images/case-studies/brand-preview.jpg"
  },
  {
    title: "Mid-term development",
    description: "Strategic development backing for deep, part-time engagement",
    category: "Latest Project",
    tags: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    link: "/case-studies/mid-term",
    preview: "/images/case-studies/dev-preview.jpg"
  }
];

export function Hero(): JSX.Element {
  return (
    <Flex as="section" className={styles.wrapper} width="full-width">
        <Flex className={styles.content} width="container">
          <h1>Helpful resources to get you up and running</h1>
          <p className={styles.subtitle}>
            with the software suite built for private markets
          </p>
        </Flex>
      
      <Flex className={styles.grid} width="container">
        {caseStudies.map((study) => (
            <Card key={study.title} className={styles.card} href={study.link}> 
              <Card.Content>
                <span className={styles.category}>{study.category}</span>
                <h3>{study.title}</h3>
              </Card.Content>
            </Card>
        ))}
      </Flex>
    </Flex>
  );
} 