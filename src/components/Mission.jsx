import React, { useState } from "react";
import ButtonLink from "./Buttons/ButtonLink";
import { IoIosArrowDown } from "react-icons/io";

function Mission() {
  const [isDropDown, setIsDropdown] = useState("");
  function handleDropDown() {
    setIsDropdown((prev) => !prev);
  }
  return (
    <div className="mission-section flex flex-col pb-24 items-center justify-center self-stretch bg-background gap-14">
      <h2 className=" text-primary text-2xl lg:text-4xl  font-semibold">
        Misi Kami
      </h2>
      <button
        onClick={handleDropDown}
        className="flex lg:hidden bg-secondary px-3 py-3 rounded-full gap-2"
      >
        <p className="text-base text-white">Lihat misi Edu tera Insani</p>
        <IoIosArrowDown
          className={`size-6 text-white ${
            isDropDown ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`all-missions ${
          isDropDown ? "flex" : "hidden"
        } w-mobile-6 lg:w-base-content lg:flex justify-center items-start content-start gap-6 flex-wrap`}
      >
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">01</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Fondasi Pendidikan dengan Nilai Ketuhanan dan Pancasila
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Membangun pondasi pendidikan yang kuat berdasarkan nilai-nilai
              Ketuhanan Yang Maha Esa dan Pancasila sebagai fondasi utama.
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">02</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Memperkuat Komitmen terhadap Humanisme
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Memperkuat komitmen terhadap humanisme sesuai dengan tradisi
              Indonesia, dengan menekankan nilai-nilai kebersamaan, kerjasama
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">03</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Cinta Pengetahuan dan Teknologi
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Mendorong cinta akan pengetahuan dan teknologi melalui
              pembelajaran inovatif, kreatif, dan terintegrasi secara global.
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">04</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Membentuk Karakter Unggul
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Membentuk karakter unggul yang mencakup nilai-nilai kejujuran,
              tanggung jawab, disiplin, keberanian, dan kerja keras.
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">05</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Pendidikan Anti-Korupsi untuk Generasi Berintegritas
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Melaksanakan pendidikan anti-korupsi dalam setiap aspek kegiatan
              pendidikan, mengajarkan prinsip-prinsip transparansi,
              akuntabilitas, dan integritas.
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">06</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Kepemimpinan Inklusif dan Visioner
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Membangun kualitas kepemimpinan inklusif, visioner, dan etis,
              mempersiapkan generasi yang mampu memimpin bangsa menuju kemajuan
              dan kemakmuran bersama.
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">07</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Keterampilan Hidup di Era Dinamis
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Mengembangkan keterampilan bertahan hidup dan adaptasi di tengah
              dinamika sosial, ekonomi, dan lingkungan, memastikan setiap
              individu siap menghadapi tantangan zaman.
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">08</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Kreativitas dan Inovasi sebagai Jantung Pembelajaran
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Mendorong kreativitas dan inovasi sebagai bagian integral dari
              pembelajaran, memberikan ruang bagi eksplorasi ide dan solusi
              baru.
            </p>
          </div>
        </div>
        <div className="mission-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
          <h1 className="font-bold text-secondary text-5xl">09</h1>
          <div className="title-desc flex flex-col items-start gap-2">
            <p className=" text-base font-semibold text-primary">
              Etika Profesional untuk Tenaga Kerja Berintegritas
            </p>
            <p className=" text-base font-normal text-neutral-2">
              Memprioritaskan pembentukan etika profesional dalam setiap jalur
              pendidikan, menghasilkan tenaga kerja yang kompeten dan
              berintegritas yang berorientasi pada melayani masyarakat dan
              bangsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
