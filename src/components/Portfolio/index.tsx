/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import { JSX } from "react";

import "keen-slider/keen-slider.min.css";
import styles from "./Portfolio.module.scss";
import { Flex } from "@/ui/Flex";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    year: "2024",
    image: "/images/portfolio/ecommerce.jpg"
  },
  {
    title: "SaaS Dashboard",
    year: "2023",
    image: "/images/portfolio/dashboard.jpg"
  },
  {
    title: "Mobile App",
    year: "2023",
    image: "/images/portfolio/mobile.jpg"
  },
  {
    title: "Brand Identity",
    year: "2023",
    image: "/images/portfolio/brand.jpg"
  },
  {
    title: "Web Platform",
    year: "2022",
    image: "/images/portfolio/platform.jpg"
  },
  {
    title: "Digital Product",
    year: "2022",
    image: "/images/portfolio/product.jpg"
  },
  {
    title: "Marketing Site",
    year: "2022",
    image: "/images/portfolio/marketing.jpg"
  },
  {
    title: "Design System",
    year: "2021",
    image: "/images/portfolio/design.jpg"
  }
];

export function Portfolio(): JSX.Element {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 20,
    },
    loop: true,
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 4, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
  });

  return (
    <Flex as="section" width="container" className={styles.wrapper} top="8">

        <div ref={sliderRef} className="keen-slider">
          {portfolioItems.map((item, index) => (
            <div className={styles.item} key={item.title}>
              <img alt={item.title} src={item.image} />
              <div className={styles.caption}>
                <h3>{item.title}</h3>
                  <span>{item.year}</span>
                </div>
              </div>
          ))}
        </div>
    </Flex>
  );
} 