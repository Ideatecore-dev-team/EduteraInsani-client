import React from "react";
import Booklet from "../components/Booklet";
import LearningPatch from "../components/LearningPatch";
import CurriculumHero from "../components/CurriculumHero";
import CurriculumWhat from "../components/CurriculumWhat";
import RemoteLearning from "../components/RemoteLearningSection"

function Curriculum() {
  return (
    <div className="curriculum">
      <CurriculumHero />
      <CurriculumWhat />
      <RemoteLearning/>
      <LearningPatch />
      <Booklet />
    </div>
  );
}

export default Curriculum;
