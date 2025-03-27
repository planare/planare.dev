import type { JSX } from "react";

import { Block } from "@/components/Block";
import { Typography } from "@/components/Typography";
import Head from "next/head";

import { Main } from "../components/Main";

export default function PrivacyPolicy(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>Privacy Policy: Planare</title>
      </Head>
      <Block bottom="largest" container top="largest">
        <Typography variant="h1">Privacy Policy</Typography>
        <Typography variant="p">
          At Planare, we respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and disclose data when you
          visit our website.
        </Typography>
        <Typography top="normal" variant="h4">
          Information We Collect
        </Typography>
        <Typography variant="p">
          We do not use cookies to track your activity on our website. We use Vercel Analytics to
          gather anonymous, aggregated data about website traffic and usage patterns. This
          information helps us understand how visitors interact with our site so we can improve your
          experience.
        </Typography>
        <Typography top="normal" variant="h4">
          How We Use Your Information
        </Typography>
        <Typography variant="p">
          The data collected by Vercel Analytics is used solely for internal purposes and is not
          shared withthird parties. It helps us analyze trends, track user engagement, and optimize
          our website&apos;s performance.
        </Typography>
        <Typography top="normal" variant="h4">
          Your Choices
        </Typography>
        <Typography variant="p">
          You can opt-out of Vercel Analytics tracking by adjusting your browser settings. Please
          note that opting out may affect the functionality of certain website features.
        </Typography>
        <Typography top="normal" variant="h4">
          Data Security
        </Typography>
        <Typography variant="p">
          We take appropriate measures to protect your information from unauthorized access,
          disclosure, alteration, or destruction. However, no method of transmission over the
          internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </Typography>
        <Typography top="normal" variant="h4">
          Changes to This Policy
        </Typography>
        <Typography variant="p">
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated effective date.
        </Typography>
        <Typography top="normal" variant="h4">
          Contact Us
        </Typography>
        <Typography variant="p">
          If you have any questions about this Privacy Policy or our data practices, please contact
          us at <strong>mail@planare.dev</strong>
        </Typography>
        <Typography top="large" variant="p">
          Effective Date: <strong>May 1, 2024</strong>
        </Typography>
        <Typography variant="p">
          Planare LLC, 651 N Broad Street, Middletown DE 19709, USA.
        </Typography>
      </Block>
    </Main>
  );
}
