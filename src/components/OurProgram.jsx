import React from "react";
import Mask1 from "/images/mask-1.png";
import Mask2 from "/images/mask-2.png";
import Mask3 from "/images/mask-3.png";
import OuterMask1 from "/images/outermask-1.png";
import OuterMask2 from "/images/outermask-2.png";
import OuterMask3 from "/images/outermask-3.png";
import OuterMask4 from "/images/outermask-4.png";
import "./OurProgram.css";
import { useLocation } from "react-router-dom";

function OurProgram() {
  const location = useLocation();
  const path = location.pathname;
  let padding = "";
  let additionalContent = null;

  if (path === "/about-us") {
    padding = "py-24";
    additionalContent = (
      <div className="additional-content w-width-8 flex justify-center items-center p-6 bg-white rounded-2xl">
        <p className="text-center text-base text-neutral-2 font-normal">
          Edu Tera Insani menawarkan jalur pembelajaran yang dipersonalisasi
          untuk Junior Highschool dan Senior Highschool, dilengkapi dengan Short
          Course yang menarik seperti bahasa asing, seni, menulis, dan lain-lain
          untuk meningkatkan pengalaman pendidikan mereka.
        </p>
      </div>
    );
  } else {
    padding = "lg:pb-24 pb-12";
    additionalContent = <div className="additional-content hidden"></div>;
  }
  return (
    <div className={`our-program flex items-center bg-background ${padding}`}>
      <div className="program-container mx-auto w-base-content flex flex-col items-center gap-12">
        <div className="program title flex flex-col gap-6 items-center">
          <h2 className="text-primary lg:text-3xl text-2xl font-semibold ">
            Program Kami
          </h2>
          {additionalContent}
        </div>

        <div className="program-cards flex lg:flex-row flex-col items-start">
          <div className="program-card bg-white rounded-2xl flex w-width-3 px-6 py-4 flex-col items-center gap-4">
            <div className="card-title flex-col flex gap-1 self-stretch text-center items-center">
              <div className="mascot-mask relative">
                <img src={Mask1} alt="" />
                <img src={OuterMask1} className="omask-1 absolute" alt="" />
              </div>
              <h4 className=" text-primary text-2xl font-semibold">
                Junior Highschool
              </h4>
              <p className=" text-neutral-2 text-base font-normal">
                Digital Schooling untuk kelas
              </p>
            </div>
            <div className="class flex py-1 px-4 justify-center items-center">
              <p className=" text-secondary text-base font-normal">7 - 9</p>
            </div>
          </div>
          <div className="program-card bg-white rounded-2xl flex w-width-3 px-6 py-4 flex-col items-center gap-4">
            <div className="card-title flex-col flex gap-1 self-stretch text-center items-center">
              <div className="mascot-mask relative">
                <img src={Mask2} alt="" />
                <img src={OuterMask2} className="omask-2 absolute" alt="" />
              </div>
              <h4 className=" text-primary text-2xl font-semibold">
                Senior Highschool
              </h4>
              <p className=" text-neutral-2 text-base font-normal">
                Digital Schooling untuk kelas
              </p>
            </div>
            <div className="class flex py-1 px-4 justify-center items-center">
              <p className=" text-secondary text-base font-normal">10 - 12</p>
            </div>
          </div>
          <div className="program-card bg-white rounded-2xl flex w-width-3 px-6 py-4 flex-col items-center gap-4">
            <div className="card-title flex-col flex gap-1 self-stretch text-center items-center">
              <div className="mascot-mask relative">
                <img src={Mask3} alt="" />
                <img src={OuterMask3} className="omask-3 absolute" alt="" />
                <img src={OuterMask4} className="omask-4 absolute" alt="" />
              </div>
              <h4 className=" text-primary text-2xl font-semibold">
                Short Course
              </h4>
              <p className=" text-neutral-2 text-base font-normal">
                Kelas tambahan untuk bahasa asing dan lainnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProgram;
