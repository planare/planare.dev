import Head from "next/head";

import { Main } from "../components/Main";

import { Block } from "@/components/Block";
import { Typography } from "@/components/Typography";

export default function FulfillmentPolicy(): JSX.Element {
  return (
    <Main>
      <Head>
        <title>Fulfillment Policies</title>
      </Head>
      <Block bottom="largest" container top="largest">
        <h1>Fulfillment Policies</h1>
        <Typography variant="p">
          This document details our procedures for service delivery, payments, refunds, and
          cancellations. For more information, check out our{" "}
          <a href="/privacy-policy">Privacy Policy</a> and{" "}
          <a href="/working-with-us">Working with Planare</a> guide.
        </Typography>
        <Typography top="normal" variant="h4">
          1. Service Delivery:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            <b>Web Development Projects:</b> We will work with you to establish a project timeline
            with clearly defined milestones. We will provide regular progress updates and seek your
            feedback throughout the development process. The final delivery will include all project
            files, documentation, and any agreed-upon training or support. We typically offer a set
            number of revisions after project delivery to ensure your satisfaction. Additional
            revisions will be billed on an hourly basis.
          </Typography>
          <Typography variant="li">
            <b>Maintenance & Support:</b> We offer ongoing maintenance and support services to
            ensure your website or web application remains secure and up-to-date. We will provide
            regular updates and address any issues promptly to maintain optimal performance.
          </Typography>
          <Typography variant="li">
            <b>Consulting Services:</b> We will schedule consulting sessions at a time that is
            convenient for you. We will provide detailed notes and recommendations following each
            session. Any additional resources or deliverables will be provided as agreed upon.
          </Typography>
          <Typography variant="li">
            <b>Hosting & Domain Services:</b> We will set up and manage your hosting and domain
            services according to the agreed-upon plan. We will provide you with all necessary
            information and documentation for your records.
          </Typography>
          <Typography variant="li">
            <b>Timeframes:</b> Estimated project timelines vary depending on the scope and
            complexity of the project. We will provide you with a detailed timeline during the
            project scoping phase. We will communicate any unforeseen delays or adjustments to the
            timeline as they arise.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          2. Payment Methods
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            <b>Payment Schedule:</b> We will provide you with a detailed project proposal outlining
            the total cost and payment schedule. Payment terms will be agreed upon before work
            commences.
          </Typography>
          <Typography variant="li">
            <b>Credit/Debit Cards:</b> Secure online payments processed through Stripe.
          </Typography>
          <Typography variant="li">
            <b>Bank Transfers:</b> Bank transfer (ACH) payments are accepted for larger projects or
            ongoing services. Please contact us for bank transfer details.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          3. Refund Policy:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            <b>Before Work Commences:</b> If you have made a payment for a project but work has not
            yet started, you are eligible for a full refund. Simply contact us to request a
            cancellation and refund.
          </Typography>
          <Typography variant="li">
            <b>After Work Commences:</b> If you request a cancellation after work has begun, you
            will be billed for the work completed up to that point. Refunds are not typically
            offered for completed work, but we are committed to resolving any issues or concerns you
            may have.
          </Typography>
          <Typography variant="li">
            <b>Hosting and Domain Fees:</b> If you cancel your hosting or domain services before the
            end of the billing cycle, you will not be refunded for the remainder of the cycle.
          </Typography>
        </Typography>
        <Typography top="normal" variant="h4">
          4. Cancellation Policy:
        </Typography>
        <Typography variant="ul">
          <Typography variant="li">
            <b>Web Development Projects:</b> If you wish to cancel a web development project after
            work has commenced, you will be billed for the work completed up to that point. Please
            contact us to discuss your situation.
          </Typography>
          <Typography variant="li">
            <b>Maintenance & Support Services:</b> You may cancel your maintenance and support
            services at any time. If you cancel before the end of the billing cycle, you will not be
            refunded for the remainder of the cycle.
          </Typography>
          <Typography variant="li">
            <b>Consulting Services:</b> You may cancel your consulting services at any time. If you
            cancel before a scheduled session, you will not be charged for that session.
          </Typography>
          <Typography variant="li">
            <b>Hosting & Domain Services:</b> You may cancel your hosting and domain services at any
            time. If you cancel before the end of the billing cycle, you will not be refunded for
            the remainder of the cycle.
          </Typography>
        </Typography>

        <Typography top="normal" variant="h4">
          5. Contact Us:
        </Typography>
        <Typography variant="p">
          If you have any questions or concerns about our fulfillment policies, please contact us at{" "}
          <a href="mailto:mail@planare.dev">mail@planare.dev</a>.
        </Typography>

        <Typography top="largest" variant="p">
          Planare LLC, 651 N Broad Street, Middletown DE 19709, USA.
        </Typography>
      </Block>
    </Main>
  );
}
