import React from "react";

function Prinsip() {
  return (
    <div className="prinsip-section flex flex-col py-12 px-4 lg:py-24 items-center bg-background gap-gap10">
      <div className="prinsip-container lg:w-base-content w-full flex flex-col items-center gap-12">
        <h2 className=" text-primary w-56 lg:w-base-content text-2xl lg:text-4xl text-center font-semibold">
          Prinsip Pendidikan Edu Tera Insani
        </h2>
        <div className="all-prinsips lg:w-base-content w-full flex justify-center items-start content-start gap-6 flex-wrap">
          <div className="prinsip-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
            <h1 className="font-bold text-secondary text-5xl">01</h1>
            <div className="title-desc flex flex-col items-start gap-2">
              <p className=" text-base font-semibold text-primary">
                Pendekatan Proyek Inovatif, Aktif, dan Menyenangkan
              </p>
              <p className=" text-base font-normal text-neutral-2">
                Kami mendukung siswa kami untuk menjadi pecinta pengetahuan
                melalui kegiatan dan proyek inovatif, aktif, dan menyenangkan.
              </p>
            </div>
          </div>
          <div className="prinsip-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
            <h1 className="font-bold text-secondary text-5xl">02</h1>
            <div className="title-desc flex flex-col items-start gap-2">
              <p className=" text-base font-semibold text-primary">
                80% Praktik Keterampilan Hidup, 20% Teori
              </p>
              <p className=" text-base font-normal text-neutral-2">
                Pembelajaran kami akan didasarkan pada 80 persen praktik
                keterampilan hidup dan 20 persen pelajaran tradisional (ujian
                berbasis kertas).
              </p>
            </div>
          </div>
          <div className="prinsip-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
            <h1 className="font-bold text-secondary text-5xl">03</h1>
            <div className="title-desc flex flex-col items-start gap-2">
              <p className=" text-base font-semibold text-primary">
                Proyek Terpadu untuk Eksplorasi Mandiri
              </p>
              <p className=" text-base font-normal text-neutral-2">
                Kami mendorong semua guru untuk menggabungkan beberapa pelajaran
                menjadi satu proyek untuk mendorong siswa untuk secara mandiri
                mengeksplorasi berbagai buku dan referensi.
              </p>
            </div>
          </div>
          <div className="prinsip-card flex bg-white rounded-2xl w-width-6 p-6 items-start gap-6">
            <h1 className="font-bold text-secondary text-5xl">04</h1>
            <div className="title-desc flex flex-col items-start gap-2">
              <p className=" text-base font-semibold text-primary">
                Prioritas Pengembangan Keterampilan Hidup
              </p>
              <p className=" text-base font-normal text-neutral-2">
                Kami memprioritaskan pengembangan keterampilan hidup siswa kami,
                dengan semua proyek dan pelajaran yang diimplementasikan untuk
                membantu mereka mencapai target mereka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prinsip;
