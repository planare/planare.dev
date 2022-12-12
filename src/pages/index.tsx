import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import { Icon } from '../components/icons';
import { Layout, theme } from '../components/Theme';
import Weather from '../components/Weather';

export default function Home(): JSX.Element {
  const [showWeather, setShowWeather] = useState(false);

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
            src='/inline.png'
            alt={''}
            width={1442 * 0.075}
            height={544 * 0.075}
            sizes='(max-width: 600px) 100vw, 600px'
          />

          <div
            onClick={(): void => setShowWeather(!showWeather)}
            style={{ cursor: 'pointer' }}>
            <p>
              <b>&#10042; Brooklyn, NY</b>
            </p>
          </div>
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
            Planare is <i>closed</i> for new projects until early 2023. If you would
            like to get in touch, please reach out to us at our contact information
            below.
          </p>
        </div>

        <div style={{ marginTop: theme.spacing.small }}>
          {showWeather ? (
            <Weather latitute={40.6782} longitude={-73.9442} />
          ) : (
            <small>&nbsp;</small>
          )}
        </div>

        <div>
          <p>
            <span style={{ marginRight: theme.spacing.small }}>
              <Icon.Email />
            </span>
            <a href='mailto:mail@planare.dev' target='_blank' rel='noreferrer'>
              mail@planare.dev
            </a>
          </p>
          <p>
            <span style={{ marginRight: theme.spacing.small }}>
              <Icon.Phone />
            </span>
            929.999.7420
          </p>
          <p style={{ marginBottom: 0 }}>
            <span
              style={{
                marginRight: theme.spacing.small,
              }}>
              <Icon.GitHub />
            </span>
            <a href='https://github.com/planare' target='_blank' rel='noreferrer'>
              github.com&#47;planare
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
