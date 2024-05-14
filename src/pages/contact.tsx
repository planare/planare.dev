import Head from "next/head";

import { TallyWidget } from "../components/Tally";
import { theme } from "../components/Theme";

export default function Contact(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Contact Us: Planare</title>
        <script async src="https://tally.so/widgets/embed.js" />
      </Head>

      <h1>Contact Us</h1>
      <p>
        Our clients are invited to use the form below, or reach out to us directly via email. We
        look forward to hearing from you!
      </p>
      <div>
        <a href="mailto:mail@planare.dev">
          <button type="button">mail@planare.dev</button>
        </a>
      </div>
      <div
        style={{
          marginTop: theme.spacing.large,
        }}>
        <article className="form">
          <TallyWidget tallyCode="n9dP2V" />
        </article>
      </div>
    </div>
  );
}
