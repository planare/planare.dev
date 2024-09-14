import Head from "next/head";
import { Balancer } from "react-wrap-balancer";

import { Main } from "../components/Main";
import { TallyWidget } from "../components/Tally";

import { Block } from "@/components/Block";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";

const Title = (): JSX.Element => (
  <Block
    align="center"
    container
    css={{
      maxWidth: "60rem",
    }}>
    <Typography variant="h2">Contact Us</Typography>
    <Typography variant="p">
      <Balancer>
        Our clients are invited to use the form below, or reach out to us directly via email. We
        look forward to hearing from you!
      </Balancer>
    </Typography>
    <Block
      css={{
        gap: "$small",
        phone: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
      flexAlign="center"
      justify="center"
      top="normal">
      <a href="mailto:mail@planare.dev">
        <Button type="button" variant="minimal">
          mail@planare.dev
        </Button>
      </a>
      <a href="tel:+13027790101">
        <Button type="button" variant="minimal">
          +1 (302) 779-0101
        </Button>
      </a>
    </Block>
  </Block>
);

const Form = (): JSX.Element => (
  <Block
    container
    css={{
      width: "100%",
    }}>
    <Card variant="form">
      <Block top="normal">
        <TallyWidget tallyCode="n9dP2V" />
      </Block>
    </Card>
  </Block>
);

export default function Contact(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>Contact Us: Planare</title>
        <script async src="https://tally.so/widgets/embed.js" />
      </Head>
      <Block
        bottom="largest"
        css={{
          gap: "$large",
          display: "grid",
          gridTemplateColumns: "1fr",
          width: "100%",
        }}
        top="largest">
        <Title />
        <Form />
      </Block>
    </Main>
  );
}
