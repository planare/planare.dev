import Head from "next/head";

import { Card } from "../components/Card";
import { Pane } from "../components/Classes";
import { Column } from "../components/Column";
import { Div } from "../components/Div";
import { Row } from "../components/Row";
import { visibleCollapse, hiddenCollapse } from "../components/Utils";

import { IndexInfo } from "./Info";
import { Logo } from "./Logo";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { IndexProjects } from "./Projects";

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
              "privacy policy"
            ) : (
              "404"
            )}
          </Card>
        </Column>
      </Row>
    </Div>
  );
};
