import React from "react";
import ButtonLink from "./Buttons/LinkButton";
import Book from "../../public/images/IoIosBook.png";
import StudentIcon from "../../public/images/Murid Icon.png";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Logo from "/images/edulogo.png";
import DetailClassRight from "./DetailClassRight";

const DetailClassHero = function () {
  const mataPelajaran = [
    {
      mata_pelajaran: "Bahasa inggris",
    },
    {
      mata_pelajaran: "IPA",
    },
    {
      mata_pelajaran: "IPS",
    },
    {
      mata_pelajaran: "MTK",
    },
    {
      mata_pelajaran: "Bahasa Indonesia",
    },
    {
      mata_pelajaran: "Seni",
    },
    {
      mata_pelajaran: "Agama",
    },
    {
      mata_pelajaran: "Olahraga",
    },
    {
      mata_pelajaran: "Informatika",
    },
    {
      mata_pelajaran: "Projek",
    },
  ];
  return (
    <>
      <div className="mt-20">
        <div className="lg:hidden">
          <DetailClassRight />
        </div>
        <div className="tentang-pembelajaran lg:mt-12 ">
          <h4 className="lg:text-2xl text-xl font-semibold text-primary">
            Tentang Pembelajaran
          </h4>
          <p className=" text-base mb-4 text-neutral-2">
            Program pembelajaran Kelas 7 SMP untuk tahun ajaran 2024/2025.
          </p>
          <p className=" text-base mb-12 text-neutral-2">
            SPP per Bulan <span className="font-semibold">Rp 450.000</span> -
            Uang Pangkal <span className="font-semibold">Rp 1.500.000</span> -
            Uang Pengembangan <span className="font-semibold">Rp 500.000.</span>
          </p>
        </div>
        <div className="mapel-wajib flex flex-wrap mb-12 gap-3">
          <h4 className="lg:text-2xl text-xl font-semibold text-primary">
            Mata Pelajaran Wajib
          </h4>
          <p className=" text-base mb-4 text-neutral-2">
            Merupakan mata pelajaran yang harus diikuti keseluruhan murid Edu
            Tera Insani.
          </p>
          {mataPelajaran.map((pelajaran) => {
            return (
              <div className="bg-[#C4FFBA] px-4 py-2 rounded-lg flex justify-center items-center gap-2">
                <img className="w-4 h-4" src={Book} alt="" />
                <p className="text-base text-primary">
                  {pelajaran.mata_pelajaran}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mapel-pilihan flex flex-wrap mb-12 gap-3">
          <h4 className="lg:text-2xl text-xl font-semibold text-primary">
            Mata Pelajaran Pilihan
          </h4>
          <p className=" text-base text-neutral-2 mb-6">
            Berikut adalah mata pelajaran pilihan yang dapat diambil oleh murid
            sebagai mata pelajaran tambahan (Murid dapat memilih 2).
          </p>
          <div className="bg-[#FFBABA] px-4 py-2 rounded-lg flex justify-center items-center gap-2">
            <img className="w-4 h-4" src={Book} alt="" />
            <p className="text-base text-primary">Mata Pelajaran 1</p>
          </div>
          <div className="bg-[#FFBABA] px-4 py-2 rounded-lg flex justify-center items-center gap-2">
            <img className="w-4 h-4" src={Book} alt="" />
            <p className="text-base text-primary">Mata Pelajaran 2</p>
          </div>
        </div>
        <div className="ditujukan-container flex lg:w-width760 pb-12 flex-col items-start gap-gap10">
          <div className="ditujukan flex flex-col items-start gap-2">
            <h4 className="lg:text-2xl text-xl font-semibold text-primary">
              Kelas ini ditujukan oleh
            </h4>
            <div className="umur-1 flex items-center gap-4">
              <img className="w-16 h-16" src={StudentIcon} alt="" />
              <div className="umur-2 flex flex-col items-start">
                <p className="text-base text-primary font-semibold">Umur:</p>
                <p className="text-base text-primary">
                  Kelas ditujukan untuk anak berusia 12 - 13 tahun.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="prasyarat-container flex lg:w-width760 pb-12 flex-col items-start gap-gap10">
          <div className="prasyarat flex flex-col items-start gap-2 self-stretch">
            <h4 className="lg:text-2xl text-xl font-semibold text-primary">
              Prasyarat Pembelajaran
            </h4>
            <div className="poin flex flex-col items-start gap-3 self-stretch">
              <ul className="list-none">
                <li className=" flex gap-2 mb-3">
                  <GoDotFill className="  text-secondary text-lg" />
                  <p className=" text-base text-neutral-2 ">
                    Melengkapi data murid
                  </p>
                </li>
                <li className=" flex gap-2 mb-3">
                  <GoDotFill className=" text-secondary text-3xl lg:text-lg" />
                  <p className=" text-base mt-1 lg:mt-0 text-neutral-2">
                    Untuk murid pindahan wajib menyelesaikan administrasi pindah
                    sekolah.
                  </p>
                </li>
                <li className=" flex gap-2">
                  <GoDotFill className="  text-secondary text-lg" />
                  <p className=" text-base text-neutral-2">
                    Menyelesaikan syarat administrasi lainnya
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Kurikulum-container flex lg:w-width760 pb-12 flex-col items-start gap-gap10">
          <div className="kurikulum flex flex-col items-start gap-4">
            <div className="kurikulum-details">
              <h4 className="lg:text-2xl text-xl font-semibold text-primary">
                Kurikulum
              </h4>
              <p className=" text-base text-neutral-2">
                Kurikulum Merdeka Plus adalah pendekatan pendidikan yang
                fleksibel dan berpusat pada siswa, dirancang untuk mendorong
                kemandirian belajar dan pemikiran kritis.
              </p>
            </div>
            <ButtonLink
              // border={true}
              caption="Pelajari Lebih Lanjut"
              to="/about-us"
              width={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.749 12.75L3.24926 12.75L3.24926 11.25L20.749 11.25L20.749 12.75Z"
                  fill="#FFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z"
                  fill="#FFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z"
                  fill="#FFF"
                />
              </svg>
            </ButtonLink>
          </div>
        </div>
        <div className="produk-container flex lg:w-width760 pb-12 flex-col items-start gap-gap10">
          <h4 className="lg:text-2xl text-xl font-semibold text-primary">
            Produk yang kamu dapatkan
          </h4>
          <ul className="list-none">
            <li className=" flex gap-2 mb-3">
              <IoMdCheckmarkCircleOutline className="  text-secondary text-lg" />
              <p className=" text-base text-neutral-2 ">
                SPP Bulan Pertama <span className="mx-4">-</span> Senilai{" "}
                <span className="font-semibold text-primary">Gratis</span>
              </p>
            </li>
            <li className=" flex gap-2 mb-3">
              <IoMdCheckmarkCircleOutline className=" text-secondary text-2xl lg:text-lg" />
              <p className=" text-base text-neutral-2">
                Learning Kit untuk 1 Tahun Ajaran{" "}
                <span className="mx-4">-</span> Senilai{" "}
                <span className="font-semibold text-primary">Rp 380.000</span>
              </p>
            </li>
            <li className=" flex gap-2 mb-3">
              <IoMdCheckmarkCircleOutline className=" text-secondary text-lg" />
              <p className=" text-base text-neutral-2">
                Administrasi <span className="mx-4">-</span> Senilai{" "}
                <span className="font-semibold text-primary">Rp 3.120.000</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="lembaga-container flex lg:w-width760 flex-col items-start gap-gap10">
          <h4 className="lg:text-2xl text-xl font-semibold text-primary">
            Lembaga Pengajar
          </h4>
          <div className="flex gap-2">
            <img className="w-10 h-10" src={Logo} alt="" />
            <h3 className="text-3xl font-semibold text-primary">
              Edu Tera Insani
            </h3>
          </div>
          <p className=" text-base text-neutral-2 mb-24">
            <span className="font-semibold">Edu Tera Insani</span> adalah
            platform sekolah digital yang dirancang untuk siswa SMP dan SMA,
            menawarkan jalur pembelajaran yang dipersonalisasi dan akses ke
            guru-guru ahli dari seluruh dunia.
          </p>
        </div>
      </div>
    </>
  );
};
export default DetailClassHero;
