import React, { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

const CheckoutProgramForm = function () {
  const [dropdown, setDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  function handleDropdown() {
    setDropdown((prev) => !prev);
  }

  function handleGenderSelect(gender) {
    setSelectedGender(gender);
    setDropdown(false);
  }

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
            style={{ color: "black" }}
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
            style={{ color: "black" }}
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
            style={{ color: "black" }}
          />
          <label htmlFor="umur" className="text-primary text-base mb-2 mt-6">
            Umur <span className="text-secondary">*</span>
          </label>
          <input
            id="umur"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan Umur"
            style={{ color: "black" }}
          />
          <label
            htmlFor="jenis-kelamin"
            className="text-primary text-base mb-2 mt-6"
          >
            Jenis Kelamin <span className="text-secondary">*</span>
          </label>
          <div className="relative w-full">
            <div className="flex items-center">
              <input
                id="jenis-kelamin"
                className="px-4 py-3 bg-background border-primary border-2 rounded-lg w-full"
                type="text"
                placeholder="--Pilih jenis kelamin--"
                defaultValue={selectedGender}
                readOnly
              />
              <button
                type="button"
                onClick={handleDropdown}
                className="absolute right-3 top-3.5"
              >
                <IoChevronDown className="w-6 h-6 text-primary" />
              </button>
            </div>
            <div
              className={`absolute bg-white border-primary border-2 duration-500 rounded-lg w-full z-10 transition-all ease-in-out overflow-hidden ${
                dropdown ? "max-h-32" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleGenderSelect("Laki-laki")}
              >
                Laki-laki
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleGenderSelect("Perempuan")}
              >
                Perempuan
              </div>
            </div>
          </div>
          <label htmlFor="alamat" className="text-primary text-base mb-2 mt-6">
            Alamat <span className="text-secondary">*</span>
          </label>
          <input
            id="alamat"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan alamat"
            style={{ color: "black" }}
          />
          <label htmlFor="agama" className="text-primary text-base mb-2 mt-6">
            Agama <span className="text-secondary">*</span>
          </label>
          <input
            id="agama"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan agama"
            style={{ color: "black" }}
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
            style={{ color: "black" }}
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
            style={{ color: "black" }}
          />
          <label
            htmlFor="nomor-orangtua-activ"
            className="text-primary text-base mb-2 mt-6"
          >
            Nomor Orang Tua (aktif) <span className="text-secondary">*</span>
          </label>
          <input
            id="nomor-orangtua-activ"
            className="px-4 py-3 bg-background border-primary border-2 rounded-lg"
            type="text"
            placeholder="Masukkan nomor orang tua"
            style={{ color: "black" }}
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
