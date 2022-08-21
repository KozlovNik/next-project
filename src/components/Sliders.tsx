import React, { memo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import styled from "styled-components";
import { Product } from "@prisma/client";

import { Box, Grid } from "../shared/system/Box";
import TitleBlock from "./TitleBlock";
import { Text } from "../shared/system/Text";
import { screen } from "../shared/system/primitives";
import { navList } from "../constants";
import { buildCategoryPage } from "../lib/urlBuilder";
import ProductCard from "./ProductCard";
import { GetProductDataTypes } from "../lib/dataFunctions";
import { NextArrow, PrevArrow } from "../shared/svgs";
import { SVGWrapper } from "../shared/ui/Button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ImageSlideProps {
  slug: string;
  name: string;
}

interface SuggestionSliderProps {
  handleAddToCart: (id: number) => void;
  productData?: GetProductDataTypes;
  cartItems?: {
    id: number;
    quantity: number;
    product: Product;
  }[];
}

const MainSliderUI = styled(Swiper)`
  .swiper-slide img {
    display: block;
  }

  .swiper-pagination-bullet {
    width: 1em;
    height: 1em;
    background-color: white;
    margin: 5px;
    border-radius: 20px;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active,
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    opacity: 50%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    opacity: 30%;
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-pagination-bullet {
    color: white;
  }
`;

export const MainSlider = memo(() => (
  <MainSliderUI
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={25}
    slidesPerView={1}
    navigation
    pagination={{
      clickable: true,
    }}
    loop
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    className="main-slider"
  >
    <Box>
      {[1, 2, 3].map((i) => (
        <SwiperSlide key={i}>
          <Box bg="white" opacity="70%">
            {/* TODO: add lazyloading */}
            <img
              alt={`slide ${i}`}
              width="100%"
              height="100%"
              src={`/main-slider/${i}.jpg`}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Box>
  </MainSliderUI>
));

const ImageWrapper = styled(Box)`
  position: relative;

  :hover {
    opacity: 70%;
  }

  img {
    width: 100%;
    display: block;
    opacity: 0.8;
  }

  :after,
  :before {
    content: "";
    background-color: white;
    z-index: 15;
    position: absolute;
    transition: 0.2s ease-in-out;
    visibility: hidden;
    top: 50%;
    left: 50%;
  }

  :hover:before,
  :hover:after {
    visibility: visible;
  }

  :after {
    height: 1px;
    width: 80%;
    transform: translate(-50%, 50%);
  }

  :before {
    height: 80%;
    width: 1px;
    transform: translate(-50%, -50%);
  }

  :hover:after {
    width: 20%;
  }

  :hover:before {
    height: 20%;
  }
`;

const Anchor = styled.a`
  :hover {
    color: var(--colors-red);
  }
`;

const CategorySlide: React.FC<ImageSlideProps> = memo(({ name, slug }) => (
  <Link href={buildCategoryPage(slug)} passHref>
    <Anchor>
      <ImageWrapper>
        <img src={`/category-slider/${slug}.jpg`} alt={name} />
      </ImageWrapper>
      <Text
        preset={{ _: "paragraph1Thin", lg: "h3Thin" }}
        textAlign="center"
        my={{ _: "xs", lg: "xxl-2" }}
      >
        {name}
      </Text>
    </Anchor>
  </Link>
));

const CategorySliderUI = styled(Swiper)`
  position: static;

  .swiper-button-prev,
  .swiper-button-next {
    opacity: 30%;
    color: white;
  }

  ${screen("lg")} {
    .swiper-button-prev {
      left: -40px;
    }

    .swiper-button-next {
      right: -40px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: black;
    }
  }
`;

export const CategorySlider: React.FC = memo(() => (
  <Box maxWidth="1000px" mx="auto" position="relative">
    <TitleBlock title="КАТЕГОРИИ" />
    <CategorySliderUI
      modules={[Navigation]}
      navigation
      slidesPerView={3}
      spaceBetween={4}
      breakpoints={{
        768: {
          spaceBetween: 8,
        },
      }}
      loop
    >
      {navList.map(({ name, slug }: ImageSlideProps) => (
        <SwiperSlide key={slug}>
          <CategorySlide key={slug} name={name} slug={slug} />
        </SwiperSlide>
      ))}
    </CategorySliderUI>
  </Box>
));

const SuggestionSliderUI = styled(Swiper).attrs({
  py: "xs",
})`
  max-width: 1000px;
`;

export const SuggestionSlider: React.FC<SuggestionSliderProps> = ({
  productData,
  cartItems,
  handleAddToCart,
}) => (
  <>
    <TitleBlock title="РЕКОМЕНДАЦИИ">
      <Grid ml="xs" gridGap="xs" gridTemplateColumns="repeat(2, auto)">
        <SVGWrapper color="black-3" hoverColor="red" className="prevEl">
          <PrevArrow />
        </SVGWrapper>
        <SVGWrapper color="black-3" hoverColor="red" className="nextEl">
          <NextArrow />
        </SVGWrapper>
      </Grid>
    </TitleBlock>
    <SuggestionSliderUI
      modules={[Navigation]}
      navigation={{
        nextEl: ".nextEl",
        prevEl: ".prevEl",
      }}
      slidesPerView={1}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        728: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {productData &&
        productData.products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              handleAddToCart={handleAddToCart}
              inCart={cartItems?.some((i) => i.product.id === product.id)}
              {...product}
            />
          </SwiperSlide>
        ))}
    </SuggestionSliderUI>
  </>
);
