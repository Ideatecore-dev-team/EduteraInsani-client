import React, { useState } from "react";
import teachers from "../../databases/teachers.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../Teacher.css";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import CarouselButton from "./CarouselButton";
import CarouselButtonLg from "./CarouselButtonLg";

function TeacherCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="teacher-cards flex items-center justify-center lg:items-start gap-6 lg:self-stretch flex-col relative">
      <Swiper
        freeMode={true}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        loop={false}
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
        className=" w-base-content -ml-10"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <div className="teacher-card flex flex-col justify-between ml-10 lg:ml-0 items-center px-6 pb-6 bg-white rounded-2xl relative text-center my-10">
              <img src={teacher.imgSrc} alt="" className="absolute" />
              <div className="card-t-content flex flex-col items-center gap-2 self-stretch">
                <h4 className=" text-lg lg:text-2xl text-primary font-semibold">
                  {teacher.name}
                </h4>
                <p className="text-base text-neutral-2">{teacher.quote}</p>
              </div>
              <p className="text-base text-primary font-semibold">
                {teacher.tutor}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="navigation-teacher-carousel ml-3 lg:ml-10 flex justify-between w-width-3.2 absolute top-1/2 transform -translate-y-1/2 bg-red-500 -mt-52 lg:w-full">
          <CarouselButtonLg direction="prev" isVisible={activeIndex > 0} />
          <CarouselButtonLg
            direction="next"
            isVisible={activeIndex < teachers.length - 1}
          />
        </div>
      </Swiper>
    </div>
  );
}

export default TeacherCarousel;
