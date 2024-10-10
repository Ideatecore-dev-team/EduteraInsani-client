import React from "react";
import Vidio from "/images/TrailerVideo.png";
import "./Trailer.css";

function Trailer() {
  return (
    <div className="trailer-section xs:w-width-sm flex pb-12 lg:pb-24 lg:items-center justify-center items-start bg-background gap-gap10">
      <div className="trailer-container xs:w-mobile-6 flex lg:flex-row flex-col lg:w-base-content mx-auto lg:items-center items-start gap-6">
        <img src={Vidio} alt="vidio" className=" px-4 lg:px-0" />
        <div className="vidio-content flex xs:w-mobile-6 lg:p-6 p-2 flex-col items-start gap-2 lg:self-stretch bg-white rounded-2xl">
          <div className="vid-icons flex items-start gap-4">
            <div className="zoom bg-background rounded-lg flex size-12 p-2 justify-center items-center">
              <div className="zoom-bg size-7 flex items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                >
                  <path
                    d="M1.76667 0C1.06711 0 0.5 0.639593 0.5 1.42857V8.35714C0.5 10.369 1.94612 12 3.73 12L11.2333 11.9286C11.9329 11.9286 12.5 11.289 12.5 10.5V3.50002C12.5 1.48813 10.7839 2.47955e-05 9 2.47955e-05L1.76667 0Z"
                    fill="white"
                  />
                  <path
                    d="M14.2122 2.7276C13.7596 3.17516 13.5 3.82111 13.5 4.50002V7.3993C13.5 8.07821 13.7596 8.72416 14.2122 9.17173L17.0288 11.6525C17.6019 12.2191 18.5 11.7601 18.5 10.9005V1.13516C18.5 0.275546 17.6019 -0.183465 17.0288 0.383223L14.2122 2.7276Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="text-primary text-xl lg:text-3xl font-semibold">
            Pembelajaran untuk Guru dan Murid
          </h3>
          <p className=" text-base font-normal text-neutral-2">
            Dukungan dari para profesional berpengalaman dan program yang
            disesuaikan dengan kebutuhan guru dan siswa di era digital, kami
            hadir untuk memastikan bahwa setiap peserta mampu berkembang dan
            siap menghadapi tantangan masa depan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
