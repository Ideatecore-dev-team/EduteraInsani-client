import React, { useState } from "react";
import faq from "../databases/faq.json";
import ButtonCtg from "./Buttons/ButtonCtg";
import FaQUmum from "../components/Categories/FaQumum";
// import KurikulumComponent from "./KurikulumComponent";
// import PendaftaranComponent from "./PendaftaranComponent";
// import PembayaranComponent from "./PembayaranComponent";
// import LegalitasComponent from "./LegalitasComponent";

const ButtonWithDropdown = () => {
  const [isDropDown, setIsDropDown] = useState({
    0: false,
    // 1: false,
    // 2: false,
    // 3: false,
    // 4: false,
  });

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);

  const toggleDropdown = (index) => {
    setIsDropDown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setSelectedCategory(index);
    setClickedButton(index);
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
                  active={selectedCategory === 0}
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
                  {selectedCategory === 0 && <FaQUmum />}
                  {/* {selectedCategory === 1 && <KurikulumComponent />}
                  {selectedCategory === 2 && <PendaftaranComponent />}
                  {selectedCategory === 3 && <PembayaranComponent />}
                  {selectedCategory === 4 && <LegalitasComponent />} */}
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
