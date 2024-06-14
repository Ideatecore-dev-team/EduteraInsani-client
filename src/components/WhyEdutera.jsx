import React from "react";
import ReasonIco1 from "/images/reason-ico-1.png";
import ReasonIco2 from "/images/reason-ico-2.png";
import ReasonIco3 from "/images/reason-ico-3.png";

function WhyEdutera() {
  return (
    <div className="why flex items-center lg:py-24 py-12 bg-background">
      <div className="why-container w-base-content flex flex-col gap-6 lg:gap-7 mx-auto">
        <h2 className=" text-primary text-2xl lg:text-4xl font-semibold text-center">
          Kenapa
          <br />
          Edu Tera Insani?
        </h2>
        <div className="cards-why flex lg:flex-row flex-col items-center lg:items-start gap-6">
          <div className="card-why flex bg-white rounded-2xl w-mobile-6 lg:w-width-4 lg:p-6 p-4 flex-col items-start gap-4">
            <img src={ReasonIco1} className=" size-20" alt="icon" />
            <h4 className=" text-primary lg:text-2xl text-lg font-semibold">
              Fleksibilitas dan Kenyamanan
            </h4>
            <p className=" text-neutral-2 text-base font-normal">
              Belajar dari rumah dengan nyaman dan sesuai jadwal.
            </p>
          </div>
          <div className="card-why flex bg-white rounded-2xl w-width-4 p-6 flex-col items-start gap-4">
            <img src={ReasonIco2} className=" size-20" alt="icon" />
            <h4 className=" text-primary lg:text-2xl text-lg font-semibold">
              Akses sumber daya dan teknologi Terdepan
            </h4>
            <p className=" text-neutral-2 text-base font-normal">
              Akses sumber daya dan alat digital canggih untuk belajar.
            </p>
          </div>
          <div className="card-why flex bg-white rounded-2xl w-width-4 p-6 flex-col items-start gap-4">
            <img src={ReasonIco3} className=" size-20" alt="icon" />
            <h4 className=" text-primary lg:text-2xl text-lg font-semibold">
              Pendekatan personal dan dukungan terarah
            </h4>
            <p className=" text-neutral-2 text-base font-normal">
              Pembelajaran personal dengan dukungan intensif untuk setiap siswa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyEdutera;
