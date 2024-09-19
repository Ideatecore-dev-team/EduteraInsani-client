import React, { useState, useEffect } from "react";
import Mask1 from "/images/mask-1.png";
import Mask2 from "/images/mask-2.png";
import Mask3 from "/images/mask-3.png";
import OuterMask1 from "/images/outermask-1.png";
import OuterMask2 from "/images/outermask-2.png";
import OuterMask3 from "/images/outermask-3.png";
import OuterMask4 from "/images/outermask-4.png";
import "./OurProgramComponents.css";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import CarouselButton from "./Carousel/CarouselButton";

function OurProgram() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const path = location.pathname;
  let padding = "";
  let additionalContent = null;

  if (path === "/about-us") {
    padding = "py-24";
    additionalContent = (
      <div className="additional-content flex lg:w-width-8 w-[310px] lg:p-6 p-4 justify-center items-center xs:self-stretch bg-white rounded-2xl">
        <p className="text-center text-base text-neutral-2 font-normal">
          Edu Tera Insani menawarkan jalur pembelajaran yang dipersonalisasi
          untuk <span className=" font-semibold">Junior Highschool </span>dan{" "}
          <span className=" font-semibold">Senior Highschool </span>, dilengkapi
          dengan
          <span className=" font-semibold"> Short Course </span>yang menarik
          seperti bahasa asing, seni, menulis, dan lain-lain untuk meningkatkan
          pengalaman pendidikan mereka.
        </p>
      </div>
    );
  } else {
    padding = "lg:pb-24 pb-12";
    additionalContent = <div className="additional-content hidden"></div>;
  }

  const [isMobile, setIsMobile] = useState(false);

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
      mask: Mask1,
      Outermask: [OuterMask1],
      omask: ["omask-1 absolute"],
      title: "Junior Highschool",
      desc: "Digital Schooling untuk kelas.",
      class: "7-9",
    },
    {
      mask: Mask2,
      Outermask: [OuterMask2],
      omask: ["omask-2 absolute"],
      title: "Senior Highschool",
      desc: "Digital Schooling untuk kelas.",
      class: "10-12",
    },
    {
      mask: Mask3,
      Outermask: [OuterMask3, OuterMask4],
      omask: ["omask-3 absolute", "omask-4 absolute"],
      title: "Short Course",
      desc: "Kelas tambahan untuk bahasa asing dan lainnya.",
    },
  ];

  const renderCards = () =>
    cardContent.map((card, index) => (
      <div className="program-card bg-white rounded-2xl flex lg:w-width-3 w-width-3.2 px-6 py-4 flex-col items-center gap-4 lg:mt-6 xs:mt-4">
        <div
          key={index}
          className="card-title flex-col flex gap-1 self-stretch text-center items-center"
        >
          <div className="mascot-mask relative">
            <img src={card.mask} alt="" />
            <img src={card.Outermask[0]} className={card.omask[0]} alt="" />
            <img src={card.Outermask[1]} className={card.omask[1]} alt="" />
          </div>
          <h4 className=" text-primary text-2xl font-semibold">{card.title}</h4>
          <p className=" text-neutral-2 text-base font-normal">{card.desc}</p>
        </div>
        {card.class && (
          <div className="class flex py-1 px-4 justify-center items-center">
            <p className="text-secondary text-base font-normal">{card.class}</p>
          </div>
        )}
      </div>
    ));

  return (
    <div className={`our-program flex items-center bg-background ${padding}`}>
      <div className="program-container mx-auto w-base-content flex flex-col items-center gap-4">
        <div className="program title flex flex-col gap-6 items-center">
          <h2 className="text-primary lg:text-3xl text-2xl font-semibold ">
            Program Kami
          </h2>
          {additionalContent}
        </div>

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
              className="w-[342px] relative"
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

export default OurProgram;
