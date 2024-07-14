import { FacilitiesCardIcon1 } from "../assets/svg/aboutUs/FacilitiesCardIcon1";
import { FacilitiesCardIcon2 } from "../assets/svg/aboutUs/FacilitiesCardIcon2";
import { FacilitiesCardIcon3 } from "../assets/svg/aboutUs/FacilitiesCardIcon3";
import { FacilitiesCardIcon4 } from "../assets/svg/aboutUs/FacilitiesCardIcon4";

const cardContent = [
  {
    icon: <FacilitiesCardIcon1 />,
    title: "Kelas Virtual Melalui Zoom",
    desc: "Akses sesi interaktif langsung dengan guru ahli dari mana saja, menciptakan pengalaman belajar yang menarik dan kolaborasi waktu nyata di antara siswa.",
  },
  {
    icon: <FacilitiesCardIcon2 />,
    title: "Integrasi Learning Kit melalui Google Classroom",
    desc: "Integrasikan materi, tugas, dan penilaian ke dalam Google Classroom, menyediakan sumber daya terorganisir dan mudah diakses bagi siswa.",
  },
  {
    icon: <FacilitiesCardIcon3 />,
    title: "Short Course",
    desc: "Ikuti kursus singkat virtual yang mencakup berbagai minat seperti seni, bahasa, menulis, dan lainnya, memberikan kesempatan kepada siswa untuk mengeksplorasi minat mereka dan mengembangkan keterampilan baru di luar kelas.",
  },
  {
    icon: <FacilitiesCardIcon4 />,
    title: "Perpustakaan Multimedia Interaktif",
    desc: "Jelajahi koleksi besar sumber daya digital termasuk e-book, video, dan simulasi interaktif, meningkatkan keterlibatan siswa dan memfasilitasi pembelajaran mandiri dengan kecepatan mereka sendiri.",
  },
];

const renderCards = () =>
  cardContent.map((card, index) => (
    <div className="facilities-card bg-white flex lg:w-width-6 w-mobile-6 lg:h-height-3.1 p-4 lg:p-6 flex-col items-start gap-4 flex-shrink-0 rounded-2xl">
      <div className="facilities-icon flex w-width-1 h-height-1 p-padding5 justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
        <div className=" w-16 h-16 flex-shrink-0">{card.icon}</div>
      </div>
      <div className="points-&-description flex flex-col items-start gap-2 self-stretch">
        <h4 className="h4 text-2xl text-primary font-semibold">{card.title}</h4>
        <p className="paragraph text-base font-normal self-stretch text-neutral-2">
          {card.desc}
        </p>
      </div>
    </div>
  ));

function Facilities() {
  return (
    <div className="facilities-section bg-background flex flex-col justify-center items-center py-12 lg:items-center self-stretch pb-24 gap-4 lg:gap-gap10">
      <div className="facilities-container w-mobile-6 lg:w-base-content flex flex-col items-center gap-6 lg:gap-12">
        <h2 className="h2 text-center text-primary text-2xl lg:text-4xl font-semibold">
          Fasilitas Kami
        </h2>
        <div className="facilities-cards w-mobile-6 flex flex-col lg:flex-row lg:flex-wrap items-start lg:content-start gap-4 lg:gap-6 lg:w-base-content">
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default Facilities;
