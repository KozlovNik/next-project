import { useState, memo } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import PopupAccount from "./PopupAccount";
import PopupMenu from "./PopupMenu";
import PopupSearch from "./PopupSearch";
import PopupLogin from "./PopupLogin";
import { Box, Grid, Flex } from "../shared/system/Box";
import { Container } from "../shared/Container";
import { displayUp, hideUp, screen } from "../shared/system/primitives";
import { Cart, Heart, Logo, Logout, Profile, Search } from "../shared/svgs";
import { CART_PAGE, FAVORITES_PAGE } from "../shared/constants/routes";
import { Text } from "../shared/system/Text";
import useUser from "../hooks/useUser";
import { buildCategoryPage } from "../lib/urlBuilder";

// TODO: use real data
const categories = [
  { name: "Кофе в зернах", slug: "kofe-v-zernah" },
  { name: "Молотый кофе", slug: "molotyj-kofe" },
  { name: "Кофе в капсулах", slug: "kofe-v-kapsulah" },
  { name: "Растворимый кофе", slug: "rastvorimyj-kofe" },
  { name: "Кофемашины", slug: "kofemashiny" },
  { name: "Аксессуары", slug: "aksessuary" },
  { name: "Сладости", slug: "sladosti" },
];

const SvgButton = styled.button`
  background-color: transparent;
  border: none;
`;

const HorizontalLine = styled(Box)`
  width: 20px;
  height: 0.5px;
  background-color: white;
`;

const LeftItem = styled(Text).attrs({
  preset: "paragraph2Light",
  as: "a",
})`
  margin-right: 40px;
  text-decoration: underline dotted white;
  text-decoration-thickness: 1px;
  position: relative;
  cursor: pointer;

  :hover {
    text-decoration: none;
    border-bottom: none;
  }

  :before {
    position: absolute;
    top: 0px;
    left: -25px;
    content: " ";
    width: 20px;
    height: 17px;
    background-image: url("/${(props) => props.svgName}.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const RightItem = styled(Text).attrs({
  preset: "paragraph2Light",
  as: "a",
})`
  border-bottom: 2px solid transparent;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid white;
  }
`;

const NavTop = ({ setCloseMenu, setCloseAccount, setCloseSearch }) => (
  <Box as="nav" bg="black-2">
    <Container
      color="white"
      height="60px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      css={displayUp("sm")}
    >
      <Grid
        alignItems="center"
        gridGap="m"
        ml="m"
        gridTemplateColumns="repeat(3, auto)"
      >
        <Link href="/" passHref>
          <LeftItem svgName="nav">Москва</LeftItem>
        </Link>
        <Link href="/" passHref>
          <LeftItem svgName="mail" href="/">
            some-coffee@ya.ru
          </LeftItem>
        </Link>
        <Link href="/" passHref>
          <LeftItem svgName="phone" href="/">
            8 (800) 333-49-80
          </LeftItem>
        </Link>
      </Grid>
      <Grid
        alignItems="center"
        gridGap="m"
        ml="m"
        gridTemplateColumns="repeat(3, auto)"
      >
        <Link href="/" passHref>
          <RightItem>Доставка</RightItem>
        </Link>
        <Link href="/" passHref>
          <RightItem>Оплата</RightItem>
        </Link>
        <Link href="/" passHref>
          <RightItem>Контакты</RightItem>
        </Link>
      </Grid>
    </Container>
    <Container
      color="white"
      height="60px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      css={hideUp("sm")}
    >
      <Flex alignItems="center">
        <Flex
          width="35px"
          height="35px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          border="1px solid white"
          py="xs"
          onClick={setCloseMenu}
        >
          <HorizontalLine />
          <HorizontalLine />
          <HorizontalLine />
        </Flex>
        <Logo color="white" height={40} />
      </Flex>
      <Grid gridGap="xs" gridTemplateColumns="repeat(3, 1fr)">
        <SvgButton onClick={setCloseSearch}>
          <Search color="white" />
        </SvgButton>
        <SvgButton onClick={setCloseAccount}>
          <Profile color="white" />
        </SvgButton>
        <Link href={CART_PAGE} passHref>
          <Cart width={27} />
        </Link>
      </Grid>
    </Container>
  </Box>
);

interface NavbarMiddleProps {
  setCloseLogin: () => void;
}

const SvgWrapper = styled.button`
  color: var(--colors-black-3);
  cursor: pointer;
  background-color: transparent;
  border: none;

  :hover {
    color: var(--colors-red);
  }
`;

const SearchInput = styled.input`
  width: 170px;
  height: 30px;
  border: 1px solid var(--colors-black-5);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  padding: 0 var(--spacings-s);
  border-right: 1px solid transparent;

  ::placeholder {
    color: var(--colors-black-4);
  }

  :focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  width: 35px;
  height: 30px;
  border: none;
  background-color: var(--colors-red);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  line-height: 100%;
  cursor: pointer;

  :hover {
    // TODO: add color to theme
    background-color: var(--colors-red);
  }
`;

const NavMiddle: React.FC<NavbarMiddleProps> = ({ setCloseLogin }) => {
  const { logout, user } = useUser();

  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery("");
    router.push(`/search?text=${query}`);
  };

  return (
    <Container
      height="140px"
      width={{ lg: "1200px" }}
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      mx={{ _: "s", lg: "auto" }}
      css={displayUp("sm")}
    >
      <Flex as="form" onSubmit={handleSubmit}>
        <SearchInput
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по товарам"
        />
        <SearchButton type="submit">
          <Search color="white" width={15} />
        </SearchButton>
      </Flex>
      <Logo color="var(--colors-black-3)" />
      <Grid gridTemplateColumns="repeat(3, max-content)" gridColumnGap="xxl-3">
        {user && user.isLogged && (
          <SvgWrapper
            onClick={async () => {
              await logout();
              router.push("/");
            }}
          >
            <Text mr="xs" as="span">
              {user.firstName}
            </Text>
            <Logout />
          </SvgWrapper>
        )}
        {(!user || !user.isLogged) && (
          <SvgWrapper>
            <Profile onClick={setCloseLogin} />
          </SvgWrapper>
        )}
        {user && user.isLogged ? (
          <Link href={FAVORITES_PAGE} passHref>
            <SvgWrapper>
              <Heart />
            </SvgWrapper>
          </Link>
        ) : (
          <SvgWrapper onClick={setCloseLogin}>
            <Heart />
          </SvgWrapper>
        )}
        <Link href={CART_PAGE} passHref>
          <SvgWrapper as="a">
            <Cart />
          </SvgWrapper>
        </Link>
      </Grid>
    </Container>
  );
};

const NavBottomRoot = styled.ul`
  display: flex;
  margin: 0 var(--spacings-s);
  ${screen("lg")} {
    margin: 0 auto;
  }
  height: 60px;
  width: auto;
  max-width: 1200px;
  border-top: 1px solid var(--colors-black-5);
  border-bottom: 1px solid var(--colors-black-5);
  list-style: none;
  justify-content: space-around;
  align-items: center;
  ${displayUp("sm")}
`;

const StyledLink = styled(Text).attrs({
  preset: {
    _: "paragraph2",
    lg: "paragraph1",
  },
  as: "a",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 56px;
  color: var(--colors-black-3);
  text-decoration: none;
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  :hover {
    font-weight: 700;
    border-bottom: 2px solid var(--colors-black-3);
  }

  :before {
    content: attr(data-text);
    content: attr(data-text) / "";
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: 700;
  }
`;

const NavBottom = () => (
  <NavBottomRoot>
    {categories.map(({ name, slug }) => (
      <Box as="li" key={slug} height="100%">
        <Link href={buildCategoryPage(slug)} passHref>
          <StyledLink data-text={name}>{name}</StyledLink>
        </Link>
      </Box>
    ))}
  </NavBottomRoot>
);

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [closeAccount] = useState(true);
  const [closeSearch, setCloseSearch] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopupLogin isOpen={isOpen} onDismiss={() => setIsOpen(false)} />
      <PopupMenu close={closeMenu} handleClick={() => setCloseMenu(true)} />
      <PopupAccount
        close={closeAccount}
        handleClick={() => setIsOpen(true)}
        setCloseLogin={() => setIsOpen(false)}
      />
      <PopupSearch
        close={closeSearch}
        handleCloseSearch={() => {
          setCloseSearch(true);
        }}
      />
      <Box as="header">
        <NavTop
          setCloseSearch={() => setCloseSearch(false)}
          setCloseMenu={() => setCloseMenu(false)}
          setCloseAccount={() => setIsOpen(true)}
        />
        <NavMiddle setCloseLogin={() => setIsOpen(true)} />
        <NavBottom />
      </Box>
    </>
  );
};

export default memo(Navbar);
