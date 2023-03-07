import Head from "next/head";

import { IndexInfo } from "../blocks/Info";
import { Logo } from "../blocks/Logo";
import { PrivacyPolicy } from "../blocks/PrivacyPolicy";
import { IndexProjects } from "../blocks/Projects";

import { Card } from "./Card";
import { Pane } from "./Classes";
import { Column } from "./Column";
import { Div } from "./Div";
import { Row } from "./Row";
import { theme } from "./Theme";
import { visibleCollapse, hiddenCollapse } from "./Utils";

export const Layout = ({
  route,
}: {
  route: "index" | "privacy-policy" | "projects" | "404";
}): JSX.Element => {
  return (
    <Div id={route}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Planare</title>
      </Head>
      <Div
        style={{
          position: "fixed",
          zIndex: 1,
          width: "20rem",
          margin: "0 auto",
          left: 0,
          right: 0,
          textAlign: "center",
          background: theme.colors.background,
          color: theme.colors.text,
          border: `1px dotted ${theme.colors.border}`,
          padding: "0.5rem",
          marginTop: `-0.75rem`,
          boxShadow: "0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.05)",
        }}>
        ⊛ WORK IN PROGRESS ⊛
      </Div>
      <Row>
        <Column align="center" width="50%">
          <Card className={Pane}>
            <Div className={visibleCollapse}>
              <Div className={visibleCollapse}>
                <Logo />
              </Div>
              {route === "index" ? (
                <IndexInfo />
              ) : route === "projects" ? (
                <IndexProjects />
              ) : route === "privacy-policy" ? (
                <PrivacyPolicy />
              ) : (
                "404"
              )}
            </Div>
            <Div className={hiddenCollapse}>
              <IndexInfo />
            </Div>
          </Card>
        </Column>
        <Column align="center" className={hiddenCollapse} width="50%">
          <Card className={Pane}>
            {route === "index" || route === "projects" ? (
              <IndexProjects />
            ) : route === "privacy-policy" ? (
              <PrivacyPolicy />
            ) : (
              "404"
            )}
          </Card>
        </Column>
      </Row>
    </Div>
  );
};
