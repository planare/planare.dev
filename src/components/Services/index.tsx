"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

import styles from "./Services.module.scss";

import { Card } from "@/ui/Card";
import { Flex } from "@/ui/Flex";

const services = [
  {
    title: "Websites",
    description: "From design and development to ongoing maintenance and hosting, we build websites that elevate your brand and drive results.",
    features: [
      "Design & Development",
      "Maintenance & Support",
      "Hosting & Management"
    ]
  },
  {
    title: "Product",
    description: "We transform your product vision into reality. Our expertise spans everything from MVP development to product strategy.",
    features: [
      "Web Applications",
      "MVP Development",
      "Product Strategy"
    ]
  },
  {
    title: "Consulting",
    description: "Make informed decisions for your digital projects. Our consulting services cover web technologies, UX/UI design, and comprehensive project management.",
    features: [
      "Web Technologies",
      "UX/UI Design",
      "Project Management"
    ]
  }
];

export function Services(): JSX.Element {
  return (
    <Flex as="section" width="container" top="8">
      <div className={styles.grid}>
        {services.map((service) => (
          <Card key={service.title}>
            <Card.Content>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className={styles.features}>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
        ))}
      </div>
    </Flex>
  );
} 