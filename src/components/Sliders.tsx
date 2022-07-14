import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box } from "../shared/system/Box";

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

export const MainSlider = () => (
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
);
