import React, { useState, useEffect } from "react";
import ButtonCtg from "./Buttons/ButtonCtg";
import FaQumum from "./Categories/FaQumum";
import FaQkurikulum from "./Categories/FaQkurikulum";
import FaQpendaftaran from "./Categories/FaQpendaftaran";
import FaQpembayaran from "./Categories/FaQpembayaran";
import FaQlegalitas from "./Categories/FaQlegalitas";

const ButtonWithDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (index) => {
    setSelectedCategory(index);
  };

  const renderCategoryContent = (index) => {
    switch (index) {
      case 0:
        return <FaQumum />;
      case 1:
        return <FaQkurikulum />;
      case 2:
        return <FaQpendaftaran />;
      case 3:
        return <FaQpembayaran />;
      case 4:
        return <FaQlegalitas />;
      default:
        return null;
    }
  };

  return (
    <div className="bantuan-section flex lg:flex-col lg:pb-24 pb-12 xs:justify-center xs:items-start w-full items-center gap-gap10 bg-background">
      <div className="bantuan-container flex flex-col items-center lg:gap-12 gap-6">
        <h2 className="lg:text-4xl text-2xl text-primary font-semibold">
          Bantuan
        </h2>
        <div className="categories flex flex-col xs:w-mobile-6 items-start gap-4">
          <div className="categories-and-question flex flex-col items-start gap-4">
            <h4 className="lg:text-2xl text-lg text-primary font-semibold">
              Kategori Bantuan:
            </h4>
          </div>
          <div className="list-of-question flex items-start gap-6">
            <div className="frame-112 flex flex-col items-start gap-4">
              <div className="button-categories flex flex-col items-center lg:items-start gap-4">
                <ButtonCtg
                  caption="Umum"
                  buttonFn={() => handleButtonClick(0)}
                  isActive={selectedCategory === 0}
                />
                {isMobile && selectedCategory === 0 && (
                  <div className="mt-2 lg:hidden">
                    {renderCategoryContent(0)}
                  </div>
                )}
                <ButtonCtg
                  caption="Kurikulum"
                  buttonFn={() => handleButtonClick(1)}
                  isActive={selectedCategory === 1}
                />
                {isMobile && selectedCategory === 1 && (
                  <div className="mt-2 lg:hidden">
                    {renderCategoryContent(1)}
                  </div>
                )}
                <ButtonCtg
                  caption="Pendaftaran"
                  buttonFn={() => handleButtonClick(2)}
                  isActive={selectedCategory === 2}
                />
                {isMobile && selectedCategory === 2 && (
                  <div className="mt-2 lg:hidden">
                    {renderCategoryContent(2)}
                  </div>
                )}
                <ButtonCtg
                  caption="Pembayaran"
                  buttonFn={() => handleButtonClick(3)}
                  isActive={selectedCategory === 3}
                />
                {isMobile && selectedCategory === 3 && (
                  <div className="mt-2 lg:hidden">
                    {renderCategoryContent(3)}
                  </div>
                )}
                <ButtonCtg
                  caption="Legalitas"
                  buttonFn={() => handleButtonClick(4)}
                  isActive={selectedCategory === 4}
                />
                {isMobile && selectedCategory === 4 && (
                  <div className="mt-2 lg:hidden">
                    {renderCategoryContent(4)}
                  </div>
                )}
              </div>
            </div>
            {!isMobile && (
              <div className="all-questions flex-col items-start gap-4 xs:hidden lg:flex">
                <div className="all-questions flex flex-col items-start gap-4 xs:hidden">
                  {renderCategoryContent(selectedCategory)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithDropdown;
