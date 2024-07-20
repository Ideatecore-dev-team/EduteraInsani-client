import React from "react";
import Hero from "../components/OurProgramHero";
import Jadwal from "../components/JadwalSection";
import Curriculum from "../components/OurProgramCurriculum";
import Facilities from "../components/Fasilitas";
import Kelebihan from "../components/KelebihanSection";
import DigitalSchooling from "../components/DigitalSchooling";

const DetailClass = function () {
  return (
    <>
      <Hero />
      <DigitalSchooling />
      <Kelebihan />
      <Jadwal />
      <Curriculum />
      <Facilities />
    </>
  );
};

export default DetailClass;
