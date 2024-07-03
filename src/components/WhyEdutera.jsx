import React, { useState, useEffect } from "react";
import ReasonIco1 from "/images/reason-ico-1.png";
import ReasonIco2 from "/images/reason-ico-2.png";
import ReasonIco3 from "/images/reason-ico-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import CarouselButton from "./Carousel/CarouselButton";

function WhyEdutera() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContent = [
    {
      img: ReasonIco1,
      title: "Fleksibilitas dan Kenyamanan",
      desc: "Belajar dari rumah dengan nyaman dan sesuai jadwal.",
    },
    {
      img: ReasonIco2,
      title: "Akses sumber daya dan teknologi Terdepan",
      desc: "Akses sumber daya dan alat digital canggih untuk belajar.",
    },
    {
      img: ReasonIco3,
      title: "Pendekatan personal dan dukungan terarah",
      desc: "Pembelajaran personal dengan dukungan intensif untuk setiap siswa.",
    },
  ];

  const renderCards = () =>
    cardContent.map((card, index) => (
      <div
        key={index}
        className="card-why flex bg-white rounded-2xl w-mobile-6 lg:w-width-4 lg:p-6 p-4 flex-col items-start gap-4"
      >
        <img src={card.img} className="size-20" alt="icon" />
        <h4 className="text-primary lg:text-2xl text-lg font-semibold">
          {card.title}
        </h4>
        <p className="text-neutral-2 text-base font-normal">{card.desc}</p>
      </div>
    ));

  return (
    <div className="why flex items-center lg:py-24 py-12 bg-background">
      <div className="why-container w-base-content flex flex-col gap-6 lg:gap-7 items-center justify-center mx-auto">
        <h2 className=" text-primary text-2xl lg:text-4xl font-semibold text-center">
          Kenapa
          <br />
          Edu Tera Insani?
        </h2>
        <div className="cards-why flex lg:flex-row xs:w-mobile-6 items-center lg:items-start gap-6 overflow-hidden">
          {isMobile ? (
            <Swiper
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              loop={false}
              modules={[Pagination, FreeMode, Navigation]}
              slidesPerView={1}
              className="w-width-sm relative"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {cardContent.map((card, index) => (
                <SwiperSlide key={index}>{renderCards()[index]}</SwiperSlide>
              ))}
              <div className="navigation-why flex justify-between w-width-3.2 mt-4 relative">
                <CarouselButton direction="prev" isVisible={activeIndex > 0} />
                <CarouselButton
                  direction="next"
                  isVisible={activeIndex < cardContent.length - 1}
                />
              </div>
            </Swiper>
          ) : (
            renderCards()
          )}
        </div>
      </div>
    </div>
  );
}

export default WhyEdutera;
