import React from "react";
import FacilitiesIcon1 from "../../public/images/Facilities Icons-1.png";
import FacilitiesIcon2 from "../../public/images/Facilities Icons-2.png";
import FacilitiesIcon3 from "../../public/images/Facilities Icons-3.png";
import FacilitiesIcon4 from "../../public/images/Facilities Icons-4.png";
const DaftarTrialLeft = function () {
  return (
    <>
      <div className="facilities-container flex flex-col w-width-5">
        <h4 className="text-2xl font-semibold text-primary mb-6">
          Fasilitas Kami
        </h4>
        <div className=" bg-white rounded-2xl p-6 mb-6 border-2 border-secondary">
          <img className="w-16 h-16" src={FacilitiesIcon1} alt="" />
          <h4 className="text-2xl text-primary font-semibold mt-4">
            Kelas Virtual melalui Zoom
          </h4>
          <p className="text-base text-gray-500 mt-2">
            Akses sesi interaktif langsung dengan guru ahli dari mana saja,
            menciptakan pengalaman belajar yang menarik dan kolaborasi waktu
            nyata di antara siswa.
          </p>
        </div>
        <div className=" bg-white rounded-2xl p-6 mb-6 border-2 border-secondary">
          <img className="w-16 h-16" src={FacilitiesIcon4} alt="" />
          <h4 className="text-2xl text-primary font-semibold mt-4">
            Integrasi Learning Kit melalui Google Classroom
          </h4>
          <p className="text-base text-gray-500 mt-2">
            Integrasikan materi, tugas, dan penilaian ke dalam Google Classroom,
            menyediakan sumber daya terorganisir dan mudah diakses bagi siswa.
          </p>
        </div>
        <div className=" bg-white rounded-2xl p-6 mb-6 border-2 border-secondary">
          <img className="w-16 h-16" src={FacilitiesIcon3} alt="" />
          <h4 className="text-2xl text-primary font-semibold mt-4">
            Short Course
          </h4>
          <p className="text-base text-gray-500 mt-2">
            Ikuti kursus singkat virtual yang mencakup berbagai minat seperti
            seni, bahasa, menulis, dan lainnya, memberikan kesempatan kepada
            siswa untuk mengeksplorasi minat mereka dan mengembangkan
            keterampilan baru di luar kelas.
          </p>
        </div>
        <div className=" bg-white rounded-2xl p-6 mb-6 border-2 border-secondary">
          <img className="w-16 h-16" src={FacilitiesIcon2} alt="" />
          <h4 className="text-2xl text-primary font-semibold mt-4">
            Perpustakaan Multimedia Interaktif
          </h4>
          <p className="text-base text-gray-500 mt-2">
            Jelajahi koleksi besar sumber daya digital termasuk e-book, video,
            dan simulasi interaktif, meningkatkan keterlibatan siswa dan
            memfasilitasi pembelajaran mandiri dengan kecepatan mereka sendiri.
          </p>
        </div>
      </div>
    </>
  );
};
export default DaftarTrialLeft;
