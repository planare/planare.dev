"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { JSX } from "react";

import styles from "./CallToAction.module.scss";

import { Button } from "@/ui/Button";
import { Flex } from "@/ui/Flex";

export function CallToAction(): JSX.Element {
  return (
    <Flex as="section" width="full-width" className={styles.wrapper}>
      <Flex width="container">
          <h2>Ready to build something great?</h2>
          <p>Let&apos;s turn your idea into reality with the right tech stack and approach.</p>
          <Button 
            size="3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a project <ArrowRightIcon />
          </Button>
      </Flex>
    </Flex>
  );
} 