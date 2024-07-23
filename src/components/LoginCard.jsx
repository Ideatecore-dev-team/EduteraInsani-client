import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import "./LoginCard.css";
import ButtonLink from "./Buttons/LinkButton";
import GoogleLogo from "../assets/svg/Google.svg";

function LoginCard() {
  return (
    <div className="login-signup-container flex flex-col items-start">
      <div className="login-card flex w-[466px] p-6 flex-col items-start rounded-[32px] bg-white border gap-4">
        <h4 className="text-2xl font-semibold text-primary">
          Sebelum lanjut, login dulu yuk!
        </h4>
        <div className="email-form flex flex-col h-[80px] justify-center items-start gap-2 self-stretch">
          <p className="text-base text-primary font-normal">Email</p>
          <input
            className="login-input w-full flex h-[48px] px-4 py-3 items-center rounded-lg bg-background outline-none"
            type="email"
            id="email"
            name="email"
            placeholder="Masukkan email"
          />
        </div>
        <div className="password-form flex flex-col justify-center items-start gap-2 self-stretch relative">
          <p className="text-base text-primary font-normal">Password</p>
          <input
            className="login-input w-full flex h-[48px] px-4 py-3 items-center rounded-lg bg-background outline-none"
            type="password"
            id="password"
            name="email"
            placeholder="Masukkan email"
          />
          <button className="text-2xl text-primary absolute right-4 top-[2.75rem]">
            <IoEyeSharp />
          </button>
          <button className="text-sm text-secondary font-normal self-end">
            Lupa Password?
          </button>
        </div>
        <ButtonLink caption="Login" width={true} />
        <p className="text-sm text-primary font-normal self-center">
          Atau login dengan
        </p>
        <ButtonLink
          caption="Login Dengan Google"
          width={true}
          className="login-google"
          icon={GoogleLogo}
        />
        <div className="register flex gap-2 self-center">
          <p className="text-sm text-primary font-normal">Belum punya akun?</p>
          <button className="text-sm text-secondary font-normal">
            Daftar disini
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
