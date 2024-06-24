import React from "react";
import Learning from "/images/learning-path.png";
import { useLocation } from "react-router-dom";

function LearningPath() {
  const location = useLocation();
  const path = location.pathname;
  let backGround = "";

  if (path === "/curriculum") {
    backGround = "bg-white";
  } else {
    backGround = "bg-background";
  }

  return (
    <div
      className={`learning-section flex lg:py-24 py-12 items-center ${backGround}`}
    >
      <div className="learning-container flex lg:flex-row flex-col-reverse lg:items-center items-start gap-6 mx-auto xs:w-width-4">
        <div className="learning-content flex flex-col lg:items-center items-start gap-4 w-width-4">
          <h2 className="text-primary text-2xl lg:text-4xl font-semibold ">
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

export default LearningPath;
