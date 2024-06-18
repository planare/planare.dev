import Head from "next/head";

import { Main } from "../components/Main";
import { TallyWidget } from "../components/Tally";

import { Block } from "@/components/Block";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";

export default function Contact(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>Contact Us: Planare</title>
        <script async src="https://tally.so/widgets/embed.js" />
      </Head>

      <Typography variant="h1">Contact Us</Typography>
      <Typography variant="p">
        Our clients are invited to use the form below, or reach out to us directly via email. We
        look forward to hearing from you!
      </Typography>
      <Block
        css={{
          gap: "$small",
        }}
        flexAlign="flex-start"
        justify="center">
        <a href="mailto:mail@planare.dev">
          <Button type="button" variant="minimal">
            📧 mail@planare.dev
          </Button>
        </a>
        <a href="tel:+13027790101">
          <Button type="button" variant="minimal">
            ☎️ +1 (302) 779-0101
          </Button>
        </a>
      </Block>
      <Block top="large">
        <Card variant="form">
          <TallyWidget tallyCode="n9dP2V" />
        </Card>
      </Block>
    </Main>
  );
}
