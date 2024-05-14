import Head from "next/head";

import { TallyWidget } from "../components/Tally";
import { theme } from "../components/Theme";

export default function NewProjects(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
