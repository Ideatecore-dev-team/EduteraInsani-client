import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FaQumum from "./FaQumum";
import FaQkurikulum from "./FaQkurikulum";
import FaQpendaftaran from "./FaQpendaftaran";
import FaQpembayaran from "./FaQpembayaran";
import FaQlegalitas from "./FaQlegalitas";

const CategoryMobile = function () {
  const [visibleSection, setVisibleSection] = useState(null);

  function toggleSection(section) {
    setVisibleSection((prev) => (prev === section ? null : section));
  }

  const arrowStyle = (section) => ({
    transition: "transform 0.3s",
    transform: visibleSection === section ? "rotate(180deg)" : "rotate(0deg)",
  });

  const dropdownStyle = (section) => ({
    maxHeight: visibleSection === section ? "100rem" : "0px",
    transition: "max-height 1s ease-in-out",
    overflow: "hidden",
    opacity: visibleSection === section ? 1 : 0,
    visibility: visibleSection === section ? "visible" : "hidden",
  });

  return (
    <div className="list-of-question w-mobile-6 flex lg:flex-row flex-col items-start gap-6">
      <div className="frame-112 flex flex-col w-mobile-6 items-start gap-4">
        <div className="button-categories flex flex-col w-mobile-6 items-center lg:items-start gap-4">
          <button
            onClick={() => toggleSection("umum")}
            className="px-4 w-mobile-6 flex text-secondary justify-between text-base py-4 border-2 border-secondary rounded-full"
          >
            Umum
            <IoIosArrowDown
              className="size-6 text-secondary"
              style={arrowStyle("umum")}
            />
          </button>
          <div style={dropdownStyle("umum")}>
            {visibleSection === "umum" && (
              <div className="w-mobile-6">
                <FaQumum />
              </div>
            )}
          </div>

          <button
            onClick={() => toggleSection("kurikulum")}
            className="px-4 w-mobile-6 flex text-secondary justify-between text-base py-4 border-2 border-secondary rounded-full"
          >
            Kurikulum
            <IoIosArrowDown
              className="size-6 text-secondary"
              style={arrowStyle("kurikulum")}
            />
          </button>
          <div style={dropdownStyle("kurikulum")}>
            {visibleSection === "kurikulum" && (
              <div className="w-mobile-6">
                <FaQkurikulum />
              </div>
            )}
          </div>

          <button
            onClick={() => toggleSection("pendaftaran")}
            className="px-4 w-mobile-6 flex text-secondary justify-between text-base py-4 border-2 border-secondary rounded-full"
          >
            Pendaftaran
            <IoIosArrowDown
              className="size-6 text-secondary"
              style={arrowStyle("pendaftaran")}
            />
          </button>
          <div style={dropdownStyle("pendaftaran")}>
            {visibleSection === "pendaftaran" && (
              <div className="w-mobile-6">
                <FaQpendaftaran />
              </div>
            )}
          </div>

          <button
            onClick={() => toggleSection("pembayaran")}
            className="px-4 w-mobile-6 flex text-secondary justify-between text-base py-4 border-2 border-secondary rounded-full"
          >
            Pembayaran
            <IoIosArrowDown
              className="size-6 text-secondary"
              style={arrowStyle("pembayaran")}
            />
          </button>
          <div style={dropdownStyle("pembayaran")}>
            {visibleSection === "pembayaran" && (
              <div className="w-mobile-6">
                <FaQpembayaran />
              </div>
            )}
          </div>

          <button
            onClick={() => toggleSection("legalitas")}
            className="px-4 w-mobile-6 flex text-secondary justify-between text-base py-4 border-2 border-secondary rounded-full"
          >
            Legalitas
            <IoIosArrowDown
              className="size-6 text-secondary"
              style={arrowStyle("legalitas")}
            />
          </button>
          <div style={dropdownStyle("legalitas")}>
            {visibleSection === "legalitas" && (
              <div className="w-mobile-6">
                <FaQlegalitas />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMobile;
