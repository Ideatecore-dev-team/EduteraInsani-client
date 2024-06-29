import React, { useState, useEffect } from "react";
import RemoteIcon1 from "/images/Notes.png";
import RemoteIcon2 from "/images/Teacher.png";
import RemoteIcon3 from "/images/Brain.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import CarouselButton from "./Carousel/CarouselButton";

function RemoteLearning() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContent = [
    {
      img: RemoteIcon1,
      title: "Proyek Integratif untuk Kreativitas Tanpa Batas",
      desc: "Menggabungkan beberapa pelajaran menjadi satu proyek yang menarik. Melalui pendekatan ini, kami bertujuan agar siswa melepaskan kreativitasnya yang tak terbatas, mengatasi masalah dunia nyata, dan mendorong batas-batas mereka dengan memanfaatkan berbagai buku dan referensi tanpa batasan.",
    },
    {
      img: RemoteIcon2,
      title: "Guru Sebagai Motivator dan Konsultan",
      desc: "Guru akan berperan sebagai motivator dan konsultan, membimbing siswa dalam jalur yang benar untuk menyelesaikan semua proyek mereka.",
    },
    {
      img: RemoteIcon3,
      title: "Suasana Positif dengan Nilai Humanistik Islam",
      desc: "Menumbuhkan Suasana Positif dalam Pendidikan. Ini adalah tanggung jawab semua guru untuk membina suasana positif dan mengajar berdasarkan prinsip-prinsip humanistik Islam. Nilai-nilai ini harus menjadi bagian dari budaya Digital Campus Edu Tera Insani.",
    },
  ];

  const renderCards = () =>
    cardContent.map((card, index) => (
      <div
        key={index}
        className="card-why flex lg:flex-row flex-col bg-white rounded-2xl w-mobile-6 xs:h-[399px] lg:w-width-9 lg:p-6 p-4 items-start gap-4"
      >
        <img src={card.img} className="size-20" alt="icon" />
        <div className="flex-col gap-6 ">
          <h4 className="text-primary lg:text-2xl text-lg font-semibold w-56 lg:w-width-7 ">
            {card.title}
          </h4>
          <p className="text-neutral-2 text-base text-justify font-normal">
            {card.desc}
          </p>
        </div>
      </div>
    ));

  return (
    <div className="remote flex items-center lg:pb-24 pb-12 lg:flex-col lg:block bg-background">
      <div className="remote-container w-base-content flex flex-col gap-6 lg:gap-7 items-center justify-center mx-auto">
        <h2 className=" text-primary text-2xl lg:text-4xl font-semibold text-center">
          Pembelajaran Remote <br /> Learning
        </h2>
        <div className="card-remote flex bg-white rounded-2xl lg:text-4xl w-mobile-6 lg:w-width-9 lg:p-6 p-4 lg:flex-col items-start gap-4">
          <p className="text-neutral-2 text-base text-justify font-normal">
            Metode pembelajaran remote learning di Edu Tera Insani menggabungkan
            teknologi canggih dan pendekatan personal. Siswa mengikuti sesi
            interaktif melalui Zoom dengan guru ahli dan mengelola materi serta
            tugas melalui Google Classroom. Ditambah dengan kursus singkat dan
            perpustakaan multimedia interaktif, metode ini memastikan pengalaman
            belajar yang fleksibel dan komprehensif.
          </p>
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

export default RemoteLearning;
