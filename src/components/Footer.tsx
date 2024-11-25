import { memo } from "react";
import Link from "next/link";
import { navList, companyInfoList, storeList } from "../constants";
import { Logo, Vk, Insta, Fb } from "../shared/svgs";
import { Box, Flex, Grid } from "../shared/system/Box";
import { Text } from "../shared/system/Text";
import { SVGWrapper } from "../shared/ui/Button";

const networks = [
  {
    component: Vk,
    link: "https://vk.com",
  },
  {
    component: Fb,
    link: "https://facebook.com",
  },
  {
    component: Insta,
    link: "https://instagram.com",
  },
];

interface FooterNavProps {
  items: string[];
  heading: string;
}

const FooterNav: React.FC<FooterNavProps> = ({ heading, items }) => (
  <Box mb="s" mx={{ sm: "s" }}>
    <Text mb="xxl-3" preset="h3">
      {heading}
    </Text>
    <Box as="ul" css="list-style: none">
      {items.map((text) => (
        // TODO: unify links
        <Link href="/" key={text}>
          <Text mb="xs" preset="paragraph2Thin" as="li" key={text}>
            {text}
          </Text>
        </Link>
      ))}
    </Box>
  </Box>
);

const Footer: React.FC = () => (
  <Flex width="100%" bg="black-2" color="white">
    <Grid
      my="xxl-3"
      width="100%"
      maxWidth="1200px"
      mx={{ _: "s", lg: "auto" }}
      gridGap="s"
      gridAutoFlow="max-content"
    >
      <Flex
        flexDirection={{ _: "column", sm: "row" }}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box mr="s" mb="s">
          <Logo />
          <Box>
            <Text preset="paragraph2Thin" mt="xxl-3" mb="xs">
              СОЦИАЛЬНЫЕ СЕТИ:
            </Text>
            <Grid
              gridAutoFlow="column"
              gridAutoColumns="min-content"
              gridGap="xs"
            >
              {networks.map(({ component: Component, link }) => (
                <Link legacyBehavior href={link} key={link}>
                  <SVGWrapper color="white" hoverColor="red">
                    <Component />
                  </SVGWrapper>
                </Link>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box>
          <Text preset="h3Thin" mb="s">
            8 (800) 333-49-80
          </Text>
          <Text preset="paragraph1Thin" mb="s">
            shop@tastycoffee.ru
          </Text>
        </Box>
        <FooterNav
          items={navList.map(({ name }) => name)}
          heading="Каталог товаров"
        />
        <FooterNav items={companyInfoList} heading="Компания" />
        <FooterNav items={storeList} heading="Интернет-магазин" />
      </Flex>
      <img style={{ maxWidth: "200px" }} alt="payment" src="/payment.png" />
      <Text preset="h2Thin" textAlign="center">
        © 2021 SOME COFFEE
      </Text>
    </Grid>
  </Flex>
);

export default memo(Footer);
