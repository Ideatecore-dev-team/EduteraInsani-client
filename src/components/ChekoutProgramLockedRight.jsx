import React from "react";
import ClassBanner from "/public/images/Class Banner.png";
import ButtonLink from "../components/Buttons/LinkButton";
import { IoIosLock } from "react-icons/io";

const CheckoutProgramLockedRight = function () {
  return (
    <>
      <div className="right w-width-5">
        <div className="bg-white p-6 rounded-xl border-2 border-secondary shadow-lg">
          <div className="flex flex-col">
            <h4 className="text-2xl text-primary font-semibold mb-2">
              Metode Pembayaran
            </h4>
            <p className="px-2 py-2 bg-[#C4FFBA] w-24 text-center rounded-md text-primary">
              Otomatis
            </p>
            <h4 className="text-2xl text-primary font-semibold mt-6">
              Kode Promo
            </h4>
            <p className="text-base text-primary mt-2">
              Kode promo agar lebih hemat
            </p>
            <div className="flex gap-2">
              <input
                className="border-2 border-primary px-4 py-3 rounded-xl mt-2 w-[18.125rem]"
                type="text"
                placeholder="Masukkan kode promo"
              />
              <div className="mt-2 w-28">
                <ButtonLink caption="Apply" width={false} border={false} />
              </div>
            </div>
            <h4 className="text-2xl text-primary font-semibold mt-6">
              Ringkasan Harga
            </h4>
            <div className="flex  justify-between border-b-2 border-secondary ">
              <div className="w-[14rem] flex flex-col  mb-2">
                <p className="text-base text-primary">
                  Bayaran Semester Pertama
                </p>
                <p className="text-base text-primary my-2">Harga produk</p>
                <p className="text-base text-primary">Kode Promo</p>
              </div>
              <div className=" w-[13rem] mb-2">
                <p className="text-base text-primary text-right">Rp 0</p>
                <p className="text-base text-primary my-2 text-right">
                  Rp 3.500.000
                </p>
                <p className="text-base text-red-500 text-right ">-</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[14rem] flex flex-col">
                <p className="text-base text-primary my-2 font-semibold">
                  Total Bayar
                </p>
              </div>
              <div className=" w-[13rem]">
                <p className="text-base text-primary my-2 font-semibold text-right">
                  Rp 3.500.000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 gap-3 mb-4">
          <input
            className="w-6 h-6 border-secondary border-2"
            type="checkbox"
          />
          <p className="text-base text-primary">
            Saya telah membaca dan menyetujui dengan{" "}
            <a href="#" className="text-secondary underline">
              Syarat dan Ketentuan
            </a>{" "}
            Edu Tera Insani
          </p>
        </div>
        <ButtonLink caption="Login atau Daftar" />
        <p className="text-base text-primary text-center mt-4">
          Butuh bantuan?{" "}
          <a href="#" className="text-secondary underline">
            Hubungi Customer Service
          </a>{" "}
        </p>
      </div>
    </>
  );
};

export default CheckoutProgramLockedRight;
