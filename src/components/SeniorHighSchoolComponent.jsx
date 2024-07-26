import React from "react";
import ClassBanner from "../../public/images/Class Banner.png";
import ClassBannerGold from "../../public/images/Class Banner-gold.png";
import ButtonLink from "./Buttons/LinkButton";
import { GoDotFill } from "react-icons/go";

const SeniorHighSchoolComponent = function () {
  const categoryClass = [
    {
      image_banner: ClassBannerGold,
      kelas: "Kelas 10 SMA",
      price_smester: "765.000",
      price_first: "4.500.000",
    },
    {
      image_banner: ClassBannerGold,
      kelas: "Kelas 11 SMA",
      price_smester: "765.000",
      price_first: "4.500.000",
    },
    {
      image_banner: ClassBannerGold,
      kelas: "Kelas 12 SMA",
      price_smester: "765.000",
      price_first: "4.500.000",
    },
  ];
  return (
    <>
      <div className="Digital-schooling-Contener  flex flex-wrap w-[342px] lg:w-[1152px] lg:justify-center items-center gap-6">
        {categoryClass.map((category) => {
          return (
            <div className="Digital-schooling-card w-width-4 lg:bg-white rounded-2xl lg:shadow-xl ">
              <img src={category.image_banner} alt="" />
              <div className="card-content flex p-6 flex-col items-start gap-12 self-stretch ">
                <div className="all-content flex flex-col items-start gap-6 self-stretch">
                  <div className="kelas flex-col lg:flex  items-start self-stretch">
                    <h3 className="text-3xl font-semibold text-primary">
                      {category.kelas}
                    </h3>
                    <h3 className="text-2xl w-full font-semibold text-primary">
                      T.A Angkatan 2024/2025
                    </h3>
                    <ul className="list-none mt-6">
                      <li className=" flex gap-2 mb-3">
                        <GoDotFill className="  text-secondary text-xs" />
                        <p className=" text-base text-neutral-2 ">
                          Utk anak berusia 12 - 13 thn
                        </p>
                      </li>
                      <li className=" flex gap-2">
                        <GoDotFill className="  text-secondary text-xs" />
                        <p className=" text-base text-neutral-2">
                          Digital Schooling
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="semester flex flex-col items-start lg:gap-1 self-stretch">
                    <p className="text-base font-normal text-neutral-2">
                      Bayaran/Semester
                    </p>
                    <h2 className="lg:text-4xl text-2xl font-semibold text-primary">
                      {category.price_smester}
                    </h2>
                  </div>
                  <div className="bayaran -mt-3 lg:-mt-0 flex flex-col items-start self-stretch ">
                    <p className="text-base font-normal text-neutral-2">
                      Pembayaran Pertama:
                    </p>
                    <h4 className="lg:text-2xl text-lg font-semibold text-secondary">
                      {category.price_first}
                    </h4>
                  </div>
                </div>
                <div className="buttons lg:flex hidden flex-col items-start gap-3 self-stretch">
                  <ButtonLink
                    className="flex py-3 px-4 content-center items-center gap-2 self-stretch w-[288px]"
                    caption="Detail Kelas"
                    to="#"
                    border={false}
                    width={true}
                    shadow={true}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SeniorHighSchoolComponent;
