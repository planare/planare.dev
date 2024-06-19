/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import workingOnCosmo from "../../public/working-on-cosmo.jpg";
import { Block } from "../components/Block";
import { Button } from "../components/Button";
import { Main } from "../components/Main";
import { Projects } from "../components/Projects";
import { Typography } from "../components/Typography";

import { Card } from "@/components/Card";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>Planare</title>
      </Head>
      <Block align="center" container top="normal">
        <Typography variant="h1">
          <Balancer>A web + product development shop.</Balancer>
        </Typography>
        <Typography bottom="large" variant="p">
          <Balancer>We help great companies create user-centric, visually</Balancer>
        </Typography>{" "}
        <Link href="/new-projects">
          <Button
            css={{
              fontSize: "18px !important",
              padding: "$small $normal",
            }}
            variant="minimal">
            Tell us about your project &rarr;
          </Button>
        </Link>
      </Block>
      <Block align="right" top="largest">
        <Block bottom="normal">
          <img src="https://supply.family/wp-content/uploads/2024/04/Bendito_Mockup-PSCv1-iPhone-01-main1.jpg" />
        </Block>
        <Typography variant="small">Website for El Gordo</Typography>
      </Block>
      <Block
        container
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "$normal",
        }}
        top="largest">
        <Card>
          <Typography bottom="normal" variant="h4">
            Websites
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            Design & Development
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            Maintenance & Support
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            Hosting & Management
          </Typography>
        </Card>
        <Card>
          <Typography bottom="normal" variant="h4">
            Product
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            Web Applications
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            MVP Development
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            Product Strategy
          </Typography>
        </Card>
        <Card>
          <Typography bottom="normal" variant="h4">
            Consulting
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            Web Technologies
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            UX/UI Design
          </Typography>
          <Typography variant="p">
            <Typography inline="small" variant="span">
              ▧
            </Typography>
            Project Management
          </Typography>
        </Card>
      </Block>
      <Block container top="largest">
        <Projects />
      </Block>
      <Block bottom="normal" container top="largest">
        <Block
          css={{
            display: "flex",
            gap: "$large",
            height: "100%",
            position: "relative",
          }}>
          <Block
            css={{
              width: "70%",
            }}>
            <h2>Our Story</h2>
            <p>
              Planare is led by Jackson Dolman, a seasoned developer and product manager. Jackson
              has worked with a wide range of clients, from startups to large enterprises, and has a
              passion for building high-quality web experiences that drive growth and success.{" "}
            </p>
            <p>
              Planare has been shipping high-quality web projects since 2016. Our story began in
              Melbourne, Australia, and in 2022 we moved to the other side of the world, serving
              clients globally from our new home in the US. We are a small team of experienced
              developers and designers who are passionate about building beautiful, performant web
              experiences.
            </p>
            <p>
              Our strength lies in our ability to understand your unique business needs and
              translate them into a digital solution that drives growth and success. We believe in
              the power of collaboration and transparency, working closely with you to ensure your
              project is delivered on time and on budget.
            </p>
            <p>
              We are flexible to working with your desired tech stack, or we can recommend the best
              tools and technologies based on your project requirements. We have a preference for
              modern, performance-driven technologies, and suggest using Next.js with TypeScript for
              new projects.
            </p>
            <p>
              Pricing:Hourly development is billed at $85/hour. Managed hosting starts at $40/month,
              and domain names start at $40/year. Project packages are customized to your needs and
              budget, providing a clear, upfront project cost.
            </p>
          </Block>
          <Block
            css={{
              width: "30%",
              position: "relative",
            }}>
            <Image alt="The early days of the Cosmo projects." fill src={workingOnCosmo} />
          </Block>
        </Block>
      </Block>
      <Block align="center" top="largest">
        <Card variant="alternative">
          <Typography css={{ margin: 0, padding: "$large" }} variant="h1">
            Let&apos;s build something great together.
          </Typography>
        </Card>
      </Block>
    </Main>
  );
}
