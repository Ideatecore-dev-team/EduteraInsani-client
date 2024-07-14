import React from "react";
import Booklet from "../components/Booklet";
import LearningPath from "../components/LearningPath";
import CurriculumHero from "../components/CurriculumHero";
import CurriculumWhat from "../components/CurriculumWhat";
import RemoteLearning from "../components/RemoteLearningSection";
import Prinsip from "../components/PrinsipSection";

function Curriculum() {
  return (
    <div className="curriculum">
      <CurriculumHero />
      <CurriculumWhat />
      <RemoteLearning />
      <LearningPath />
      <Prinsip />
      <Booklet />
    </div>
  );
}

export default Curriculum;
