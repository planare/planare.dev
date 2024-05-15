import Head from "next/head";

import Page from "../components/Page";
import { theme } from "../components/styles";
import { TallyWidget } from "../components/Tally";

export default function NewProjects(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>New Projects: Planare</title>
        <script async src="https://tally.so/widgets/embed.js" />
      </Head>

      <h1>Work with Us</h1>
      <p>
        Got a project in mind? We&apos;d love to hear about it and help you bring your vision to
        life.
      </p>

      <div
        style={{
          marginTop: theme.spacing.large,
        }}>
        <article className="form">
          <TallyWidget tallyCode="3NAvMj" />
        </article>
      </div>
    </Page>
  );
}
