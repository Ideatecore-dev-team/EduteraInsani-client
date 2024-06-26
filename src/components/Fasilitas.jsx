import { FacilitiesCardIcon1 } from "../assets/svg/aboutUs/FacilitiesCardIcon1";
import { FacilitiesCardIcon2 } from "../assets/svg/aboutUs/FacilitiesCardIcon2";
import { FacilitiesCardIcon3 } from "../assets/svg/aboutUs/FacilitiesCardIcon3";
import { FacilitiesCardIcon4 } from "../assets/svg/aboutUs/FacilitiesCardIcon4";

function Facilities() {
  return (
    <div className="facilities-section bg-background flex flex-col items-center self-stretch pb-24 gap-gap10">
      <div className="facilities-container flex flex-col items-center gap-12">
        <h2 className="h2 text-center text-primary text-4xl font-semibold">
          Fasilitas Kami
        </h2>
        <div className="facilities-cards flex flex-wrap items-start content-start gap-6 w-base-content">
          <div className="facilities-card bg-white flex w-width-6 h-height-3.1 p-6 flex-col items-start gap-4 flex-shrink-0 rounded-2xl">
            <div className="facilities-icon flex w-width-1 h-height-1 p-padding5 justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
              <div className=" w-16 h-16 flex-shrink-0">
                <FacilitiesCardIcon1 />
              </div>
            </div>
            <div className="points-&-description flex flex-col items-start gap-2 self-stretch">
              <h4 className="h4 text-2xl text-primary font-semibold">
                Kelas Virtual Melalui Zoom
              </h4>
              <p className="paragraph text-base font-normal self-stretch text-neutral-2">
                Akses sesi interaktif langsung dengan guru ahli dari mana saja,
                menciptakan pengalaman belajar yang menarik dan kolaborasi waktu
                nyata di antara siswa.
              </p>
            </div>
          </div>
          <div className="facilities-card bg-white flex w-width-6 h-height-3.1 p-6 flex-col items-start gap-4 flex-shrink-0 rounded-2xl">
            <div className="facilities-icon flex w-width-1 h-height-1 p-padding5 justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
              <div className=" w-16 h-16 flex-shrink-0 content-center">
                <FacilitiesCardIcon2 />
              </div>
            </div>
            <div className="points-&-description flex flex-col items-start gap-2 self-stretch">
              <h4 className="h4 text-2xl text-primary font-semibold">
                Integrasi Learning Kit melalui Google Classroom
              </h4>
              <p className="paragraph text-base font-normal self-stretch text-neutral-2">
                Integrasikan materi, tugas, dan penilaian ke dalam Google
                Classroom, menyediakan sumber daya terorganisir dan mudah
                diakses bagi siswa.
              </p>
            </div>
          </div>
          <div className="facilities-card bg-white flex w-width-6 h-height-3.1 p-6 flex-col items-start gap-4 flex-shrink-0 rounded-2xl">
            <div className="facilities-icon flex w-width-1 h-height-1 p-padding5 justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
              <div className=" w-16 h-16 flex-shrink-0">
                <FacilitiesCardIcon3 />
              </div>
            </div>
            <div className="points-&-description flex flex-col items-start gap-2 self-stretch">
              <h4 className="h4 text-2xl text-primary font-semibold">
                Short Course
              </h4>
              <p className="paragraph text-base font-normal self-stretch text-neutral-2">
                Ikuti kursus singkat virtual yang mencakup berbagai minat
                seperti seni, bahasa, menulis, dan lainnya, memberikan
                kesempatan kepada siswa untuk mengeksplorasi minat mereka dan
                mengembangkan keterampilan baru di luar kelas.
              </p>
            </div>
          </div>
          <div className="facilities-card bg-white flex w-width-6 h-height-3.1 p-6 flex-col items-start gap-4 flex-shrink-0 rounded-2xl">
            <div className="facilities-icon flex w-width-1 h-height-1 p-padding5 justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
              <div className=" w-16 h-16 flex-shrink-0">
                <FacilitiesCardIcon4 />
              </div>
            </div>
            <div className="points-&-description flex flex-col items-start gap-2 self-stretch">
              <h4 className="h4 text-2xl text-primary font-semibold">
                Perpustakaan Multimedia Interaktif
              </h4>
              <p className="paragraph text-base font-normal self-stretch text-neutral-2">
                Jelajahi koleksi besar sumber daya digital termasuk e-book,
                video, dan simulasi interaktif, meningkatkan keterlibatan siswa
                dan memfasilitasi pembelajaran mandiri dengan kecepatan mereka
                sendiri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
