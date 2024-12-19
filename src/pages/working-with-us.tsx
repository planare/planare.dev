import Head from "next/head";
import type { JSX } from "react";

import { Main } from "../components/Main";

import { Block } from "@/components/Block";
import { Typography } from "@/components/Typography";

export default function FulfillmentPolicy(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>Working with Planare</title>
      </Head>
      <Block bottom="largest" container top="largest">
        <Typography variant="h1">Working with Planare</Typography>
        <Typography variant="p">
          At Planare, we are committed to delivering high-quality web development solutions tailored
          to your specific needs and budget. Our process ensures clarity, transparency, and timely
          project completion.
        </Typography>
        <Typography top="normal" variant="h4">
          1. Project Scoping & Agreement:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            We will collaborate to define your project scope, objectives, and timeline.
          </Typography>
          <Typography variant="li">
            You will receive a detailed proposal outlining deliverables, milestones, and costs.
          </Typography>
          <Typography variant="li">
            Once you approve the proposal, we&apos;ll finalize a formal agreement detailing the
            project terms and conditions.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          2. Development & Delivery:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            Our team will commence work on your project according to the agreed-upon timeline and
            milestones.
          </Typography>
          <Typography variant="li">
            We maintain open communication throughout the development process, providing regular
            updates and seeking your feedback.
          </Typography>
          <Typography variant="li">
            Thorough testing will be conducted before project delivery to ensure quality and
            functionality.
          </Typography>
          <Typography variant="li">
            We&apos;ll deliver the completed project as outlined in the agreement, providing all
            necessary documentation and access.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          3. Ongoing Support & Maintenance:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            We offer ongoing support and maintenance services to ensure your website or web
            application remains secure, up-to-date, and optimized for performance.
          </Typography>
          <Typography variant="li">
            We typically offer several revisions after project delivery to ensure your satisfaction.
            Additional revisions will be billed at our hourly rate of $125 USD/hour.
          </Typography>
          <Typography variant="li">
            We can tailor a support package to your specific needs, whether it&apos;s routine
            maintenance, content updates, or troubleshooting.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          4. Confidentiality & Data Security:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            We take data security and confidentiality seriously. Any information shared with us
            during the project will be handled with the utmost care and protection.
          </Typography>
          <Typography variant="li">
            We will not disclose any sensitive information or project details without your explicit
            consent.
          </Typography>
          <Typography variant="li">
            We are usually happy to sign a non-disclosure agreement (NDA) to protect your
            intellectual property and proprietary information. Please let us know if you require an
            NDA.
          </Typography>
        </Typography>

        <Typography top="normal" variant="h4">
          5. Payment Terms:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            Our minimum engagement is six hours for new projects or one hour for existing projects
            unless otherwise agreed upon in the project scope.
          </Typography>
          <Typography variant="li">
            Project packages are billed according to the agreed-upon project cost, with potential
            for installment payments based on milestones.
          </Typography>
          <Typography variant="li">Hourly services are billed at $125 USD/hour.</Typography>
          <Typography variant="li">
            Managed hosting and domain name fees are billed monthly or annually, as agreed upon in
            the project scope.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          6. Cancellation & Refunds:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            If you wish to cancel a project before completion, you will be billed for the work
            completed up to that point.
          </Typography>
          <Typography variant="li">
            Refunds are not typically offered for completed work, but we are committed to resolving
            any issues or concerns you may have.
          </Typography>
          <Typography variant="li">
            If you are dissatisfied with our services, please contact us to discuss your concerns
            and potential resolutions.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          7. Client Satisfaction:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            Your satisfaction is our priority. We are committed to working collaboratively with you
            to ensure your project&apos;s success.
          </Typography>
          <Typography variant="li">
            If you have any concerns or questions throughout the process, please don&apos;t hesitate
            to contact us.
          </Typography>
        </Typography>

        <Typography top="large" variant="p">
          Planare LLC, 651 N Broad Street, Middletown DE 19709, USA.
        </Typography>
      </Block>
    </Main>
  );
}
