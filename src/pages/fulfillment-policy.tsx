import Head from "next/head";

import { theme } from "../components/Theme";

export default function FulfillmentPolicy(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Fulfillment Policy: Planare</title>
      </Head>

      <h1>Fulfillment Policy</h1>
      <p>
        At Planare, we are committed to delivering high-quality web development solutions tailored
        to your specific needs and budget. Our fulfillment process ensures clarity, transparency,
        and timely project completion.
      </p>
      <h3>1. Project Scoping and Agreement:</h3>
      <ul>
        <li>
          Upon initial consultation, we&apos;lll work with you to define your project scope,
          objectives, and timeline.
        </li>
        <li>
          We&apos;ll provide a detailed project proposal outlining the deliverables, milestones, and
          associated costs.
        </li>
        <li>
          Once you approve the proposal, we&apos;ll finalize a formal agreement detailing the
          project terms and conditions.
        </li>
      </ul>
      <h3>2. Development and Delivery:</h3>
      <ul>
        <li>
          Our team will commence work on your project according to the agreed-upon timeline and
          milestones.
        </li>
        <li>
          We maintain open communication throughout the development process, providing regular
          updates and seeking your feedback.
        </li>
        <li>
          Upon completion, we&apos;ll conduct thorough testing to ensure the final product meets
          your expectations and functions flawlessly.
        </li>
        <li>
          We&apos;ll deliver the completed project as outlined in the agreement, providing all
          necessary documentation and access.
        </li>
      </ul>
      <h3>3. Ongoing Support and Maintenance:</h3>
      <ul>
        <li>
          We offer ongoing support and maintenance services to ensure your website or web
          application remains secure, up-to-date, and optimized for performance.
        </li>
        <li>
          We can tailor a support package to your specific needs, whether it&apos;s routine
          maintenance, content updates, or troubleshooting.
        </li>
      </ul>
      <h3>4. Payment Terms:</h3>
      <ul>
        <li>
          For hourly services, we bill based on the actual time spent on your project, at a rate of
          $125/hour.
        </li>
        <li>Managed hosting and domain name fees are billed monthly or annually, respectively.</li>
        <li>
          Project packages are billed according to the agreed-upon project cost, which may be paid
          in installments based on milestones.
        </li>
      </ul>
      <h3>5. Client Satisfaction:</h3>
      <ul>
        <li>
          Your satisfaction is our priority. We are committed to working collaboratively with you to
          ensure your project&apos;s success.
        </li>
        <li>
          If you have any concerns or questions throughout the fulfillment process, please
          don&apos;t hesitate to contact us.
        </li>
      </ul>
      <p>
        By engaging our services, you acknowledge and agree to the terms outlined in this
        fulfillment policy.
      </p>

      <p
        style={{
          marginTop: theme.spacing.large,
        }}>
        Effective Date: <strong>May 1, 2024</strong>
      </p>
    </div>
  );
}
