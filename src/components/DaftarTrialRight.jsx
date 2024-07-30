import React from "react";
import ClassBaner from "../../public/images/Class Banner-trial.png";
import DaftarTrialForm from "./DaftarTrialForm";
import ButtonLink from "../components/Buttons/LinkButton";

const DaftarTrialRight = function () {
  return (
    <>
      <div className=" review-program flex flex-coll w-width-7">
        <div className="w-full">
          <div className=" lg:bg-white rounded-2xl lg:p-6 flex flex-wrap lg:flex-nowrap gap-6 lg:mb-8 mb-6 ">
            <img
              className="lg:w-width-3 w-[21.375rem]"
              src={ClassBaner}
              alt=""
            />
            <div className="flex flex-col">
              <h3 className=" lg:text-3xl text-xl font-semibold text-primary">
                Kelas Trial
              </h3>
              <h4 className="lg:text-2xl text-xl font-semibold text-primary">
                T.A Angkatan 2024/2025
              </h4>
              <p className="text-base text-primary">Berlaku selama 1 minggu.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <h4 className="lg:text-2xl text-lg text-primary font-semibold">
              Daftarkan Data Diri Anak
            </h4>
            <DaftarTrialForm />
            <div className="mt-6 xs:hidden">
              <ButtonLink caption="Daftar Trial Sekarang" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DaftarTrialRight;
