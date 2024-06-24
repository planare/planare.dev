import Head from "next/head";
import Balancer from "react-wrap-balancer";

import { Main } from "../components/Main";
import { TallyWidget } from "../components/Tally";

import { Block } from "@/components/Block";
import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";

const Title = (): JSX.Element => (
  <Block
    align="center"
    container
    css={{
      maxWidth: "60rem",
    }}>
    <Typography variant="h2">Work with Us</Typography>
    <Typography variant="p">
      <Balancer>
        Got a project in mind? We&apos;d love to hear about it and help you bring your vision to
        life.
      </Balancer>
    </Typography>
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
        <TallyWidget tallyCode="3NAvMj" />
      </Block>
    </Card>
  </Block>
);

export default function NewProjects(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>New Projects: Planare</title>
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
