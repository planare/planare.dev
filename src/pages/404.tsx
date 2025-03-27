import type { JSX } from "react";

import { Typography } from "@/components/Typography";
import Head from "next/head";
import useSWR from "swr";

import { Main } from "../components/Main";

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
    <Main>
      <Head>
        <title>404: Planare</title>
      </Head>

      {data && (
        <Typography top="large" variant="h1">
          {data.content} — {data.author}
        </Typography>
      )}
      <Typography top="large" variant="p">
        This page could not be found.
      </Typography>
    </Main>
  );
}
