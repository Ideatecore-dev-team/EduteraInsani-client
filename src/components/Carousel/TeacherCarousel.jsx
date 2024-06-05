import React from "react";
import teachers from "../../databases/teachers.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../Teacher.css";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

function TeacherCarousel() {
  return (
    <div className="teacher-cards flex items-start gap-6 self-stretch flex-col">
      <Swiper
        freeMode={true}
        pagination={true}
        navigation={true}
        slidesPerView={4}
        spaceBetween={24}
        modules={[Pagination, FreeMode, Navigation]}
        className=" w-base-content"
      >
        {teachers.map((teachers, index) => (
          <SwiperSlide key={index}>
            <div className="teacher-card flex flex-col justify-between items-center px-6 pb-6 bg-white rounded-2xl relative text-center my-10">
              <img src={teachers.imgSrc} alt="" className="absolute" />
              <div className="card-t-content flex flex-col items-center gap-2 self-stretch">
                <h4 className="text-2xl text-primary font-semibold">
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
      </Swiper>
    </div>
  );
}

export default TeacherCarousel;
