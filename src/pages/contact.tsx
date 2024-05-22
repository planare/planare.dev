import Head from "next/head";

import Page from "../components/Page";
import { theme } from "../components/styles";
import { TallyWidget } from "../components/Tally";

export default function Contact(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Contact Us: Planare</title>
        <script async src="https://tally.so/widgets/embed.js" />
      </Head>

      <h1>Contact Us</h1>
      <p>
        Our clients are invited to use the form below, or reach out to us directly via email. We
        look forward to hearing from you!
      </p>
      <div
        style={{
          display: "flex",

          gap: theme.spacing.small,
        }}>
        <a href="mailto:mail@planare.dev">
          <button className="minimal" type="button">
            📧 mail@planare.dev
          </button>
        </a>
        <a href="tel:+13027790101">
          <button className="minimal" type="button">
            ☎️ +1 (302) 779-0101
          </button>
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
    </Page>
  );
}
