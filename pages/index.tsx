import Head from 'next/head';
import Image from 'next/image';

import { Email, GitHub, Phone } from '../components/icons';
import { Layout, theme } from '../components/Theme';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Planare</title>
      </Head>
      <section>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Image
            src='/logo.png'
            alt={''}
            width={1442 * 0.075}
            height={544 * 0.075}
            sizes='(max-width: 600px) 100vw, 600px'
          />

          <b>✺ Brooklyn, NY</b>
        </div>
        <div style={{ marginTop: theme.spacing.normal }}>
          <p>
            We develop apps and websites for startups and not-for-profits. We value
            scalability, simplicity, and delivering products that are meaningful to
            users.
          </p>
          <p>
            We maintain a small project roster and dedicate our full attention to
            serving each team&apos;s unique needs throughout their growth cycle.
          </p>
          <p>
            Planare is closed for new projects until early 2023. If you would like to
            get in touch, please reach out to us at our contact information below.
          </p>
        </div>
        <div style={{ marginTop: theme.spacing.normal }}>
          <p>
            <span style={{ marginRight: theme.spacing.smallest }}>
              <GitHub />
            </span>
            <a href='mailto:mail@planare.dev' target='_blank' rel='noreferrer'>
              mail@planare.dev
            </a>
          </p>
          <p>
            <span style={{ marginRight: theme.spacing.smallest }}>
              <Phone />
            </span>
            <a href='tel:+19294389964' target='_blank' rel='noreferrer'>
              929.438.9964
            </a>
          </p>
          <p>
            <span style={{ marginRight: theme.spacing.smallest }}>
              <Email />
            </span>
            <a href='https://github.com/planare' target='_blank' rel='noreferrer'>
              github.com/planare
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
