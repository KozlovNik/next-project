import { useState, memo } from "react";
import styled from "styled-components";
import { useMachine } from "@xstate/react";
import Link from "next/link";
import { useRouter } from "next/router";
import PopupAccount from "./PopupAccount";
import { PopupMenu } from "../shared/PopupMenu";
import PopupSearch from "./PopupSearch";
import { LoginForm } from "../shared/LoginForm";
import { Box, Grid, Flex } from "../shared/system/Box";
import { Container } from "../shared/Container";
import { displayUp, hideUp, screen } from "../shared/system/primitives";
import { Cart, Heart, Logo, Logout, Profile, Search } from "../shared/svgs";
import {
  CART_PAGE,
  FAVORITES_PAGE,
  INDEX_PAGE,
} from "../shared/constants/routes";
import { Text } from "../shared/system/Text";
import useUser from "../hooks/useUser";
import { buildCategoryPage } from "../lib/urlBuilder";
import { loginStateMachine } from "../shared/stateMachines/loginStateMachine";
import { Modal } from "../shared/Modal";
import { SVGWrapper } from "../shared/ui/Button";
import { navList } from "../constants";

const SvgButton = styled.button`
  background-color: transparent;
  border: none;
`;

const HorizontalLine = styled(Box)`
  width: 20px;
  height: 0.5px;
  background-color: white;
`;

const LeftItem = styled(Link).attrs({
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

const RightItem = styled(Link).attrs({
  preset: "paragraph2Light",
  as: "a",
})`
  border-bottom: 2px solid transparent;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid white;
  }
`;

const NavTop = ({ setCloseMenu, setOpenAccount, setCloseSearch }) => (
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
        <LeftItem href="/" svgName="nav">
          Москва
        </LeftItem>
        <LeftItem svgName="mail" href="/">
          some-coffee@ya.ru
        </LeftItem>
        <LeftItem svgName="phone" href="/">
          8 (800) 333-49-80
        </LeftItem>
      </Grid>
      <Grid
        alignItems="center"
        gridGap="m"
        ml="m"
        gridTemplateColumns="repeat(3, auto)"
      >
        <RightItem href="/">Доставка</RightItem>
        <RightItem href="/">Оплата</RightItem>
        <RightItem href="/">Контакты</RightItem>
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
        <Link href={INDEX_PAGE}>
          <Logo color="white" height={40} />
        </Link>
      </Flex>
      <Grid gridGap="xs" gridTemplateColumns="repeat(3, 1fr)">
        <SvgButton onClick={setCloseSearch}>
          <Search color="white" />
        </SvgButton>
        <SvgButton onClick={setOpenAccount}>
          <Profile color="white" />
        </SvgButton>
        <Link href={CART_PAGE}>
          <Cart width={27} />
        </Link>
      </Grid>
    </Container>
  </Box>
);

interface NavbarMiddleProps {
  setCloseLogin: () => void;
}

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
      <Link href={INDEX_PAGE}>
        <Logo color="var(--colors-black-3)" />
      </Link>
      <Grid gridTemplateColumns="repeat(3, max-content)" gridColumnGap="xxl-3">
        {user?.isLogged && (
          <SVGWrapper
            color="black-3"
            hoverColor="red"
            onClick={async () => {
              await logout();
              router.push(INDEX_PAGE);
            }}
          >
            <Text mr="xs" as="span">
              {user.firstName}
            </Text>
            <Logout />
          </SVGWrapper>
        )}
        {(!user || !user.isLogged) && (
          <SVGWrapper color="black-3" hoverColor="red">
            <Profile onClick={setCloseLogin} />
          </SVGWrapper>
        )}
        {user && user.isLogged ? (
          <Link href={FAVORITES_PAGE}>
            <SVGWrapper color="black-3" hoverColor="red">
              <Heart />
            </SVGWrapper>
          </Link>
        ) : (
          <SVGWrapper color="black-3" hoverColor="red" onClick={setCloseLogin}>
            <Heart />
          </SVGWrapper>
        )}
        <Link href={CART_PAGE}>
          <SVGWrapper color="black-3" hoverColor="red">
            <Cart />
          </SVGWrapper>
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
    {navList.map(({ name, slug }) => (
      <Box as="li" key={slug} height="100%">
        <Link href={buildCategoryPage(slug)}>
          <StyledLink data-text={name}>{name}</StyledLink>
        </Link>
      </Box>
    ))}
  </NavBottomRoot>
);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [closeAccount] = useState(true);
  const [closeSearch, setCloseSearch] = useState(true);
  const [state, send] = useMachine(loginStateMachine, {
    context: {},
  });

  return (
    <>
      <Modal isOpen={!state.matches("idle")} onDismiss={() => send("DISMISS")}>
        <LoginForm
          login={(user) => send("SIGN_IN", { data: user })}
          onDismiss={() => send("DISMISS")}
          loading={state.matches("authenticating")}
          error={state.context.error}
        />
      </Modal>

      <PopupMenu isOpen={openMenu} handleClick={() => setOpenMenu(false)} />
      <PopupAccount
        close={closeAccount}
        handleClick={() => send("OPEN_MODAL")}
        setCloseLogin={() => send("DISMISS")}
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
          setCloseMenu={() => setOpenMenu(true)}
          setOpenAccount={() => send("OPEN_MODAL")}
        />
        <NavMiddle setCloseLogin={() => send("OPEN_MODAL")} />
        <NavBottom />
      </Box>
    </>
  );
};

export default memo(Navbar);
