import React from "react";
import { GoDotFill } from "react-icons/go";
import Logo from "/images/edulogo.png";
import ButtonLink from "./Buttons/LinkButton";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const DetailClassHeroPersyaratanSection = function () {
  return (
    <div className="detail-class-persyaratan bg-background flex justify-center">
      <div className="persyaratan-pembelajaran mt-6 w-base-content flex justify-start items-start gap-6">
        <div className="flex flex-col gap-2 w-[47.50rem]">
          <h4 className="text-2xl font-semibold text-primary">
            Mata Pelajaran Pilihan
          </h4>
          <ul className="list-none">
            <li className=" flex gap-2 mb-3">
              <GoDotFill className="  text-secondary text-lg" />
              <p className=" text-base text-neutral-2 ">
                Melengkapi data murid
              </p>
            </li>
            <li className=" flex gap-2 mb-3">
              <GoDotFill className=" text-secondary text-lg" />
              <p className=" text-base text-neutral-2">
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
          <h4 className="text-2xl mt-12 font-semibold text-primary">
            Kurikulum
          </h4>
          <p className=" text-base text-neutral-2 mb-4">
            Kurikulum Merdeka Plus adalah pendekatan pendidikan yang fleksibel
            dan berpusat pada siswa, dirancang untuk mendorong kemandirian
            belajar dan pemikiran kritis.
          </p>
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
          <h4 className="text-2xl mt-12 font-semibold text-primary">
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
              <IoMdCheckmarkCircleOutline className=" text-secondary text-lg" />
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
          <h4 className="text-2xl mt-12 font-semibold text-primary">
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
    </div>
  );
};
export default DetailClassHeroPersyaratanSection;
