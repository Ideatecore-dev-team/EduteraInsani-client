import React from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./CarouselButton.css";

function CarouselButton({ direction, isVisible }) {
  const swiper = useSwiper();

  const visibilityClass = isVisible ? "visible" : "hidden";

  return (
    <>
      {direction === "prev" && (
        <div
          className={`button-navigation btn-prev absolute flex items-center justify-center p-4 size-12 lg:size-14 z-10 right-0 ${visibilityClass}`}
          onClick={() => swiper.slidePrev()}
        >
          <IoIosArrowBack className="size-6 text-white" />
        </div>
      )}
      <div className=""></div>
      {direction === "next" && (
        <div
          className={`button-navigation btn-next absolute flex items-center justify-center p-4 size-12 lg:size-14 z-10 left-0 ${visibilityClass}`}
          onClick={() => swiper.slideNext()}
        >
          <IoIosArrowForward className="size-6 text-white" />
        </div>
      )}
    </>
  );
}

export default CarouselButton;
