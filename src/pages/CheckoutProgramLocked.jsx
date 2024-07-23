import React from "react";
import ClassBanner from "/public/images/Class Banner.png";
import ButtonLink from "../components/Buttons/LinkButton";
import { IoIosLock } from "react-icons/io";
import CheckoutProgramLockedLeft from "../components/CheckoutProgramLockedLeft";
import CheckoutProgramLockedRight from "../components/ChekoutProgramLockedRight";

const CheckoutProgramLocked = function () {
  return (
    <>
      <div className="flex bg-background justify-center">
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
    </>
  );
};

export default CheckoutProgramLocked;
