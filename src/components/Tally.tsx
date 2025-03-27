import { useEffect, type JSX } from "react";

import { Block } from "./Block";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Tally: any;
  }
}

export function TallyWidget({
  height = 400,
  tallyCode,
}: {
  height?: number;
  tallyCode: string;
}): JSX.Element {
  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    if (typeof window !== "undefined") {
      script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = (): void => {
        if (typeof window !== "undefined" && typeof window.Tally !== "undefined") {
          window.Tally.loadEmbeds();
        }
      };

      script.onerror = (): void => {
        // eslint-disable-next-line no-console
        console.error("Failed to load Tally script");
      };
    }

    return (): void => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Block
      css={{
        margin: "0 auto",
        width: "100%",
      }}>
      <iframe
        data-tally-src={`https://tally.so/embed/${tallyCode}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        height={height}
        loading="lazy"
        style={{
          border: "none",
          margin: "0 auto",
          width: "100%",
        }}
        title="planare.dev"
        width="100%"
      />
    </Block>
  );
}
