import React, { useState, useEffect } from "react";
import ButtonDetailClass from "./Buttons/ButtonDetailClass";
import DetailClassRight from "./DetailClassRight";
import DetailClassComponents from "./DetailClassComponents";
import MetodePembayaran from "./MetodePembayaran";

const DetailClassHero = function () {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleButtonClick = (index) => {
    setSelectedCategory(index);
  };

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 0:
        return <DetailClassComponents />;
      case 1:
        return <MetodePembayaran />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" detail-class-hero bg-background flex justify-center">
        <div className=" program-kelas flex-wrap  lg:flex-row lg:flex-nowrap w-mobile-6  mt-40 lg:w-base-content flex justify-center items-start gap-6">
          <div className=" container-l lg:w-width-8 w-mobile-6 ">
            <h2 className="text-2xl lg:text-4xl font-semibold text-primary">
              Program Kelas 7 SMP | T.A 2024/2025
            </h2>
            <div className="button flex mt-6 gap-4 justify-center">
              <ButtonDetailClass
                caption="Detail Kelas"
                buttonFn={() => handleButtonClick(0)}
                isActive={selectedCategory === 0}
                border={false}
                width={true}
              ></ButtonDetailClass>
              <ButtonDetailClass
                border={true}
                caption={isMobile ? "Pembayaran" : "Metode Pembayaran"}
                buttonFn={() => handleButtonClick(1)}
                isActive={selectedCategory === 1}
                width={true}
              ></ButtonDetailClass>
            </div>
            {renderCategoryContent()}
          </div>
          <div className={`${isMobile ? "hidden" : "flex"}`}>
            <DetailClassRight />
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailClassHero;
