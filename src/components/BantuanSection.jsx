import React, { useState } from "react";
import faq from "../databases/faq.json";
import ButtonCtg from "./Buttons/ButtonCtg";
import FaQumum from "../components/Categories/FaQumum";
import FaQkurikulum from "../components/Categories/FaQkurikulum";
import FaQpendaftaran from "../components/Categories/FaQpendaftaran";
import FaQpembayaran from "../components/Categories/FaQpembayaran";
import FaQlegalitas from "../components/Categories/FaQlegalitas";

const ButtonWithDropdown = () => {
  const [isDropDown, setIsDropDown] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [selectedCategory, setSelectedCategory] = useState(0);
  // const [isClickedButton, setisClickedButton] = useState(null);

  const toggleDropdown = (index) => {
    setIsDropDown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setSelectedCategory(index);
    // setisClickedButton(index);
  };

  return (
    <div className="bantuan-section flex flex-col pb-24 items-center gap-gap10 bg-background">
      <div className="bantuan-container flex flex-col items-center gap-12">
        <h2 className=" text-4xl text-primary font-semibold w-width-2">
          Bantuan
        </h2>
        <div className="categories flex flex-col items-start gap-4">
          <div className="categories-and-question flex flex-col items-start gap-4">
            <h4 className=" text-2xl text-primary font-semibold">
              Kategori Bantuan:
            </h4>
          </div>
          <div className="list-of-question flex items-start gap-6">
            <div className="frame-112 flex flex-col items-start gap-4">
              <div className="button-categories flex flex-col items-start gap-4">
                <ButtonCtg
                  caption="Umum"
                  buttonFn={() => setSelectedCategory(0)}
                  // active={selectedCategory === 0}
                />
                <ButtonCtg
                  caption="Kurikulum"
                  buttonFn={() => setSelectedCategory(1)}
                />
                <ButtonCtg
                  caption="Pendaftaran"
                  buttonFn={() => setSelectedCategory(2)}
                />
                <ButtonCtg
                  caption="Pembayaran"
                  buttonFn={() => setSelectedCategory(3)}
                />
                <ButtonCtg
                  caption="Legalitas"
                  buttonFn={() => setSelectedCategory(4)}
                />
              </div>
            </div>
            <div className="all-questions flex flex-col items-start gap-4">
              {selectedCategory !== null && (
                <>
                  {selectedCategory === 0 && <FaQumum />}
                  {selectedCategory === 1 && <FaQkurikulum />}
                  {selectedCategory === 2 && <FaQpendaftaran />}
                  {selectedCategory === 3 && <FaQpembayaran/>}
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
