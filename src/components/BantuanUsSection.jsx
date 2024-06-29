import React, { useState } from "react";
import ButtonCtg from "./Buttons/ButtonCtg";
import FaQumum from "./Categories/FaQumum";
import FaQkurikulum from "./Categories/FaQkurikulum";
import FaQpendaftaran from "./Categories/FaQpendaftaran";
import FaQpembayaran from "./Categories/FaQpembayaran";
import FaQlegalitas from "./Categories/FaQlegalitas";

const ButtonWithDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="bantuan-section flex lg:flex-col lg:pb-24 pb-12 xs:justify-center xs:items-start xs:w-width-sm items-center gap-gap10 bg-background">
      <div className="bantuan-container flex flex-col items-center lg:gap-12 gap-6">
        <h2 className="lg:text-4xl text-2xl text-primary font-semibold w-width-2">
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
                <ButtonCtg
                  caption="Kurikulum"
                  buttonFn={() => handleButtonClick(1)}
                  isActive={selectedCategory === 1}
                />
                <ButtonCtg
                  caption="Pendaftaran"
                  buttonFn={() => handleButtonClick(2)}
                  isActive={selectedCategory === 2}
                />
                <ButtonCtg
                  caption="Pembayaran"
                  buttonFn={() => handleButtonClick(3)}
                  isActive={selectedCategory === 3}
                />
                <ButtonCtg
                  caption="Legalitas"
                  buttonFn={() => handleButtonClick(4)}
                  isActive={selectedCategory === 4}
                />
              </div>
            </div>
            <div className="all-questions flex flex-col items-start gap-4">
              {selectedCategory !== null && (
                <>
                  {selectedCategory === 0 && <FaQumum />}
                  {selectedCategory === 1 && <FaQkurikulum />}
                  {selectedCategory === 2 && <FaQpendaftaran />}
                  {selectedCategory === 3 && <FaQpembayaran />}
                  {selectedCategory === 4 && <FaQlegalitas />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithDropdown;
