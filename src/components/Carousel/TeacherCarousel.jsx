import React from "react";
import teachers from "../../databases/teachers.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../Teacher.css";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import CarouselButton from "./CarouselButton";

function TeacherCarousel() {
  return (
    <div className="teacher-cards flex items-center justify-center lg:items-start gap-6 lg:self-stretch flex-col relative">
      <Swiper
        freeMode={true}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, FreeMode, Navigation]}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          410: {
            slidesPerView: 1,
            centeredSlides: true,
          },
        }}
        className=" w-base-content"
      >
        {teachers.map((teachers, index) => (
          <SwiperSlide key={index}>
            <div className="teacher-card flex flex-col justify-between items-center px-6 pb-6 bg-white rounded-2xl relative text-center my-10">
              <img src={teachers.imgSrc} alt="" className="absolute" />
              <div className="card-t-content flex flex-col items-center gap-2 self-stretch">
                <h4 className=" text-lg lg:text-2xl text-primary font-semibold">
                  {teachers.name}
                </h4>
                <p className="text-base text-neutral-2">{teachers.quote}</p>
              </div>
              <p className="text-base text-primary font-semibold">
                {teachers.tutor}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <CarouselButton />
      </Swiper>
    </div>
  );
}

export default TeacherCarousel;
