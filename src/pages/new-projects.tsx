import Head from "next/head";

import { Main } from "../components/Main";
import { TallyWidget } from "../components/Tally";

import { Block } from "@/components/Block";

export default function NewProjects(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>New Projects: Planare</title>
        <script async src="https://tally.so/widgets/embed.js" />
      </Head>

      <h1>Work with Us</h1>
      <p>
        Got a project in mind? We&apos;d love to hear about it and help you bring your vision to
        life.
      </p>

      <Block top="large">
        <article className="form">
          <TallyWidget tallyCode="3NAvMj" />
        </article>
      </Block>
    </Main>
  );
}
