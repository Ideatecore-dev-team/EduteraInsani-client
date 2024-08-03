import React, { useState, useEffect } from "react";
import ClassBanner from "/public/images/Class Banner.png";
import ButtonLink from "../components/Buttons/LinkButton";
import { IoIosLock } from "react-icons/io";
import CheckoutProgramForm from "./CheckoutProgramForm";

const CheckoutProgramLockedLeft = function () {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const dummyToken = "dummyToken123";
    localStorage.setItem("token", dummyToken);

    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true);
    }
  }, []);

  return (
    <>
      <div className="left flex flex-col w-width-7">
        <div className="bg-white rounded-2xl p-6">
          <div className="flex gap-6 items-center">
            <img className="w-width-3" src={ClassBanner} alt="Class Banner" />
            <div className="flex flex-col">
              <h3 className="text-3xl font-semibold text-primary">
                Kelas 7 SMP
              </h3>
              <h4 className="text-2xl font-semibold text-primary">
                T.A Angkatan 2024/2025
              </h4>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div className="flex flex-col">
              <p className="text-base text-neutral-2">Pembayaran Pertama:</p>
              <h3 className="text-3xl text-secondary font-semibold">
                Rp 3.500.000
              </h3>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-neutral-2">Bayaran/Semester</p>
              <h3 className="text-3xl text-primary font-semibold">
                Rp 700.000
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6 mt-8">
          <h4 className="text-2xl text-primary font-semibold mb-6">
            Daftarkan Data Diri Anak
          </h4>
          {hasToken ? (
            <CheckoutProgramForm />
          ) : (
            <ButtonLink to="" border={false}>
              <div className="flex gap-2 items-center">
                <IoIosLock className="w-6 h-6" />
                <p className="text-base text-white">
                  Yuk <span className="font-semibold">Login</span> atau{" "}
                  <span className="font-semibold">Register</span> dulu sebelum
                  mendaftarkan data diri anak
                </p>
              </div>
            </ButtonLink>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutProgramLockedLeft;
