import Head from "next/head";

import Page from "../components/Page";
import { theme } from "../components/styles";

export default function PrivacyPolicy(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Privacy Policy: Planare</title>
      </Head>

      <h1>Privacy Policy</h1>
      <p>
        At Planare, we respect your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and disclose data when you
        visit our website.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We do not use cookies to track your activity on our website. We use Vercel Analytics to
        gather anonymous, aggregated data about website traffic and usage patterns. This information
        helps us understand how visitors interact with our site so we can improve your experience.
      </p>
      <h3>How We Use Your Information</h3>
      <p>
        The data collected by Vercel Analytics is used solely for internal purposes and is not
        shared withthird parties. It helps us analyze trends, track user engagement, and optimize
        our website&apos;s performance.
      </p>
      <h3>Your Choices</h3>
      <p>
        You can opt-out of Vercel Analytics tracking by adjusting your browser settings. Please note
        that opting out may affect the functionality of certain website features.
      </p>
      <h3>Data Security</h3>
      <p>
        We take appropriate measures to protect your information from unauthorized access,
        disclosure, alteration, or destruction. However, no method of transmission over the internet
        or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>
      <h3>Changes to This Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page
        with an updated effective date.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy or our data practices, please contact us
        at <strong>mail@planare.dev</strong>
      </p>
      <p
        style={{
          marginTop: theme.spacing.large,
        }}>
        Effective Date: <strong>May 1, 2024</strong>
      </p>
      <p>Planare LLC, 651 N Broad Street, Middletown DE 19709, USA.</p>
    </Page>
  );
}
