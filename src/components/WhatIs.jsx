import Vidio from "/images/vidio.png";

function WhatIs() {
  return (
    <div className="whatis-section py-24 -mt-12 lg:mt-0 flex flex-wrap items-center justify-center self-stretch bg-background">
      <div className="whatis-container flex flex-wrap lg:flex-nowrap w-mobile-6 lg:w-base-content bg-white rounded-2xl p-6 items-center gap-6">
        <img
          src={Vidio}
          alt="trailer"
          className="w-width-4.1 h-height-2 lg:h-height-3"
        />
        <div className="whatis-content flex flex-col items-start gap-4">
          <h2 className="text-2xl text-primary font-bold">
            Apa itu Edu Tera Insani?
          </h2>
          <p className="text-base text-neutral-2 font-normal">
            <span className="font-semibold">Edu Tera Insani</span> adalah
            platform sekolah digital yang dirancang untuk siswa SMP dan SMA,
            menawarkan jalur pembelajaran yang dipersonalisasi dan akses ke
            guru-guru ahli dari seluruh dunia. Melalui kurikulum yang
            komprehensif dan terorganisir, termasuk program inovatif seperti
            <span className="font-semibold"> Kurikulum Merdeka Plus</span>,
            siswa dapat terlibat dalam pembelajaran jarak jauh yang fleksibel.
          </p>
          <p className="text-base text-neutral-2 font-normal">
            Kami mengintegrasikan alat seperti{" "}
            <span className="font-semibold">Google Classroom</span> dan
            <span className="font-semibold"> Zoom </span>
            untuk pendidikan yang interaktif dan lancar, dilengkapi dengan
            <span className="font-semibold"> Short Course</span> untuk
            meningkatkan pengalaman belajar mereka.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatIs;
