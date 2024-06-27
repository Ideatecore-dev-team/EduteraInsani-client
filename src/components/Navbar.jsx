import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/images/edulogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <div className="navbar-container lg:absolute fixed xs:py-2 xs:px-4 lg:w-base-content w-full z-50 mx-auto lg:left-0 lg:right-0 lg:top-3">
      <nav className="navbar flex bg-white z-50 lg:w-base-content w-full p-3 justify-between items-center xs:mx overflow-hidden">
        <div className="logo-lang flex items-center justify-center gap-4">
          <div className="logo">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={Logo} className="size-7" alt="logo" />
              <h3 className="text-xl lg:text-3xl text-black font-semibold">
                Edu Tera Insani
              </h3>
            </NavLink>
          </div>
        </div>
        <button
          className="lg:hidden flex items-center p-2 justify-center size-10 rounded-xl bg-secondary text-white"
          onClick={handleToggleDropdown}
        >
          <RxHamburgerMenu />
        </button>
        <div
          className={`menu-item flex flex-col lg:flex-row xs:rounded-rounded32 lg:static absolute xs:px-2 xs:pb-3 xs:pt-20 top-2 left-4 right-4 bg-white lg:bg-transparent lg:shadow-none shadow-lg lg:gap-3 transition-all duration-500 ease-in-out transform origin-top ${
            isDropdownOpen
              ? "scale-y-100 -z-10"
              : "scale-y-0 lg:scale-y-100 lg:flex"
          }`}
        >
          <NavLink 
            to="/about-us" 
            className="flex px-4 py-3 items-center gap-2">
            <p className="text-base font-normal text-neutral-1">Tentang</p>
          </NavLink>
          <NavLink
            to="/curriculum"
            className="flex px-4 py-3 items-center gap-2"
          >
            <p className="text-base font-normal text-neutral-1">
              Kurikulum Kami
            </p>
          </NavLink>
          <NavLink 
            to="/help" 
            className="flex px-4 py-3 items-center gap-2">
            <p className="text-base font-normal text-neutral-1">Bantuan</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
