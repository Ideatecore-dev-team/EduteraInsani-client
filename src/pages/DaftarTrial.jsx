import React from "react";
import { useState } from "react";
import DaftarTrialLeft from "../components/DaftarTrialLeft";
import DaftarTrialRight from "../components/DaftarTrialRight";
import FooterMobileDaftar from "../components/FooterMobileDaftar";

const DaftarTrial = function () {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <>
      <div className="flex justify-center w-mobil-6 lg:w-auto bg-background">
        <div className=" daftar-trial-container w-mobile-6 lg:w-base-content flex flex-col lg:items-center lg:bg-background mt-24 lg:mt-40 lg:pb-24 pb-36">
          <h2 className=" text-2xl lg:text-4xl text-primary font-semibold ">
            Daftar Trial Gratis
          </h2>
          <p className="text-base text-gray-500 lg:text-center mb-12">
            Lengkapi data diri anak untuk daftar <br /> kelas trial gratis.
          </p>
          <div className="main-container gap-6 flex w-mobile-6 lg:w-auto ">
            <div className={`${isMobile ? "hidden" : "flex"}`}>
              <DaftarTrialLeft />
            </div>
            <DaftarTrialRight />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <FooterMobileDaftar />
      </div>
    </>
  );
};
export default DaftarTrial;
