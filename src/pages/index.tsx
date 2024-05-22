import Head from "next/head";
import Balancer from "react-wrap-balancer";

import Page from "../components/Page";
import { theme } from "../components/styles";

const now = new Date();
const nowString = now.toLocaleString("en-AU", {
  timeZone: "Australia/Melbourne",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

export default function Home(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Planare</title>
      </Head>
      <div
        style={{
          textAlign: "center",
        }}>
        <div
          style={{
            marginBottom: theme.spacing.largest,
          }}>
          <small className="warning">
            ℹ Check back soon. We are currently updating our website to reflect our latest
            projects.
          </small>
        </div>
        <h1>
          {" "}
          <Balancer>
            You have big ideas. We have the development expertise to bring them to life.
          </Balancer>
        </h1>
        <p>
          <Balancer>
            We empower startups and small businesses to thrive online through exceptional front-end
            web development. We craft visually stunning, user-friendly websites and web applications
            tailored to your unique brand and goals.
          </Balancer>
        </p>{" "}
      </div>
      <div
        style={{
          marginTop: theme.spacing.largest,
        }}>
        <article
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}>
          <h3>☞ Web & Product Development</h3>
          <p>
            We build the face of your digital presence, ensuring intuitive user experiences,
            responsive designs, and seamless functionality across all devices.{" "}
          </p>
          <h3>☞ Consulting & Strategy</h3>
          <p>
            We provide expert guidance on web technologies, design trends, and digital marketing
            strategies to help you make informed decisions and drive growth.{" "}
          </p>
          <h3>☞ Project Management</h3>
          <p>
            We guide your project from inception to launch, ensuring seamless communication,
            efficient workflows, and timely delivery.
          </p>
          <h3>☞ Maintenance & Support</h3>
          <p>
            We handle the technical aspects of your website, including hosting, security updates,
            content management, and performance optimization.
          </p>
          <hr style={{ marginTop: theme.spacing.normal }} />
          <small>
            <strong>Pricing:</strong>
            Hourly development is billed at $125/hour. Managed hosting starts at $40/month, and
            domain names start at $40/year. Project packages are customized to your needs and
            budget, providing a clear, upfront project cost.
          </small>
        </article>
        <article
          className="alternative"
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}>
          <h5>
            We recently developed a portfolio management app,{" "}
            <a href="https://cosmogroup.io" rel="noreferrer" target="_blank">
              website
            </a>{" "}
            and open-source{" "}
            <a href="https://github.com/cosmoau/ui" rel="noreferrer" target="_blank">
              component library
            </a>{" "}
            for Cosmo, a fast-growing vacation rental company based in Melbourne.&nbsp;&nbsp;
            <span style={{ opacity: 0.42 }}>{nowString}</span>
          </h5>
        </article>
      </div>
    </Page>
  );
}
