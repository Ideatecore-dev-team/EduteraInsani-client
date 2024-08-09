import React from "react";
import ButtonLink from "./Buttons/LinkButton";
import Footer from "./Footer";

const FooterMobileDaftar = function () {
  return (
    <>
      <div
        style={{ boxShadow: "0px -4px 8px 0px rgba(0, 0, 0, 0.15)" }}
        className="bg-white shadow fixed top-[38.9rem] z-50 w-full py-4 px-6"
      >
        <div className="flex gap-2 w-mobile-6 mb-4">
          <input
            className="w-6 h-6 border-secondary border-2"
            type="checkbox"
          />
          <p className="text-sm text-primary">
            Saya setuju dengan{" "}
            <a href="#" className="text-secondary underline text-sm">
              Syarat dan Ketentuan
            </a>{" "}
          </p>
        </div>
        <ButtonLink caption="Login atau Daftar" />
      </div>
    </>
  );
};
export default FooterMobileDaftar;
