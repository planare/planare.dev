import React, { type JSX } from "react";

import { Block } from "./Block";
import { Card } from "./Card";
import { Typography } from "./Typography";

import { styled } from "@/styles/stitches.config";

const services = [
  {
    title: "Websites",
    description:
      "From design and development to ongoing maintenance and hosting, we build websites that elevate your brand and drive results.",
    features: ["Design & Development", "Maintenance & Support", "Hosting & Management"],
  },
  {
    title: "Product",
    description:
      "We transform your product vision into reality. Our expertise spans everything from MVP development to product strategy.",
    features: ["Web Applications", "MVP Development", "Product Strategy"],
  },
  {
    title: "Consulting",
    description:
      "Make informed decisions for your digital projects. Our consulting services cover web technologies, UX/UI design, and comprehensive project management.",
    features: ["Web Technologies", "UX/UI Design", "Project Management"],
  },
];

const ServicesStyled = styled(Block, {
  width: "100%",
  overflow: "hidden",
});

const ServicesInnerStyled = styled(Block, {
  display: "grid",
  gap: "$normal",
  gridTemplateColumns: "repeat(3, 1fr)",
  phone: {
    display: "flex",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    gap: "15px",
  },
});

const ServiceCardStyled = styled("div", {
  phone: {
    flex: "0 0 calc(80vw - 15px)",
    scrollSnapAlign: "start",
    border: "1px solid $border",
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
