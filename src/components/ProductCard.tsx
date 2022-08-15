import { memo, useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import Feedback from "./Feedback";
import ButtonAddToCart from "./ButtonAddToCart";
import { Box, Grid } from "../shared/system/Box";
import { screen } from "../shared/system/primitives";
import { Text } from "../shared/system/Text";
import { CloseLoginContext } from "../lib/closeLoginContext";
import { Heart } from "../shared/svgs";
import useUser from "../hooks/useUser";
import { buildProductPage } from "../lib/urlBuilder";

// TODO: fix types later
interface ProductCardProps {
  id: number;
  name?: string;
  slug: string;
  price?: number;
  className?: string;
  inCart: boolean;
  handleAddToCart: (id: number) => void;
  feedback?: any;
  handleToggleStarred?: (id: number) => void;
  favoritesIds?: number[];
}

interface StarredProps {
  classLabelName?: string;
  className?: string;
  isStarred: boolean | undefined;
  handleToggleStarred: () => void;
}

const StarredUI = styled(Box).attrs({
  className: "heart",
  color: "red",
  position: "absolute",
  top: "s",
  right: "s",
  background: "rgba(255, 255, 255, 0.9)",
  p: "xs",
  borderRadius: "5px",
  cursor: "pointer",
})`
  z-index: 5;
  cursor: pointer;
`;

const StarredText = styled(Text).attrs({
  color: "black-4",
  as: "span",
  preset: "caption",
  display: {
    _: "none",
    lg: "inline-block",
  },
  position: "absolute",
})`
  :hover {
    border-bottom: 1px dotted var(--colors-black-4);
  }
`;

// TODO: rewrite and reuse this component
const Starred: React.FC<StarredProps> = ({
  isStarred,
  handleToggleStarred,
}) => {
  const { setCloseLogin } = useContext(CloseLoginContext);

  const { user } = useUser();

  const callback = () => {
    if (user && user.isLogged) {
      handleToggleStarred();
    } else {
      setCloseLogin(false);
    }
  };

  return (
    <StarredUI onClick={callback}>
      <Heart />
      <StarredText as="span" preset="caption" color="black-4">
        {isStarred ? "Удалить из закладок" : "Добавить в закладки"}
      </StarredText>
    </StarredUI>
  );
};

const ProductCardRoot = styled(Grid).attrs({
  flexDirection: "column",
  p: "m",
  pt: "xxl-3",
  borderRadius: "5px",
  minHeight: "400px",
  mx: "xs",
  my: "xxl-3",
  gridGap: "xs",
  gridAutoRows: "max-content",
  position: "relative",
})`
  :hover {
    box-shadow: 0px 0px 15px 5px rgb(240, 240, 240);
  }

  // class is used for hover effect
  .heart {
    display: block;
  }

  ${screen("lg")} {
    .heart {
      display: none;
    }

    :hover .heart {
      display: block;
    }
  }
`;

const Title = styled(Text).attrs({
  as: "a",
  color: "black-3",
  preset: "paragraph2Light",
})`
  :hover {
    color: var(--colors-red);
  }
`;

const ProductImage = styled.img.attrs({
  width: "100%",
  height: "auto",
  display: "block",
})``;

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  name,
  price,
  inCart,
  handleAddToCart,
  id,
  feedback,
  handleToggleStarred,
  favoritesIds,
}) => {
  const link = buildProductPage(slug);
  return (
    <ProductCardRoot>
      <Starred
        isStarred={favoritesIds?.includes(id)}
        handleToggleStarred={() => {
          handleToggleStarred?.(id);
        }}
      />
      <Link href={link} passHref>
        <a>
          <ProductImage src={`${link}.jpg`} alt={name} />
        </a>
      </Link>
      <Feedback feedback={feedback} slug={slug} />
      <Link href={link} passHref>
        <Title as="a">{name}</Title>
      </Link>
      <Text preset="h3Bold" color="black-3">
        {price} руб.
      </Text>
      <ButtonAddToCart
        inCart={inCart}
        handleAddToCart={async () => handleAddToCart(id)}
      />
    </ProductCardRoot>
  );
};

export default memo(ProductCard);
