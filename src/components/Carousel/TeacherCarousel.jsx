import React, { useState } from "react";
// import teachers from "../../databases/teachers.json";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const teachers = [
    {
      "imgSrc": "/images/teacher-avatar-1.png",
      "name": "Nur Indrawati Pary",
      "quote": "“Education in this era is about equipping individuals with the skills to navigate an ever-changing world. It's about fostering critical thinking, adaptability, and a lifelong love for learning that empowers people to not just succeed in their careers, but also to thrive as global citizens and thoughtful leaders.“",
      "tutor": "Tutor of Social Science"
    },
    {
      "imgSrc": "/images/teacher-avatar-2.png",
      "name": "Dr. Tri Yulinda",
      "quote": "“I believe that learning is not just about understanding the laws of nature but about cultivating a sense of wonder and curiosity. It's about empowering students to question the world around them, think critically, and discover the profound connections that shape our universe.“",
      "tutor": "Tutor of Natural and Math’s Science"
    },
    {
      "imgSrc": "/images/teacher-avatar-3.png",
      "name": "Dinah Handayani",
      "quote": "“True education builds strong character, fosters self-confidence, and inspires the courage to explore limitless potential.“",
      "tutor": "Tutor of English and Character Building Programs"
    },
  
    {
      "imgSrc": "/images/teacher-avatar-4.png",
      "name": "Momen Shawqi, M.Si.",
      "quote": "“True education builds strong character, fosters self-confidence, and inspires the courage to explore limitless potential.“",
      "tutor": "Tutor of Natural’s Science"
    },
    {
      "imgSrc": "/images/teacher-avatar-5.png",
      "name": "Yanuardi Syukur, M.Ant.",
      "quote": "“Tuhan menciptakan banyak misteri agar kita belajar. Untuk belajar, kita perlu lebih banyak melihat apa yang telah terjadi pada person-person, komunitas-komunitas, etnik-etnik, bangsa-bangsa, atau yang lebih luas adalah peradaban-peradaban dalam kehidupan manusia.“",
      "tutor": "Tutor of Social Knowledge"
    },
  
    {
      "imgSrc": "/images/teacher-avatar-6.png",
      "name": "Guntara Nugraha Adiana Poetra, Lc., M.A.",
      "quote": "“Learning Aqidah is important. Studying the Koran is equally important, it can water a barren heart and brighten a dim face.“",
      "tutor": "Tutor of Al-Quran and Arabic"
    },
    {
      "imgSrc": "/images/teacher-avatar-7.png",
      "name": "Dr. Ika Dewi, M.Kes.",
      "quote": "“True education empowers individuals to lead vibrant, healthy lives, fostering a foundation for lifelong wellness and resilience.”",
      "tutor": "Tutor of Sport and Healthy life style"
    },
    {
      "imgSrc": "/images/teacher-avatar-8.png",
      "name": "Diah",
      "quote": "“Berubah memang zona yang tidak nyaman bagi kebanyakan orang. Tapi perubahan adalah keniscayaan, dan kita harus mau beradaptasi cepat dengan kondisi zaman yang mudah berubah pula.“",
      "tutor": "Tutor of Writing Programs"
    },
    {
      "imgSrc": "/images/teacher-avatar-9.png",
      "name": "Tri Murniasari",
      "quote": "“Seni mengajarkan kita untuk melihat dunia dengan cara yang baru, merangkul kreativitas, dan berani menciptakan sesuatu yang unik di tengah perubahan yang terus-menerus.“",
      "tutor": "Tutor of Art and Inovation"
    },
  
    {
      "imgSrc": "/images/teacher-avatar-10.png",
      "name": "Dr. Jawad Abdullah Butt",
      "quote": "““In today's world, education must empower individuals to become stewards of our environment, driving positive change for future generations. In the digital age, learning must prioritize environmental principles. It's about instilling a deep respect for our planet and empowering individuals to drive sustainable change.“",
      "tutor": "Tutor of Natural’s Science"
    },
    {
      "imgSrc": "/images/teacher-avatar-11.png",
      "name": "Abdul Malik",
      "quote": "“Be the beacon of goodness if you can't find one. Learning is continuous growth-apply knowledge like the nourishing grains of rice, steadily and consistently“",
      "tutor": "Tutor of Character Building"
    }
  ];
  

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
        className=" w-base-content -ml-9 lg:ml-3"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <div className="teacher-card flex flex-col justify-between lg:-ml-[13px] ml-10 items-center px-6 pb-6 bg-white rounded-2xl relative text-center my-10">
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
        <div className="navigation-teacher-carousel ml-4 lg:-ml-3 flex justify-between w-width-3.2 absolute top-1/2 transform -translate-y-1/2 bg-red-500 -mt-52 lg:w-full">
          <CarouselButtonLg direction="prev" isVisible={activeIndex > 0} />
          <CarouselButtonLg
            direction="next"
            isVisible={
              isMobile
                ? activeIndex < teachers.length - 1
                : activeIndex < teachers.length - 4
            }
          />
        </div>
      </Swiper>
    </div>
  );
}

export default TeacherCarousel;
