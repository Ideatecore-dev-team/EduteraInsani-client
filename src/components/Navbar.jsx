import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/images/edulogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosGlobe } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import ButtonLink from "./Buttons/LinkButton";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredChevron, setHoveredChevron] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDropdownHover = (index) => {
    if (!isMobile) {
      setActiveDropdown(index);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleChevronHover = (index) => {
    setHoveredChevron(index);
  };

  const handleChevronLeave = () => {
    setHoveredChevron(null);
  };

  return (
    <div className="navbar-container lg:absolute fixed xs:py-2 xs:px-4 lg:w-base-content w-full z-50 mx-auto lg:left-0 lg:right-0 lg:top-3">
      <nav className="navbar flex bg-white z-50 lg:w-base-content w-full p-3 justify-between items-center xs:mx">
        <div className="logo-lang flex items-center justify-center gap-4">
          <div className="logo">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={Logo} className="size-7" alt="logo" />
              <h3 className="text-lg lg:text-3xl text-black font-semibold">
                Edu Tera Insani
              </h3>
            </NavLink>
          </div>
          <div className="globe hidden lg:flex gap-2">
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
          <div
            className="flex items-start lg:items-center relative flex-col lg:flex-row"
            onMouseEnter={() => handleDropdownHover(1)}
            onMouseLeave={handleDropdownLeave}
          >
            <NavLink
              onClick={() => isMobile && handleDropdownClick(1)}
              to="#"
              className="flex px-4 py-3 items-center gap-2"
            >
              <p className="text-base font-normal text-neutral-1">Tentang</p>
              <IoChevronDown
                className={`chevron-down-1 duration-500 ${
                  activeDropdown === 1 ? "rotate-180" : "rotate-0"
                }`}
              />
            </NavLink>
            {activeDropdown === 1 && (
              <div
                className={` lg:rounded-xl ${
                  isMobile
                    ? "flex flex-col items-start"
                    : "absolute dropdown-hover w-[152px] bottom-[-110px] bg-white"
                }`}
              >
                <div className=" lg:border-t-2 lg:mt-5 lg:border-gray-300 lg:shadow-md lg:rounded-b-xl bg-white">
                  <NavLink
                    to="/about-us"
                    className="flex lg:px-4 px-8 py-3 items-start lg:items-center gap-2"
                  >
                    <p className="text-base font-normal text-neutral-1">
                      Sekolah
                    </p>
                  </NavLink>
                  <NavLink
                    to="/curriculum"
                    className="flex lg:px-4 px-8 py-3 items-start lg:items-center gap-2"
                  >
                    <p className="text-base font-normal text-neutral-1">
                      Kurikulum Kami
                    </p>
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          <div
            className="flex items-start lg:items-center relative flex-col lg:flex-row"
            onMouseEnter={() => handleDropdownHover(2)}
            onMouseLeave={handleDropdownLeave}
          >
            <NavLink
              onClick={() => isMobile && handleDropdownClick(2)}
              to="#"
              className="flex px-4 py-3 items-center xs:justify-between gap-2"
            >
              <p className="text-base font-normal text-neutral-1">
                Program Kami
              </p>
              <IoChevronDown
                className={`chevron-down-2 duration-500 ${
                  activeDropdown === 2 ? "rotate-180" : "rotate-0"
                }`}
              />
            </NavLink>
            {activeDropdown === 2 && (
              <div
                className={` ${
                  isMobile
                    ? "flex flex-col items-start"
                    : "absolute dropdown-hover w-[161px] bottom-[-110px]"
                }`}
              >
                <div className=" lg:border-t-2 lg:mt-5 lg:border-gray-300 lg:shadow-md lg:rounded-b-xl bg-white">
                  <NavLink
                    to="/ourprogram"
                    className="flex lg:px-4 px-8 py-3 items-start lg:items-center gap-2"
                  >
                    <p className="text-base font-normal text-neutral-1">
                      Digital Schooling
                    </p>
                  </NavLink>
                  <NavLink
                    to="/shortcourse"
                    className="flex lg:px-4 px-8 py-3 items-start lg:items-center gap-2"
                  >
                    <p className="text-base font-normal text-neutral-1">
                      Short Course
                    </p>
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/help"
            className="flex px-4 py-3 items-start lg:items-center gap-2"
          >
            <p className="text-base font-normal text-neutral-1">Bantuan</p>
          </NavLink>

          <div className="flex lg:hidden flex-row gap-2 mt-3">
            <ButtonLink
              caption="Login"
              width={true}
              to=""
              border={true}
            ></ButtonLink>
            <ButtonLink border={false} width={true} caption="Daftar" to="">
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
        </div>

        <div className="cta hidden lg:flex items-center gap-3">
          <ButtonLink caption="Login" to="" border={true}></ButtonLink>
          <ButtonLink border={false} caption="Daftar" to="">
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
