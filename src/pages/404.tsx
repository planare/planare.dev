import Head from 'next/head';
import { Layout } from '../components/Theme';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404: Planare</title>
      </Head>
      <section>
        <h1>This page could not be found.</h1>
        <p>
          <a href='/'>&#10042; Return to the homepage</a>
        </p>
      </section>
    </Layout>
  );
}
