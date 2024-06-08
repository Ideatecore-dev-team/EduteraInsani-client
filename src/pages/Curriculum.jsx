import React from "react";
import Booklet from "../components/Booklet";
import LearningPatch from "../components/LearningPatch";
import CurriculumHero from "../components/CurriculumHero";
import CurriculumWhat from "../components/CurriculumWhat";
import RemoteLearning from "../components/RemoteLearningSection"
import Prinsip from "../components/PrinsipSection"

function Curriculum() {
  return (
    <div className="curriculum">
      <CurriculumHero />
      <CurriculumWhat />
      <RemoteLearning/>
      <LearningPatch />
      <Prinsip/>
      <Booklet />
    </div>
  );
}

export default Curriculum;
