import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ClassBanner from "../../public/images/Class Banner.png";
import CopyIcon from "../../public/images/IoIosCopy.png";
import ButtonDetailClass from "./Buttons/ButtonDetailClass";
import ButtonLink from "./Buttons/LinkButton";
import DetailClassComponents from "./DetailClassComponents";
import MetodePembayaran from "./MetodePembayaran";

const DetailClassHeroPersyaratanSection = function () {
  const promoCode = "DIGICAMP24";
  const copyPromoCode = () => {
    navigator.clipboard
      .writeText(promoCode)
      .then(() => alert(`Kode promo "${promoCode}" berhasil disalin!`))
      .catch((error) => console.error("Gagal menyalin kode promo:", error));
  };

  return (
    <div className="right-container -mt-14 lg:-mt-0 w-mobile-6 lg:w-auto flex flex-col items-start gap-6 mb-24">
      <div className="card-content flex  flex-col items-start self-stretch border-2 lg:p-0 p-6 border-secondary rounded-2xl lg:bg-white shadow-xl">
        <img className="" src={ClassBanner} alt="" />
        <div className="lg:p-6 pt-6 flex-col items-start gap-12 self-stretch">
          <div className="all-content flex flex-col items-start gap-6 self-stretch">
            <div className="kelas flex-col lg:flex hidden  items-start self-stretch">
              <h3 className="text-3xl font-semibold text-primary">SMP 7</h3>
              <h3 className="text-xl w-full font-semibold text-primary">
                T.A Angkatan 2024/2025
              </h3>
            </div>
            <div className="semester flex flex-col items-start lg:gap-1 self-stretch">
              <p className="text-base font-normal text-neutral-2">
                Bayaran/Semester
              </p>
              <h2 className="lg:text-4xl text-2xl font-semibold text-primary">
                Rp 700.000
              </h2>
            </div>
            <div className="bayaran -mt-3 lg:-mt-0 flex flex-col items-start self-stretch ">
              <p className="text-base font-normal text-neutral-2">
                Pembayaran Pertama:
              </p>
              <h4 className="lg:text-2xl text-lg font-semibold text-secondary">
                Rp 3.500.000
              </h4>
            </div>
          </div>
          <div className="buttons lg:flex hidden mt-12 flex-col items-start gap-3 self-stretch">
            <ButtonLink
              className="flex py-3 px-4 content-center items-center gap-2 self-stretch w-[288px]"
              caption="Konsultasi dulu"
              to="/help"
              border={true}
              width={true}
            />
            <ButtonLink
              border={false}
              width={true}
              caption="Daftar Sekarang"
              to="/checkout-program-locked"
            />
          </div>
        </div>
      </div>
      <div className="code-container w-mobile-6 flex lg:w-width-4 p-6 flex-col items-start gap-12 rounded-2xl bg-white shadow-xl mt-8 ">
        <div className="all-content flex flex-col items-start gap-6 self-stretch ">
          <h4 className="lg:text-2xl text-lg font-semibold text-primary">
            Kode Promo
          </h4>
          <div className="code flex flex-col items-start gap-2 self-stretch">
            <div className="code-promo flex py-3 px-4 justify-between items-center self-stretch border-secondary p-3 border-2 rounded-lg">
              <p className="text-base text-neutral-2 font-semibold">
                {promoCode}
              </p>
              <button
                className="flex items-center gap-2"
                onClick={copyPromoCode}
              >
                <img className="w-6 h-6" src={CopyIcon} alt="" />
                <p className="text-base text-secondary font-semibold">Salin</p>
              </button>
            </div>
            <div className="why? bg-[#C4FFBA] w-[13.778rem] py-2 px-4 rounded-full mt-2">
              <p className="lg:text-base text-xs text-primary">
                Lebih Hemat <span className="font-semibold">Rp 600.000</span>
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
