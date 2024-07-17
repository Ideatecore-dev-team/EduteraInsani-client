import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/images/edulogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosGlobe } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import ButtonLink from "./Buttons/LinkButton";
import "./Navbar.css"

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropDown, setIsAboutDropDown] = useState(null);
  const [hoveredChevron, setHoveredChevron] = useState(null);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const links = document.querySelectorAll([".menu-item", ".logo"]);
    links.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleAboutDropDown = (index) => {
    setIsAboutDropDown(index);
  };

  const handleAboutDropDownClose = () => {
    setIsAboutDropDown(null);
  };

  const handleChevronHover = (index) => {
    setHoveredChevron(index);
  };

  const handleChevronLeave = () => {
    setHoveredChevron(null);
  };

  return (
    <div className="navbar-container lg:absolute fixed xs:py-2 xs:px-4 lg:w-base-content w-full z-50 mx-auto lg:left-0 lg:right-0 lg:top-3">
      <nav className="navbar flex bg-white z-50 lg:w-base-content w-full p-3 justify-between items-center xs:mx overflow-hidden">
        <div className="logo-lang flex items-center justify-center gap-4">
          <div className="logo">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={Logo} className="size-7" alt="logo" />
              <h3 className="text-lg lg:text-3xl text-black font-semibold">
                Edu Tera Insani
              </h3>
            </NavLink>
          </div>
          <div className="globe flex gap-2">
            <IoIosGlobe className="text-2xl" />
            <IoChevronDown className="text-2xl" />
          </div>
        </div>
        <button
          className="lg:hidden flex items-center p-2 justify-center size-10 rounded-xl bg-secondary text-white"
          onClick={handleToggleDropdown}
        >
          <RxHamburgerMenu />
        </button>
        <div
          className={`menu-item flex flex-col lg:flex-row xs:rounded-rounded32 lg:static absolute xs:px-2 xs:pb-3 xs:pt-20 top-2 left-4 right-4 bg-white lg:bg-transparent lg:shadow-none shadow-lg lg:gap-3 transition-all duration-500 ease-in-out transform origin-top -z-10 lg:-z-0 ${
            isDropdownOpen
              ? "scale-y-100 -z-10"
              : "scale-y-0 lg:scale-y-100 lg:flex"
          }`}
        >
          <div className="flex items-center relative">
            <NavLink
              to="/about-us"
              className="flex px-4 py-3 items-center gap-2"
            >
              <p className="text-base font-normal text-neutral-1">Tentang</p>
            </NavLink>
            <button
              onMouseEnter={() => {
                handleChevronHover(1);
                handleAboutDropDown(1);
              }}
              onMouseLeave={() => {
                handleChevronLeave(1);
                handleAboutDropDownClose();
              }}
              className={`chevron-down-1 lg:flex hidden duration-500 ${
                hoveredChevron === 1 ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoChevronDown className="text-2xl" />
            </button>
          </div>
          <div
            className={`bg-red-400 absolute w-40 top-9 -left-4 ${
              isAboutDropDown === 1 ? "h-40 duration-500" : "h-0 duration-300"
            }`}
          >
            <div className={`${isAboutDropDown === 1 ? "flex-col" : "hidden"}`}>
              <h1>nhdkdldl</h1>
              <h1>nhdkdldl</h1>
              <h1>nhdkdldl</h1>
              <h1>nhdkdldl</h1>
            </div>
          </div>
          <div className="flex items-center">
            <NavLink
              to="/curriculum"
              className="flex px-4 py-3 items-center gap-2"
            >
              <p className="text-base font-normal text-neutral-1">
                Kurikulum Kami
              </p>
            </NavLink>
            <button
              onMouseEnter={() => {
                handleChevronHover(2);
                handleAboutDropDown(2);
              }}
              onMouseLeave={() => {
                handleChevronLeave();
                handleAboutDropDownClose();
              }}
              className={`chevron-down-2 lg:flex hidden duration-500 ${
                hoveredChevron === 2 ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoChevronDown className="text-2xl" />
            </button>
            <div
              className={`bg-green-400 absolute w-40  top-9 right-28 ${
                isAboutDropDown === 2 ? "h-40 duration-500" : "h-0 duration-300"
              }`}
            >
              <div
                className={`${isAboutDropDown === 2 ? "flex-col" : "hidden"}`}
              >
                <h1>nhdkdldl</h1>
                <h1>nhdkdldl</h1>
                <h1>nhdkdldl</h1>
                <h1>nhdkdldl</h1>
              </div>
            </div>
          </div>
          <NavLink to="/help" className="flex px-4 py-3 items-center gap-2">
            <p className="text-base font-normal text-neutral-1">Bantuan</p>
          </NavLink>
        </div>
        <div className="cta hidden lg:flex items-start gap-2 -ml-28 lg:gap-3">
          <ButtonLink caption="Login" to="#" border={true}></ButtonLink>
          <ButtonLink border={false} caption="Daftar" to="#">
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
                fill="#FFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z"
                fill="#FFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z"
                fill="#FFF"
              />
            </svg>
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
