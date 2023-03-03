import { Div } from "../components/Div";
import { Text } from "../components/Text";

export const PrivacyPolicy = (): JSX.Element => {
  return (
    <Div id="PrivacyPolicy">
      <Div bottom="largest" top="largest">
        <Text as={"h1"} bottom="smallest" top="smallest">
          Privacy Policy
        </Text>
      </Div>
    </Div>
  );
};
