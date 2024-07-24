import React from "react";
import { useState } from "react";
import CheckoutProgramLockedLeft from "../components/CheckoutProgramLockedLeft";
import CheckoutProgramLockedRight from "../components/ChekoutProgramLockedRight";
import CheckoutProgramLockedMobile from "../components/CheckoutProgramLockedMobile";

const CheckoutProgramLocked = function () {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <>
      <div
        className={` bg-background justify-center ${
          isMobile ? "hidden" : "flex"
        }`}
      >
        <div className=" w-base-content mt-32 pb-24">
          <h2 className="text-4xl font-semibold text-center text-primary">
            Checkout Program
          </h2>
          <p className="text-base text-center text-neutral-2">
            Lengkapi data calon siswa dan lanjutkan <br /> payment
          </p>
          <div className="container flex gap-6 mt-12">
            <CheckoutProgramLockedLeft />
            <CheckoutProgramLockedRight />
          </div>
        </div>
      </div>
      <div className={`${isMobile ? "flex flex-col" : "hidden"}`}>
        <CheckoutProgramLockedMobile />
      </div>
    </>
  );
};

export default CheckoutProgramLocked;
