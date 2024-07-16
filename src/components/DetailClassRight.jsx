import React from "react";
import ClassBanner from "../../public/images/Class Banner.png";
import CopyIcon from "../../public/images/IoIosCopy.png";
import ButtonLink from "./Buttons/LinkButton";

const DetailClassHeroPersyaratanSection = function () {
  return (
    <div className="right-container flex flex-col items-start gap-6">
      <div className="program-card flex flex-col items-start rounded-2xl bg-white shadow-xl">
        <img src={ClassBanner} alt="" />
        <div className="card-content flex p-6 flex-col items-start gap-12 self-stretch rounded-2xl bg-white shadow-xl">
          <div className="all-content flex flex-col items-start gap-6 self-stretch">
            <div className="kelas flex flex-col items-start self-stretch">
              <h3 className="text-3xl font-semibold text-primary">
                  Kelas 7 SMP
              </h3>
              <h3 className="text-xl w-full font-semibold text-primary">
                  T.A Angkatan 2024/2025
              </h3>
            </div>
            <div className="semester flex flex-col items-start gap-1 self-stretch">
              <p className="text-base font-normal text-neutral-2">
                  Bayaran/Semester
              </p>
              <h2 className="text-4xl font-semibold text-primary">
                  Rp 700.000
              </h2>
            </div>
            <div className="bayaran flex flex-col items-start self-stretch ">
              <p className="text-base font-normal text-neutral-2">
                  Pembayaran Pertama:
              </p>
              <h4 className="text-2xl font-semibold text-secondary">
                  Rp 3.500.000
              </h4>
            </div>
          </div>
          <div className="buttons flex flex-col items-start gap-3 self-stretch">
              <ButtonLink className="flex py-3 px-4 content-center items-center gap-2 self-stretch w-[288px]"
              caption="Konsultasi dulu"
              to="/help"
              border={true}
              ></ButtonLink>
              <ButtonLink
              border={false}
              caption="Daftar Sekarang"
              to="/about-us"
              ></ButtonLink>
          </div>
        </div>
      </div>
      <div className="code-container flex w-width-4 p-6 flex-col items-start gap-12 rounded-2xl bg-white shadow-xl mt-[390px]">
        <div className="all-content flex flex-col items-start gap-6 self-stretch ">
          <h4 className="text-2xl font-semibold text-primary">
          Kode Promo
          </h4>
          <div className="code flex flex-col items-start gap-2 self-stretch">
            <div className="code-promo flex py-3 px-4 justify-between items-center self-stretch border-secondary p-3 border-2 rounded-lg">
              <p className="text-base text-neutral-2 font-semibold ">
                  DIGICAMP24
              </p>
              <button className="flex items-center gap-2">
                  <img className="w-6 h-6" src={CopyIcon} alt="" />
                  <p className="text-base text-secondary font-semibold">
                  Salin
                  </p>
              </button>
            </div>
            <div className="why? bg-[#C4FFBA] w-[13.778rem] py-2 px-4 rounded-full mt-2">
              <p className="text-base text-primary">
                  Lebih Hemat{" "}
                  <span className="font-semibold">Rp 600.000</span>
              </p>
            </div>
            <p className=" text-base text-neutral-2 mt-2">
            Berlaku untuk transaksi pertama*
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};
export default DetailClassHeroPersyaratanSection;
