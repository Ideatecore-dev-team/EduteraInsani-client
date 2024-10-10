import React from "react";
import Logo from "/images/curriculum-logo.png";
import ButtonLink from "./Buttons/LinkButton";

function HomeCurriculum() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="curriculum bg-secondary flex lg:py-24 py-12 items-center">
      <div className="curriculum-container lg:w-base-content w-width-3.2 flex lg:flex-row flex-col justify-center items-center gap-6 mx-auto">
        <img
          src={Logo}
          alt="curriculum"
          className="size-[226px] lg:size-[270px]"
        />
        <div className="curriculum-content flex flex-col lg:w-width-7 w-full lg:items-start items-center gap-4 xs:text-center">
          <h2 className="text-white text-2xl lg:text-4xl font-semibold">
            Kurikulum Merdeka Plus: Mendorong Kemandirian Belajar
          </h2>
          <p className="text-white text-neutral-2">
            Kurikulum Merdeka Plus mempromosikan pendekatan yang fleksibel dan
            berpusat pada siswa, mendorong pembelajaran mandiri dan berpikir
            kritis.
          </p>
          <ButtonLink
            border={true}
            caption="Pelajari lebih lanjut"
            to="/curriculum"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.749 12.75L3.24926 12.75L3.24926 11.25L20.749 11.25L20.749 12.75Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z"
                fill="white"
              />
            </svg>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default HomeCurriculum;
