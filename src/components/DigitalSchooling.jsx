import React, { useState, useEffect } from "react";
import ButtonDetailClass from "./Buttons/ButtonDetailClass";
import AllClassComponent from "./AllClassComponent";
import JuniorHighScoolComponent from "./JuniorHighSchoolComponent";
import SeniorHighSchoolComponent from "./SeniorHighSchoolComponent";

const DigitalSchooling = function () {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleButtonClick = (index) => {
    setSelectedCategory(index);
  };

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 0:
        return <AllClassComponent />;
      case 1:
        return <JuniorHighScoolComponent />;
      case 2:
        return <SeniorHighSchoolComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="Digital-schooling-section flex w-[390px] lg:w-full pb-12 lg:pb-24 lg:flex-col lg:items-center justify-center items-start gap-gap10 bg-background">
        <div className="Digital-schooling-section mt-24 flex w-[342px] lg:w-[1152px] lg:justify-center flex-col items-center gap-6">
          <h2 className="text-4xl text-primary font-semibold text-center">
            Digital Schooling
          </h2>
          <div className="button flex gap-4 mb-6 justify-center w-1/2">
            <ButtonDetailClass
              caption="Semua Kelas"
              buttonFn={() => handleButtonClick(0)}
              isActive={selectedCategory === 0}
              border={false}
              width={true}
            ></ButtonDetailClass>
            <ButtonDetailClass
              caption="Junior Highschool"
              buttonFn={() => handleButtonClick(1)}
              isActive={selectedCategory === 1}
              border={false}
              width={true}
            ></ButtonDetailClass>
            <ButtonDetailClass
              border={true}
              caption={"Senior Highschool"}
              buttonFn={() => handleButtonClick(2)}
              isActive={selectedCategory === 2}
              width={true}
            ></ButtonDetailClass>
          </div>
          {renderCategoryContent()}
        </div>
      </div>
    </>
  );
};
export default DigitalSchooling;
