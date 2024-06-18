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
      <Block align="center" top="normal">
        <Typography variant="h1">
          <Balancer>
            You have big ideas. We have the development expertise to bring them to life.
          </Balancer>
        </Typography>
        <Typography bottom="large" variant="p">
          <Balancer>
            We empower startups and small businesses to thrive online through exceptional front-end
            web development. We craft visually stunning, user-friendly websites and web applications
            tailored to your unique brand and goals.
          </Balancer>
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
      <Block top="largest">
        <Card>
          <Typography variant="h3">☞ Web & Product Development</Typography>
          <p>
            We build the face of your digital presence, ensuring intuitive user experiences,
            responsive designs, and seamless functionality across all devices.{" "}
          </p>
          <h3>☞ Consulting & Strategy</h3>
          <p>
            We provide expert guidance on web technologies, design trends, and digital marketing
            strategies to help you make informed decisions and drive growth.{" "}
          </p>
          <h3>☞ Project Management</h3>
          <p>
            We guide your project from inception to launch, ensuring seamless communication,
            efficient workflows, and timely delivery.
          </p>
          <h3>☞ Maintenance & Support</h3>
          <p>
            We handle the technical aspects of your website, including hosting, security updates,
            content management, and performance optimization.
          </p>

          <Typography top="normal" variant="small">
            <strong>Pricing:</strong>
            Hourly development is billed at $85/hour. Managed hosting starts at $40/month, and
            domain names start at $40/year. Project packages are customized to your needs and
            budget, providing a clear, upfront project cost.
          </Typography>
        </Card>
      </Block>
      <Typography top="large" variant="h1">
        Test
      </Typography>

      <Projects />
      <Block bottom="normal" top="largest">
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
