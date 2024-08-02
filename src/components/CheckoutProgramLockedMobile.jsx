import React, { useState, useEffect } from "react";
import ClassBanner from "/public/images/Class Banner.png";
import ButtonLink from "../components/Buttons/LinkButton";
import { IoIosLock } from "react-icons/io";
import CheckoutProgramForm from "./CheckoutProgramForm";
import FooterMobileDaftar from "./FooterMobileDaftar";

const CheckoutProgramLockedMobile = function () {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    // Menambahkan token dummy ke localStorage untuk simulasi
    const dummyToken = "dummyToken123";
    localStorage.setItem("token", dummyToken);

    // Memeriksa token dari localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true);
    }
  }, []);

  return (
    <>
      <div className="flex bg-background justify-center">
        <div className="w-mobile-6 mt-32 pb-6">
          <h2 className="text-4xl font-semibold text-primary">Checkout</h2>
          <p className="text-sm self-stretch text-neutral-2 mb-6">
            Lengkapi data calon siswa dan lanjutkan payment
          </p>
          <h4 className="text-lg text-primary font-semibold mb-3">Program</h4>
          <div className="bg-white w-mobile-6 rounded-2xl p-4 mb-6">
            <div className="flex gap-4 items-center">
              <img className="w-44" src={ClassBanner} alt="" />
              <div className="flex w-44 flex-col">
                <h3 className="text-xl font-semibold text-primary">
                  Kelas 7 SMP
                </h3>
                <h4 className="text-lg font-semibold text-primary">
                  T.A Angkatan 2024/2025
                </h4>
              </div>
            </div>
          </div>
          <h4 className="text-lg text-primary font-semibold mb-3">
            Metode Pembayaran
          </h4>
          <div className="px-4 py-2 bg-[#C4FFBA] w-24 flex justify-center items-center rounded-md">
            <p className="">Otomatis</p>
          </div>
        </div>
      </div>
      <div className=" w-mobile-7 p-6 border-y-2 border-secondary border-dashed">
        <div className="w-mobile-6">
          <h4 className="text-lg font-semibold text-primary mb-3">Promo</h4>
          <p className="text-[0.875rem] text-primary mb-2">
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
        </div>
      </div>
      <div className="flex bg-background justify-center">
        <div className=" w-mobile-6 border-2 border-secondary rounded-2xl mt-6 p-4 shadow-lg">
          <h4 className="text-lg text-primary font-semibold">
            Ringkasan Harga
          </h4>
          <div className="flex w-mobile-4 justify-between border-b-2 border-secondary ">
            <div className="flex flex-col  mb-2">
              <p className=" text-[0.875rem] text-primary ">
                Bayaran Semester Pertama
              </p>
              <p className="text-[0.875rem] text-primary my-2">Harga produk</p>
              <p className="text-[0.875rem] text-primary">Kode Promo</p>
            </div>
            <div className=" mb-2">
              <p className="text-[0.875rem] text-primary text-right">Rp 0</p>
              <p className="text-[0.875rem] text-primary my-2 text-right">
                Rp 3.500.000
              </p>
              <p className="text-[0.875rem] text-red-500 text-right ">
                -Rp 600.000
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[14rem] flex flex-col">
              <p className="text-[0.875rem] text-primary my-2 font-semibold">
                Total Bayar
              </p>
            </div>
            <div className=" w-[13rem]">
              <p className="text-[0.875rem] text-primary my-2 font-semibold text-right">
                Rp 2.900.000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-mobile-7 bg-background flex-col flex items-center justify-center mt-3 mb-36">
        <p className=" text-sm text-primary text-center ">
          Butuh bantuan?{" "}
          <a className="text-secondary underline" href="">
            Hubungi Customer Service
          </a>
        </p>
        <div className="w-mobile-6 bg-white p-6 rounded-2xl mt-6">
          <h4 className="text-lg text-primary font-bold mb-4">
            Daftarkan Data Diri Anak
          </h4>
          {hasToken ? (
            <CheckoutProgramForm />
          ) : (
            <ButtonLink>
              <IoIosLock />
              <p className="text-sm w-full">
                Login atau Daftar untuk Melanjutkan
              </p>
            </ButtonLink>
          )}
        </div>
      </div>
      <FooterMobileDaftar />
    </>
  );
};

export default CheckoutProgramLockedMobile;
