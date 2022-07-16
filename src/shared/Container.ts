import styled from "styled-components";
import { Flex } from "./system/Box";

export const Container = styled(Flex)`
  position: relative;
  max-width: 1200px;
`;

Container.defaultProps = {
  mx: { _: "s", lg: "auto" },
  flexDirection: "column",
  width: { _: "auto", lg: "100%" },
};
