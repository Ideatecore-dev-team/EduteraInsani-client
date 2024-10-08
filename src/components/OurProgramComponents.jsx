import React, { useState, useEffect } from "react";
import Mask1 from "/images/mask-1.png";
// import Mask2 from "/images/mask-2.png";
import Mask3 from "/images/mask-3.png";
import Mask4 from "/images/mask-4.png";
import OuterMask1 from "/images/outermask-1.png";
// import OuterMask2 from "/images/outermask-2.png";
import OuterMask3 from "/images/outermask-3.png";
import OuterMask4 from "/images/outermask-4.png";
import OuterMask5 from "/images/outermask-5.png";
import "./OurProgramComponents.css";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import CarouselButton from "./Carousel/CarouselButton";
import ButtonLink from "./Buttons/LinkButton";

function OurProgram() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const path = location.pathname;
  let padding = "";
  let additionalContent = null;

  if (path === "/about-us") {
    padding = "lg:py-24 py-12";
    // additionalContent = (
    //   <div className="additional-content flex lg:w-width-8 w-[310px] lg:p-6 p-4 justify-center items-center xs:self-stretch bg-white rounded-2xl">
    //     <p className="text-center text-base text-neutral-2 font-normal">
    //     Edu Tera Insani menawarkan program-program menarik seperti 
    //     <span className=" font-semibold">Teacher Workshop</span> 
    //     untuk pengajar meningkatkan keahlian mengajar, <span className=" font-semibold">
    //       Digital Course</span> yang mencakup kursus bahasa Inggris, Prancis, Arab, dan 
    //       Jepang, serta <span className=" font-semibold">Bimbel Online</span> yang menyediakan 
    //       bimbingan belajar bagi siswa dalam menghadapi ujian dan tugas sekolah.
    //     </p>
    //   </div>
    // );
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
      mask: Mask4,
      Outermask: [OuterMask5],
      omask: ["omask-5 absolute"],
      title: "Teacher Workshop",
      desc: "Untuk pengajar meningkatkan keahlian mengajar",
    },
    {
      mask: Mask3,
      Outermask: [OuterMask3, OuterMask4],
      omask: ["omask-3 absolute", "omask-4 absolute"],
      title: "Digital Course",
      desc: "Kursus untuk bahasa Inggris, Prancis, Arap dan Jepang",
    },
    {
      mask: Mask1,
      Outermask: [OuterMask1],
      omask: ["omask-1 absolute"],
      title: "Bimbel Online",
      desc: "Bimbingan belajar untuk siswa menghadapi ujian dan tugas sekolah",
    },
  ];

  const renderCards = () =>
    cardContent.map((card, index) => (
      <div className="program-card bg-white rounded-2xl flex lg:w-width-3 w-width-3.2 px-6 py-4 flex-col items-center gap-4 xs:mt-4">
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
    ))

  return (
    <div className={`our-program flex items-center bg-background ${padding}`}>
      <div className="program-container mx-auto lg:w-[956px] w-[342px] flex flex-col items-center gap-12">
        <div className="program title flex flex-col gap-6 items-center">
          <h2 className="text-primary lg:text-4xl text-2xl font-semibold ">
            Program Kami
          </h2>
          {additionalContent}
        </div>
        <div className="additional-content flex lg:w-width-8 w-[342px] lg:p-6 p-4 justify-center items-center xs:self-stretch bg-white rounded-2xl">
        <p className="text-center text-base text-neutral-2 font-normal">
        Edu Tera Insani menawarkan program-program menarik seperti 
        <span className=" font-semibold">Teacher Workshop</span> 
        untuk pengajar meningkatkan keahlian mengajar, <span className=" font-semibold">
          Digital Course</span> yang mencakup kursus bahasa Inggris, Prancis, Arab, dan 
          Jepang, serta <span className=" font-semibold">Bimbel Online</span> yang menyediakan 
          bimbingan belajar bagi siswa dalam menghadapi ujian dan tugas sekolah.
        </p>
        </div>
        <div className="cards-buttons flex flex-col items-center gap-6 self-stretch">
          <div className="cards-why flex lg:flex-row xs:w-mobile-6 items-center lg:items-start gap-6 lg:gap-[73px] overflow-hidden">
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
          <div className="program-buttons flex items-start gap-3">
            <ButtonLink border={false} caption="Lihat Lebih Lanjut" to="/ourprogram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.749 12.75L3.24926 12.75L3.24926 11.25L20.749 11.25L20.749 12.75Z"
                  fill="#FFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z"
                  fill="#FFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z"
                  fill="#FFF"
                />
              </svg>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProgram;
