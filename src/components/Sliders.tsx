import React, { memo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import styled from "styled-components";

import { Box } from "../shared/system/Box";
import TitleBlock from "./TitleBlock";
import { Text } from "../shared/system/Text";
import { screen } from "../shared/system/primitives";
import { navList } from "../constants";
import { buildCategoryPage } from "../lib/urlBuilder";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ImageSlideProps {
  slug: string;
  name: string;
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

const ImageSlide: React.FC<ImageSlideProps> = memo(({ name, slug }) => (
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
          <ImageSlide key={slug} name={name} slug={slug} />
        </SwiperSlide>
      ))}
    </CategorySliderUI>
  </Box>
));
