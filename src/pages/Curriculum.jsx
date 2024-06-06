import React from "react";
import Booklet from "../components/Booklet";
import LearningPatch from "../components/LearningPatch";
import CurriculumHero from "../components/CurriculumHero";
import CurriculumWhat from "../components/CurriculumWhat";

function Curriculum() {
  return (
    <div className="curriculum">
      <CurriculumHero />
      <CurriculumWhat />
      <LearningPatch />
      <Booklet />
    </div>
  );
}

export default Curriculum;
