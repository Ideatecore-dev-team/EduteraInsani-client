import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

const CheckoutProgramForm = function () {
  return (
    <>
      <div className="">
        <form action="post" className="flex flex-col">
          <label
            htmlFor="nama-calon-siswa"
            className="text-primary text-base mb-2 mt-6"
          >
            Nama Calon Siswa <span className="text-secondary">*</span>
          </label>
          <input
            id="nama-calon-siswa"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan nama calon siswa"
          />
          <label
            htmlFor="tempat-lahir"
            className="text-primary text-base mb-2 mt-6"
          >
            Tempat Lahir <span className="text-secondary">*</span>
          </label>
          <input
            id="tempat-lahir"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan tempat lahir"
          />
          <label
            htmlFor="tanggal-lahir"
            className="text-primary text-base mb-2 mt-6"
          >
            Tanggal Lahir <span className="text-secondary">*</span>
          </label>
          <input
            id="tanggal-lahir"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="date"
            placeholder="Masukkan tanggal lahir"
          />
          <label htmlFor="umur" className="text-primary text-base mb-2 mt-6">
            Umur <span className="text-secondary">*</span>
          </label>
          <input
            id="umur"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan Umur"
          />
          <label
            htmlFor="jenis-kelamin"
            className="text-primary text-base mb-2 mt-6"
          >
            Jenis Kelamin <span className="text-secondary">*</span>
          </label>
          <div className="flex relative w-full">
            <input
              id="jenis-kelamin"
              className="px-4 py-3 bg-background border-primary border-2 rounded-lg w-full"
              type="text"
              placeholder="--Pilih jenis kelamin--"
            />
            <IoChevronDown className="absolute left-64 top-3.5 w-6 h-6 lg:left-[35.5rem] text-primary" />
          </div>
          <label htmlFor="alamat" className="text-primary text-base mb-2 mt-6">
            Alamat <span className="text-secondary">*</span>
          </label>
          <input
            id="alamat"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan alamat"
          />
          <label htmlFor="agama" className="text-primary text-base mb-2 mt-6">
            Agama <span className="text-secondary">*</span>
          </label>
          <input
            id="agama"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan agama"
          />
          <label
            htmlFor="nama-orangtua-ayah"
            className="text-primary text-base mb-2 mt-6"
          >
            Nama Orangtua Ayah <span className="text-secondary">*</span>
          </label>
          <input
            id="nama-orangtua-ayah"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan nama ayah"
          />
          <label
            htmlFor="nama-orangtua-ibu"
            className="text-primary text-base mb-2 mt-6"
          >
            Nama Orangtua Ibu <span className="text-secondary">*</span>
          </label>
          <input
            id="nama-orangtua-ibu"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan nama ibu"
          />
          <label
            htmlFor="nomor-orangtua-activ"
            className="text-primary text-base mb-2 mt-6"
          >
            Nomor orang Tua (aktif) <span className="text-secondary">*</span>
          </label>
          <input
            id="nama-orangtua-ibu"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan nomor orang tua"
          />
        </form>
        <div className="flex gap-2 items-center mt-6">
          <IoIosHelpCircleOutline className="w-6 h-6 text-secondary" />
          <p className="text-base text-primary">
            Pelajari lebih lanjut{" "}
            <a className="text-secondary underline" href="#">
              Kebijakan Privasi
            </a>{" "}
            Edu Tera Insani
          </p>
        </div>
      </div>
    </>
  );
};
export default CheckoutProgramForm;
