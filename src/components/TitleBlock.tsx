import React, { memo } from "react";
import { Flex } from "../shared/system/Box";
import { Text } from "../shared/system/Text";

interface TitleBlockProps {
  children?: React.ReactNode;
  title: string;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ children, title }) => (
  <Flex
    my={{ _: "s", lg: "xl" }}
    justifyContent="center"
    alignItems="center"
    color="black-3"
  >
    <Text preset={{ _: "h2Thin", lg: "h1Thin" }} as="h2">
      {title}
    </Text>
    {children}
  </Flex>
);

export default memo(TitleBlock);
