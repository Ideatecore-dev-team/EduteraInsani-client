import React from "react";
import ClassBanner from "../../public/images/Class Banner.png";
import ButtonLink from "./Buttons/LinkButton";
import Book from "../../public/images/IoIosBook.png";
import StudentIcon from "../../public/images/Murid Icon.png";
import CopyIcon from "../../public/images/IoIosCopy.png";


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
        <div className=" detail-class-hero bg-background flex justify-center">
            <div className=" program-kelas  mt-40 w-base-content flex justify-center items-start gap-6">
            <div className=" container-l w-width-8 ">
                <h2 className="text-4xl font-semibold text-primary">
                Program Kelas 7 SMP | T.A 2024/2025
                </h2>
                <div className="flex mt-6 gap-4 justify-center ">
                <ButtonLink
                    caption="Detail Kelas"
                    to="/help"
                    border={false}
                    width={true}
                ></ButtonLink>
                <ButtonLink
                    border={true}
                    caption="Metode Pembayaran"
                    to="/about-us"
                    width={true}
                ></ButtonLink>
                </div>
                <div className=" mt-12 ">
                <h4 className="text-2xl font-semibold text-primary">
                    Tentang Pembelajaran
                </h4>
                <p className=" text-base mb-4 text-neutral-2">
                    Program pembelajaran Kelas 7 SMP untuk tahun ajaran 2024/2025.
                </p>
                <p className=" text-base mb-12 text-neutral-2">
                    SPP per Bulan <span className="font-semibold">Rp 450.000</span>{" "}
                    - Uang Pangkal{" "}
                    <span className="font-semibold">Rp 1.500.000</span> - Uang
                    Pengembangan <span className="font-semibold">Rp 500.000.</span>
                </p>
                <h4 className="text-2xl font-semibold text-primary">
                    Mata Pelajaran Wajib
                </h4>
                <p className=" text-base mb-4 text-neutral-2">
                    Merupakan mata pelajaran yang harus diikuti keseluruhan murid
                    Edu Tera Insani.
                </p>
                <div className="flex flex-wrap mb-12 gap-3">
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
                <h4 className="text-2xl font-semibold text-primary">
                    Mata Pelajaran Pilihan
                </h4>
                <p className=" text-base text-neutral-2 mb-6">
                    Berikut adalah mata pelajaran pilihan yang dapat diambil oleh
                    murid sebagai mata pelajaran tambahan (Murid dapat memilih 2).
                </p>
                <div className="flex flex-wrap mb-12 gap-3">
                    <div className="bg-[#FFBABA] px-4 py-2 rounded-lg flex justify-center items-center gap-2">
                    <img className="w-4 h-4" src={Book} alt="" />
                    <p className="text-base text-primary">Mata Pelajaran 1</p>
                    </div>
                    <div className="bg-[#FFBABA] px-4 py-2 rounded-lg flex justify-center items-center gap-2">
                    <img className="w-4 h-4" src={Book} alt="" />
                    <p className="text-base text-primary">Mata Pelajaran 2</p>
                    </div>
                </div>
                <h4 className="text-2xl font-semibold text-primary">
                    Kelas ini ditujukan oleh
                </h4>
                <div className="flex gap-4">
                    <img className="w-16 h-16" src={StudentIcon} alt="" />
                    <div className="">
                    <p className="text-base text-primary font-semibold">Umur:</p>
                    <p className="text-base text-primary">
                        Kelas ditujukan untuk anak berusia 12 - 13 tahun.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-r">
                <div className=" bg-white shadow-xl rounded-2xl w-width-4">
                <img src={ClassBanner} alt="" />
                <div className=" p-6">
                    <div className=" w-full">
                    <h3 className="text-3xl font-semibold text-primary">
                        Kelas 7 SMP
                    </h3>
                    <h3 className="text-xl w-full mb-6 font-semibold text-primary">
                        T.A Angkatan 2024/2025
                    </h3>
                    <p className="text-base font-normal text-neutral-2">
                        Bayaran/Semester
                    </p>
                    <h2 className="text-4xl mb-6 font-semibold text-primary">
                        Rp 700.000
                    </h2>
                    <p className="text-base font-normal text-neutral-2">
                        Pembayaran Pertama:
                    </p>
                    <h4 className="text-2xl font-semibold mb-6 text-secondary">
                        Rp 3.500.000
                    </h4>
                    <div className=" flex-col gap-3 flex">
                        <ButtonLink
                        caption="Konsultasi dulu"
                        to="/help"
                        border={true}
                        ></ButtonLink>
                        <ButtonLink
                        border={false}
                        caption="Daftar Sekarang"
                        to="/about-us"
                        ></ButtonLink>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-white mt-6 p-6 shadow-xl rounded-2xl w-width-4">
                <div className="">
                    <h4 className="text-2xl font-semibold text-primary">
                    Kode Promo
                    </h4>
                    <div className="flex border-2 justify-between items-center border-secondary p-3 rounded-md">
                    <p className="text-base text-neutral-2 font-semibold ">
                        DIGICAMP24
                    </p>
                    <button className="flex gap-2">
                        <img className="w-6 h-6" src={CopyIcon} alt="" />
                        <p className="text-base text-secondary font-semibold">
                        Salin
                        </p>
                    </button>
                    </div>
                    <div className="bg-[#C4FFBA] w-[13.778rem] px-4 py-2 rounded-full mt-2">
                    <p className="text-base text-primary">
                        Lebih Hemat{" "}
                        <span className="font-semibold">Rp 600.000</span>
                    </p>
                    </div>
                    <p className=" text-base text-neutral-2 mt-2">
                    Berlaku untuk transaksi pertama*
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};
export default DetailClassHero;