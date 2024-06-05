import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./CarouselButton.css";

function CarouselButton() {
  const swiper = useSwiper();

  return (
    <>
      <div
        className="button-navigation btn-prev absolute flex items-center justify-center p-4 size-14 z-10"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack className="size-6 text-white" />
      </div>
      <div
        className="button-navigation btn-next absolute flex items-center justify-center p-4 size-14 z-10"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward className="size-6 text-white" />
      </div>
    </>
  );
}

export default CarouselButton;
