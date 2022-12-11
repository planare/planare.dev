import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import Provider from '../components/Theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
}
