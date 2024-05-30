import React from "react";
import Learning from "/images/learning-path.png";

function LearningPatch() {
  return (
    <div className="learning-section flex py-24 items-center bg-background">
      <div className="learning-container flex items-center gap-6 mx-auto">
        <div className="learning-content flex flex-col items-center gap-4 w-width-4">
          <h2 className="text-primary text-4xl font-semibold ">
            Bagaimana Cara Belajarnya?
          </h2>
          <p className="text-base text-neutral-2">
            Jelajahi bagaimana Edu Tera Insani membimbing siswa melalui
            perjalanan belajar terstruktur dan personal untuk kesuksesan
            akademis optimal.
          </p>
        </div>
        <img src={Learning} alt="Learning Plan" />
      </div>
    </div>
  );
}

export default LearningPatch;
