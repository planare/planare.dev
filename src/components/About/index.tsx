"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { JSX } from "react";

import styles from "./About.module.scss";

import { Button } from "@/ui/Button";

export function About(): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
        >
          <h2>About Us</h2>
          <p>
            We&apos;re a team of developers and designers passionate about building digital products that make a difference. 
            With years of experience in web development and product strategy, we help businesses turn their ideas into reality.
          </p>
          <p>
            Our approach combines technical expertise with strategic thinking. We don&apos;t just build features – 
            we create solutions that drive business growth and user engagement.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>50+</span>
              <small>Projects Delivered</small>
            </div>
            <div className={styles.stat}>
              <span>5+</span>
              <small>Years Experience</small>
            </div>
            <div className={styles.stat}>
              <span>100%</span>
              <small>Client Satisfaction</small>
            </div>
          </div>
          <Button 
            size="2" 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Work with us <ArrowRightIcon />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 