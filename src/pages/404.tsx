import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

import { theme } from "../components/Theme";

interface IQuotable {
  _id: string;
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
}

const fetcher = (url: string): Promise<IQuotable> => fetch(url).then((r) => r.json());

export default function Custom404(): JSX.Element {
  const { data } = useSWR<IQuotable>("https://api.quotable.io/random?size=1", fetcher);

  return (
    <div>
      <Head>
        <title>404: Planare</title>
      </Head>
      <p style={{ marginTop: theme.spacing.large }}>This page could not be found.</p>
      <h1>
        <Link href="/">🏠</Link>
      </h1>
      {data && (
        <p
          style={{
            opacity: 0.42,
            marginTop: theme.spacing.largest,
          }}>
          {data.content} — {data.author} (Added {new Date(data.dateAdded).toLocaleDateString()})
        </p>
      )}
    </div>
  );
}
