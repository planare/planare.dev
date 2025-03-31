import type { JSX } from "react";

import { Ideas } from "@/components/Ideas";
import { Services } from "@/components/Services";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

import { Block } from "../components/Block";
import { Button } from "../components/Button";
import { Main } from "../components/Main";
import { Typography } from "../components/Typography";

const Hero = (): JSX.Element => (
  <Block
    align="center"
    container
    css={{
      maxWidth: "75rem",
    }}>
    <Typography top="normal" variant="h1">
      <Balancer>
        You have big ideas. We have the development expertise to bring them to life.
      </Balancer>
    </Typography>
    <Typography accent bottom="large" variant="p">
      <Balancer>
        From concept to launch, we build performant, scalable, and user-centric websites and
        applications that propel businesses forward. Whether you&apos;re a startup with a unique
        idea, an agency needing extra hands, or a growing business seeking a stronger online
        presence, our team is here to help.
      </Balancer>
    </Typography>{" "}
    <Link href="/new-projects">
      <Button
        css={{
          fontSize: "18px !important",
          padding: "$small $normal",
        }}>
        Tell us about your project &rarr;
      </Button>
    </Link>
  </Block>
);

const Showcase = (): JSX.Element => (
  <Block align="right">
    <Block
      bottom="small"
      css={{
        height: "40rem",
        phone: {
          height: "30rem",
        },
        position: "relative",
      }}>
      <Image
        alt=""
        fill
        src="/images/displays/cosmogroup.png"
        style={{
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
        }}
      />
    </Block>
    <Typography variant="small">Cosmo App V2 for Cosmo (2024)</Typography>
  </Block>
);

const About = (): JSX.Element => (
  <Block container>
    <Block
      css={{
        display: "flex",
        gap: "$large",
        height: "100%",
        phone: {
          flexDirection: "column",
        },
        position: "relative",
      }}>
      <Block
        css={{
          phone: {
            width: "100% !important",
          },
          width: "70%",
        }}>
        <Typography variant="p">&mdash; About Us</Typography>
        <Typography top="normal" variant="h3">
          We love the web.
        </Typography>

        <Typography variant="p">
          Planare is led by Jackson Dolman, a seasoned developer and product manager with a passion
          for building high-quality web experiences. Jackson&apos;s expertise spans a wide range of
          industries, from startups to enterprise-level companies.
        </Typography>
        <Typography variant="p">
          We believe in the power of collaboration and transparency, working closely with you to
          understand your unique business needs. This collaborative approach ensures we deliver
          digital solutions that drive growth and success, on time and within budget.
        </Typography>
        <Typography bottom="normal" variant="p">
          Our expertise translates to beautiful, performant web experiences. We&apos;ve been
          crafting these since 2016, starting in Australia and now serving clients globally from our
          US base.
        </Typography>
        <Typography accent bottom="normal" variant="small">
          <Typography inline="small" variant="span">
            ▧
          </Typography>
          Project packages are customized to your needs and budget, providing a clear, upfront
          project cost. Our hourly rate is $120, with a minimum project cost of $3,000.
        </Typography>
        <Link href="/working-with-us">
          <Button variant="minimal">Learn more about working with us &rarr;</Button>
        </Link>
      </Block>
      <Block
        align="right"
        css={{
          height: "100%",
          phone: {
            width: "100% !important",
          },
          position: "relative",
          width: "30%",
        }}>
        <Block
          bottom="small"
          css={{
            height: "34rem",
            phone: {
              height: "30rem",
            },
          }}>
          <Image
            alt="El Gordo Bendigo"
            fill
            src="/images/displays/elgordobendigo.png"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Block>
        <Typography variant="small">Website Development for El Gordo</Typography>
      </Block>
    </Block>
  </Block>
);

export default function Home(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>Planare</title>
      </Head>
      <Block
        bottom="largest"
        css={{
          display: "grid",
          gap: "$largest",
        }}
        top="largest">
        <Hero />
        <Showcase />
        <Services />

        <Ideas />
        <About />
      </Block>
    </Main>
  );
}
