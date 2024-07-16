import React from "react";
import Logo from "/images/curriculum-logo.png";
import "./CurriculumWhat.css";

function CurriculumWhat() {
  return (
    <div className="what-curriculum-section flex py-12 lg:py-24 items-center justify-center self-stretch bg-background mx-auto">
      <div className="what-curriculum-container lg:mt-0 flex flex-wrap gap-3 lg:flex-nowrap lg:gap-6 p-6 items-center w-mobile-6 lg:w-base-content mt-12 bg-white rounded-2xl">
        <div className="curriculum-img ml-2.5 flex p-6 justify-center items-center bg-background rounded-2xl">
          <img src={Logo} alt="Kurikulum Merdeka" className="size-[226px] lg:size-[270px]"/>
        </div>
        <div className="curriculum-desc flex flex-col items-start gap-4">
          <h2 className="text-primary text-2xl lg:text-4xl font-semibold">
            Kurikulum Merdeka Plus: Mendorong Kemandirian Bangsa
          </h2>
          <p className="text-base text-justify text-neutral-2 text-normal">
            <span className="font-semibold">Kurikulum Merdeka Plus</span> adalah
            pendekatan pendidikan yang fleksibel dan berpusat pada siswa,
            dirancang untuk mendorong kemaajar dan pemikiran kritis. Dengan
            fokus pada pengembangan keterampilan hidup dan pembelajaran praktis,
            kurikulum ini memungkinkan siswa untuk mengeksplorasi minat mereka,
            mengatasi tantangan dunia nyata, dan menjadi individu yang kreatif
            serta inovatif. Kurikulum ini juga mengintegrasikan nilai-nilai
            lokal dan global, mempersiapkan siswa untuk berkontribusi secara
            positif terhadap masyarakat dan bangsa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurriculumWhat;
