import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./CarouselButton.css";

function CarouselButtonNext() {
  const swiper = useSwiper();

  return (
    <>
      <div
        className="btn-next absolute flex items-center justify-center p-4 size-12 z-10"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward className="size-6 text-white" />
      </div>
    </>
  );
}

export default CarouselButtonNext;
