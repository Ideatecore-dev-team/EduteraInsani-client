import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "/images/edulogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container absolute w-base-content z-50 mx-auto left-0 right-0 top-3">
      <nav className="navbar flex bg-white w-base-content p-3 justify-between items-center absolute">
        <div className="logo-lang flex items-center justify-center gap-4">
          <div className="logo">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={Logo} className=" size-7" alt="logo" />
              <h3 className="text-3xl text-black font-semibold">
                Edu Tera Insani
              </h3>
            </NavLink>
          </div>
          <div className="lang">
            <button className="flex items-center justify-center">
              {/* <img className=" w-8 h-6" src={Lang} alt="flag" /> */}
            </button>
          </div>
        </div>
        <div className="menu-item flex justify-end items-center gap-3">
          <NavLink
            to="/about-us "
            className="flex px-4 py-3 items-center gap-2"
          >
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
            to ="/contactus"
            className="flex px-4 py-3 items-center gap-2"
          >
            <p className="text-base font-normal text-neutral-1">Bantuan</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
