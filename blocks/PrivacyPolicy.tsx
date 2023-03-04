import Link from "next/link";
import { useState, useEffect } from "react";

import { Card } from "../components/Card";
import { Div } from "../components/Div";
import { Divider } from "../components/Divider";
import { Text } from "../components/Text";
import { theme } from "../components/Theme";
import { Icon } from "../icons";

export const PrivacyPolicy = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  const windowReady = typeof window !== "undefined";

  useEffect(() => {
    if (windowReady) {
      setIsMounted(true);
    }
  }, [windowReady]);

  return (
    <Div id="PrivacyPolicy">
      <Text
        style={{
          position: "fixed",
          top: theme.spacing.normal,
          right: theme.spacing.normal,
          padding: theme.spacing.small,
          zIndex: 100,
          textAlign: "right",
        }}>
        <Link href="/">&larr;</Link>
      </Text>
      <Div bottom="large" top="large">
        <Text as={"h2"}>Privacy Policy</Text>
        <Text as={"p"}>
          We use Vercel Analytics to see how many people visit our site. Visitors are identified by
          a hash created from the incoming request, which resets daily. Using a generated hash
          provides a privacy-friendly alternative to cookies ensuring that visitors can&apos;t be
          tracked between different days or different websites.
        </Text>
        <Text>
          In more policy-esque terms; we don&apos;t collect any personal information. We don&apos;t
          collect your name, email address, or any other information that can be used to identify
          you. We don&apos;t use cookies, and we don&apos;t track you across the web.
        </Text>
        <Text as={"p"}>You can see the data that Vercel Analytics collects below.</Text>

        <Div top="normal">
          <Card>
            {isMounted && (
              <Text as={"ol"} style={{ textAlign: "justify" }}>
                <Text as={"li"}>
                  Browser: {navigator?.userAgent || "You are using an unknown browser"}
                </Text>
                <Text as={"li"}>
                  Operating System:{" "}
                  {navigator?.platform || "You are using an unknown operating system"}
                </Text>
                <Text as={"li"}>
                  Screen Resolution: {`${window?.screen?.width}x${window?.screen?.height}`}
                </Text>
                <Text as={"li"}>Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</Text>
                <Text as={"li"}>Language: {navigator?.language}</Text>
                <Text as={"li"}>Referrer: {document?.referrer || "No referrer"}</Text>
                <Text as={"li"}>URL: {window?.location?.href}</Text>
                <Text as={"li"}>Hostname: {window?.location?.hostname || "No hostname"}</Text>
                <Text as={"li"}>Pathname: {window?.location?.pathname || "No pathname"}</Text>
                <Text as={"li"}>Timestamp: {new Date().toLocaleString()}</Text>
              </Text>
            )}
          </Card>
        </Div>
        <Divider bottom="small" top="large" />
        <Text as={"small"}>
          <a href="https://vercel.com/docs/concepts/analytics">
            Learn more about Vercel Analytics <Icon.External />
          </a>
        </Text>
      </Div>
    </Div>
  );
};
