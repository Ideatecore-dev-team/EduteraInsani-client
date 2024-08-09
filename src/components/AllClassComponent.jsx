import React, { useState, useEffect } from "react";
import ClassBanner from "/public/images/Class Banner.png";
import ClassBannerGold from "/public/images/Class Banner-gold.png";
import ButtonLink from "./Buttons/LinkButton";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const AllClassComponent = ({ category }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categoryClass = [
    {
      id: 1,
      image_banner: ClassBanner,
      kelas: "Kelas 7 SMP",
      point: "Utk anak berusia 12 - 13 thn",
      price_semester: 700000,
      price_pendaftaran: 3500000,
    },
    {
      id: 2,
      image_banner: ClassBanner,
      kelas: "Kelas 8 SMP",
      point: "Utk anak berusia 13 - 14 thn",
      price_semester: 765000,
      price_pendaftaran: 3575000,
    },
    {
      id: 3,
      image_banner: ClassBanner,
      kelas: "Kelas 9 SMP",
      point: "Utk anak berusia 14 - 15 thn",
      price_semester: 765000,
      price_pendaftaran: 3625000,
    },
    {
      id: 4,
      image_banner: ClassBannerGold,
      kelas: "Kelas 10 SMA",
      point: "Utk anak berusia 15 - 16 thn",
      price_semester: 765000,
      price_pendaftaran: 4500000,
    },
    {
      id: 5,
      image_banner: ClassBannerGold,
      kelas: "Kelas 11 SMA",
      point: "Utk anak berusia 16 - 17 thn",
      price_semester: 765000,
      price_pendaftaran: 4500000,
    },
    {
      id: 6,
      image_banner: ClassBannerGold,
      kelas: "Kelas 12 SMA",
      point: "Utk anak berusia 17 - 18 thn",
      price_semester: 765000,
      price_pendaftaran: 4500000,
    },
  ];

  function formatPrice(price) {
    console.log(price);
    return price.toLocaleString("id-ID").replace(/,/g, ".")
  }


  const filteredClasses =
    category === 1
      ? categoryClass.filter((item) => item.kelas.includes("SMP"))
      : category === 2
      ? categoryClass.filter((item) => item.kelas.includes("SMA"))
      : categoryClass;

  return (
    <div className="digital-schooling-cards flex flex-wrap w-[14.1875rem] lg:w-[1152px] lg:justify-center items-center gap-6 shadow-digitalSchooling">
      {isMobile ? (
        <Swiper
          spaceBetween={25}
          slidesPerView={0.9}
          centeredSlides={true}
          modules={[Navigation, FreeMode]}
          className=" w-full "
        >
          {filteredClasses.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="digital-schooling-card w-full bg-white rounded-2xl lg:shadow-xl">
                <img
                  src={category.image_banner}
                  alt="card-banner"
                  className="w-full"
                />
                <div className="card-content flex p-6 flex-col items-start lg:gap-12 gap-[29.348px] self-stretch">
                  <div className="all-content flex flex-col items-start lg:gap-6 gap-4 self-stretch">
                    <div className="kelas flex-col lg:flex items-start self-stretch">
                      <h3 className="text-lg lg:text-3xl font-semibold text-primary">
                        {category.kelas}
                      </h3>
                      <h3 className="lg:text-2xl text-base w-full font-semibold text-primary">
                        T.A Angkatan 2024/2025
                      </h3>
                    </div>
                    <div className="kriteria flex flex-col items-start gap-2">
                      <div className="point-1 text-xs lg:text-base flex items-center gap-2">
                        <GoDotFill className="text-secondary" />
                        <p>{category.point}</p>
                      </div>
                      <div className="point-1 text-xs lg:text-base flex items-center gap-2">
                        <GoDotFill className="text-secondary" />
                        <p>Digital Schooling</p>
                      </div>
                    </div>
                    <div className="semester flex flex-col items-start lg:gap-1 self-stretch">
                      <p className="lg:text-base text-sm font-normal text-neutral-2">
                        Bayaran/Semester
                      </p>
                      <h2 className="lg:text-4xl text-2xl font-semibold text-primary">
                      Rp{formatPrice(category.price_semester)}
                      </h2>
                    </div>
                    <div className="payment flex flex-col items-start self-stretch">
                      <p className="lg:text-base text-sm font-normal text-neutral-2">
                        Pembayaran Pertama:
                      </p>
                      <h4 className="lg:text-2xl text-lg font-semibold text-secondary">
                      Rp{formatPrice(category.price_pendaftaran)}
                      </h4>
                    </div>
                  </div>
                  <div className="buttons lg:flex flex-col items-start gap-3 self-stretch">
                    <ButtonLink
                      className="flex py-3 px-4 content-center items-center gap-2 self-stretch w-[288px]"
                      caption="Detail Kelas"
                      to="/detail-class"
                      border={false}
                      width={true}
                      shadow={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        filteredClasses.map((category) => (
          <div
            key={category.id}
            className="digital-schooling-card w-width-4 bg-white rounded-2xl shadow-digitalSchooling"
            // style={{ boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <img
              src={category.image_banner}
              alt="card-banner"
              className="w-full"
            />
            <div className="card-content flex p-6 flex-col items-start lg:gap-12 gap-[29.348px] self-stretch">
              <div className="all-content flex flex-col items-start lg:gap-6 gap-4 self-stretch">
                <div className="kelas flex-col lg:flex items-start self-stretch">
                  <h3 className="text-lg lg:text-3xl font-semibold text-primary">
                    {category.kelas}
                  </h3>
                  <h3 className="lg:text-2xl text-base w-full font-semibold text-primary">
                    T.A Angkatan 2024/2025
                  </h3>
                </div>
                <div className="kriteria flex flex-col items-start gap-2">
                  <div className="point-1 text-xs lg:text-base flex items-center gap-2">
                    <GoDotFill className="text-secondary" />
                    <p>{category.point}</p>
                  </div>
                  <div className="point-1 text-xs lg:text-base flex items-center gap-2">
                    <GoDotFill className="text-secondary" />
                    <p>Digital Schooling</p>
                  </div>
                </div>
                <div className="semester flex flex-col items-start lg:gap-1 self-stretch">
                  <p className="lg:text-base text-sm font-normal text-neutral-2">
                    Bayaran/Semester
                  </p>
                  <h2 className="lg:text-4xl text-2xl font-semibold text-primary">
                  Rp{formatPrice(category.price_semester)}
                  </h2>
                </div>
                <div className="payment flex flex-col items-start self-stretch">
                  <p className="lg:text-base text-sm font-normal text-neutral-2">
                    Pembayaran Pertama:
                  </p>
                  <h4 className="lg:text-2xl text-lg font-semibold text-secondary">
                  Rp{formatPrice(category.price_pendaftaran)}
                  </h4>
                </div>
              </div>
              <div className="buttons lg:flex flex-col items-start gap-3 self-stretch">
                <ButtonLink
                  className="flex py-3 px-4 content-center items-center gap-2 self-stretch w-[288px]"
                  caption="Detail Kelas"
                  to="/detail-class"
                  border={false}
                  width={true}
                  shadow={true}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllClassComponent;
