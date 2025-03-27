import { styled } from "@/styles/stitches.config";
import React, { type JSX } from "react";

import { Block } from "./Block";
import { Card } from "./Card";
import { Typography } from "./Typography";

const services = [
  {
    description:
      "Transform your online presence with custom websites that convert visitors into customers. We handle everything from concept to launch.",
    features: [
      "Strategic Design & Development",
      "Proactive Maintenance & Support",
      "Deployment & Website Hosting",
      "Shopify & eCommerce Solutions",
    ],
    title: "Websites",
  },
  {
    description:
      "We bring your digital product ideas to life through thoughtful development and strategic planning that creates genuine user value.",
    features: [
      "Custom Web Applications",
      "MVP Development & Testing",
      "Data-Driven Strategy",
      "User Experience Optimization",
    ],
    title: "Product",
  },
  {
    description:
      "Navigate the digital landscape with confidence. Our expert consulting helps you make decisions that drive growth and efficiency.",
    features: [
      "Modern Technology Selection",
      "User-Centered Design Guidance",
      "End-to-End Project Management",
      "Performance & Analytics Auditing",
    ],
    title: "Consulting",
  },
];

const ServicesStyled = styled(Block, {
  overflow: "hidden",
  width: "100%",
});

const ServicesInnerStyled = styled(Block, {
  display: "grid",
  gap: "$normal",
  gridTemplateColumns: "repeat(3, 1fr)",
  phone: {
    display: "flex",
    gap: "15px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
  },
});

const ServiceCardStyled = styled("div", {
  phone: {
    border: "1px solid $border",
    flex: "0 0 calc(80vw - 15px)",
    scrollSnapAlign: "start",
  },
});

export function Services(): JSX.Element {
  return (
    <ServicesStyled container>
      <Typography variant="p">&mdash; Our Services</Typography>
      <ServicesInnerStyled top="normal">
        {services.map((service, index) => (
          <ServiceCardStyled key={index}>
            <Card>
              <Typography bottom="small" variant="h4">
                {service.title}
              </Typography>
              <Typography bottom="normal" variant="small">
                {service.description}
              </Typography>
              {service.features.map((feature, featureIndex) => (
                <Typography key={featureIndex} bottom="smallest" variant="p">
                  <Typography inline="small" variant="span">
                    ▧
                  </Typography>
                  {feature}
                </Typography>
              ))}
            </Card>
          </ServiceCardStyled>
        ))}
      </ServicesInnerStyled>
    </ServicesStyled>
  );
}
