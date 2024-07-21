import React from "react";
import ClassBanner from "/public/images/Class Banner.png";
import ClassBannerGold from "/public/images/Class Banner-gold.png";
import ButtonLink from "./Buttons/LinkButton";
import { GoDotFill } from "react-icons/go";

const AllClassComponent = ({ category }) => {
  const categoryClass = [
    {
      image_banner: ClassBanner,
      kelas: "Kelas 7 SMP",
      point: "Utk anak berusia 12 - 13 thn",
      price_smester: "700.000",
      price_first: "3.500.000",
    },
    {
      image_banner: ClassBanner,
      kelas: "Kelas 8 SMP",
      point: "Utk anak berusia 13 - 14 thn",
      price_smester: "765.000",
      price_first: "3.575.000",
    },
    {
      image_banner: ClassBanner,
      kelas: "Kelas 9 SMP",
      point: "Utk anak berusia 14 - 15 thn",
      price_smester: "765.000",
      price_first: "3.625.000",
    },
    {
      image_banner: ClassBannerGold,
      kelas: "Kelas 10 SMA",
      point: "Utk anak berusia 15 - 16 thn",
      price_smester: "765.000",
      price_first: "4.500.000",
    },
    {
      image_banner: ClassBannerGold,
      kelas: "Kelas 11 SMA",
      point: "Utk anak berusia 16 - 17 thn",
      price_smester: "765.000",
      price_first: "4.500.000",
    },
    {
      image_banner: ClassBannerGold,
      kelas: "Kelas 12 SMA",
      point: "Utk anak berusia 17 - 18 thn",
      price_smester: "765.000",
      price_first: "4.500.000",
    },
  ];

  const filteredClasses =
    category === 1
      ? categoryClass.filter((item) => item.kelas.includes("SMP"))
      : category === 2
      ? categoryClass.filter((item) => item.kelas.includes("SMA"))
      : categoryClass;

  return (
    <div className="digital-schooling-cards flex flex-wrap w-[342px] lg:w-[1152px] lg:justify-center items-center gap-6">
      {filteredClasses.map((category, index) => (
        <div
          key={index}
          className="digital-schooling-card w-width-4 bg-white rounded-2xl lg:shadow-xl "
        >
          <img src={category.image_banner} alt="card-banner" className="" />
          <div className="card-content flex p-6 flex-col items-start lg:gap-12 gap-[29.348px] self-stretch ">
            <div className="all-content flex flex-col items-start lg:gap-6 gap-4   self-stretch">
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
                  {category.price_smester}
                </h2>
              </div>
              <div className="payment flex flex-col items-start self-stretch ">
                <p className="lg:text-base text-sm font-normal text-neutral-2">
                  Pembayaran Pertama:
                </p>
                <h4 className="lg:text-2xl text-lg font-semibold text-secondary">
                  {category.price_first}
                </h4>
              </div>
            </div>
            <div className="buttons lg:flex flex-col items-start gap-3 self-stretch">
              <ButtonLink
                className="flex py-3 px-4 content-center items-center gap-2 self-stretch w-[288px]"
                caption="Konsultasi dulu"
                to="#"
                border={false}
                width={true}
                shadow={true}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClassComponent;
