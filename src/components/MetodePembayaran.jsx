import React from "react";
import ButtonLink from "./Buttons/LinkButton";
import Book from "../../public/images/IoIosBook.png";
import StudentIcon from "../../public/images/Murid Icon.png";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Logo from "/images/edulogo.png";

const DetailClassHero = function () {
  const mataPelajaran = [
    {
      mata_pelajaran: "Bahasa inggris",
    },
    {
      mata_pelajaran: "IPA",
    },
    {
      mata_pelajaran: "IPS",
    },
    {
      mata_pelajaran: "MTK",
    },
    {
      mata_pelajaran: "Bahasa Indonesia",
    },
    {
      mata_pelajaran: "Seni",
    },
    {
      mata_pelajaran: "Agama",
    },
    {
      mata_pelajaran: "Olahraga",
    },
    {
      mata_pelajaran: "Informatika",
    },
    {
      mata_pelajaran: "Projek",
    },
  ];
  return (
    <>
      <div className="metode flex w-mobile-6 lg:w-width760 flex-col items-start gap-2 mt-12">
        <h3 className=" lg:text-3xl text-xl font-semibold text-center lg:text-left text-primary tracking-[-0.6px]">
          Metode Pembayaran Melalui Xendit
        </h3>
        <div className="all-cards flex flex-wrap lg:flex-nowrap w-mobile-6 lg:w-width760 items-start gap-6">
          <div className="method-card flex lg:h-[290px] p-6 lg:flex-col items-start gap-4 rounded-2xl bg-white">
            <div className="icon flex size-[74px] p-[5px] justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
              <div className="sVG-container flex size-16 px-1 justify-center items-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="64"
                  viewBox="0 0 56 64"
                  fill="none"
                >
                  <path
                    d="M45 18H5C2.23859 18 0 20.2386 0 23V31H49V22C49 19.7908 47.2092 18 45 18Z"
                    fill="#B2827D"
                  />
                  <path
                    d="M32.8754 9.17867C32.7406 6.97799 30.8373 5.29439 28.6386 5.43111L8.67566 6.65133C7.60926 6.71627 6.63172 7.19283 5.9242 7.99312C5.2157 8.79342 4.86219 9.82125 4.92762 10.8877L7.12391 46.8208C7.18885 47.8872 7.66541 48.8642 8.4657 49.5722C9.20301 50.2246 10.1342 50.5766 11.1107 50.5766C11.1937 50.5766 11.2767 50.5742 11.3602 50.5688L31.3226 49.3486C33.5238 49.2143 35.2054 47.3139 35.0717 45.1123L32.8754 9.17867Z"
                    fill="#5DCEA5"
                  />
                  <path
                    d="M32.8763 9.17867C32.7416 6.97799 30.8383 5.29439 28.6395 5.43111L22.1305 5.829L6.11328 30.27L6.61194 38.4292C6.87842 38.6847 7.16583 38.922 7.48132 39.1289L23.7791 49.8098L31.3236 49.3486C31.4753 49.3393 31.6176 49.3023 31.764 49.2768C32.0389 48.9973 32.2961 48.6972 32.516 48.3618L35.0362 44.5163L32.8763 9.17867Z"
                    fill="#4BBF9B"
                  />
                  <path
                    d="M29.1264 13.4161C29.0932 12.8654 28.6278 12.443 28.0673 12.4791C26.9755 12.5455 26.0165 11.7057 25.9491 10.6046C25.933 10.34 25.8124 10.0924 25.6137 9.91663C25.4154 9.74085 25.1591 9.64807 24.89 9.66761L12.9125 10.4C12.3612 10.4337 11.9418 10.9078 11.9755 11.4591C12.0424 12.5597 11.2016 13.5099 10.101 13.5773C9.83633 13.5934 9.58877 13.714 9.41299 13.9127C9.23721 14.1115 9.14785 14.3717 9.16396 14.6364L10.8725 42.5841C10.9057 43.1354 11.372 43.568 11.9315 43.5211C13.0209 43.4479 13.9823 44.2946 14.0497 45.3956C14.0658 45.6603 14.1864 45.9078 14.3852 46.0836C14.5683 46.2457 14.8041 46.3346 15.0478 46.3346C15.0683 46.3346 15.0883 46.3341 15.1088 46.3326L27.0863 45.6002C27.6376 45.5665 28.057 45.0924 28.0233 44.5411C27.9564 43.4406 28.7968 42.4904 29.8969 42.423C30.1615 42.4069 30.4096 42.2863 30.5854 42.0875C30.7611 41.8888 30.851 41.6285 30.8344 41.3639L29.1264 13.4161Z"
                    fill="#4BBF9B"
                  />
                  <path
                    d="M28.0688 12.4791C26.977 12.5455 26.018 11.7057 25.9506 10.6046C25.9345 10.34 25.8139 10.0924 25.6152 9.91663C25.4169 9.74085 25.1606 9.64807 24.8915 9.66761L19.3953 10.0037L9.7793 24.677L10.7955 41.3007L18.1866 46.1445L27.0878 45.6002C27.6391 45.5665 28.0585 45.0924 28.0248 44.5411C27.9579 43.4406 28.7983 42.4904 29.8984 42.423C30.163 42.4069 30.4111 42.2863 30.5869 42.0875C30.7626 41.8888 30.8525 41.6285 30.8359 41.3639L29.1279 13.4161C29.0947 12.8654 28.6293 12.443 28.0688 12.4791Z"
                    fill="#39B293"
                  />
                  <path
                    d="M51.1473 14.1481C50.9295 13.1017 50.3172 12.2032 49.4236 11.6173L32.6951 0.65489C31.8016 0.068952 30.7322 -0.133685 29.6873 0.084577C28.6419 0.30235 27.7435 0.914167 27.1575 1.80772L7.42511 31.9181C6.83966 32.8121 6.63703 33.88 6.8548 34.9259C7.07257 35.9718 7.68439 36.8702 8.57795 37.4562L25.3055 48.419C25.9798 48.8609 26.7401 49.0719 27.4915 49.0719C28.7962 49.0719 30.077 48.4356 30.8436 47.2657L50.576 17.1559C51.1619 16.2623 51.3651 15.194 51.1473 14.1481Z"
                    fill="#79E0B6"
                  />
                  <path
                    d="M45.1799 17.556C45.1262 17.2968 44.9709 17.0692 44.7492 16.9237C44.301 16.6303 43.9943 16.181 43.8859 15.6591C43.7775 15.1376 43.8801 14.6034 44.1731 14.1552C44.3186 13.9335 44.3703 13.663 44.3166 13.4032C44.2619 13.1434 44.1066 12.9159 43.885 12.7704L33.8479 6.19277C33.3869 5.89101 32.7658 6.01845 32.4641 6.48085C31.8596 7.40419 30.6164 7.66298 29.6945 7.05751C29.4729 6.91249 29.1994 6.8622 28.9431 6.91493C28.6833 6.96913 28.4558 7.12392 28.3103 7.3456L12.9626 30.7645C12.6599 31.2265 12.7888 31.8466 13.2507 32.1493C14.1731 32.7538 14.4314 33.996 13.8273 34.9188C13.5246 35.3808 13.654 36.0004 14.1154 36.3031L24.1521 42.8808C24.3166 42.9882 24.507 43.0443 24.7004 43.0443C24.7683 43.0443 24.8366 43.0375 24.9045 43.0233C25.1638 42.9691 25.3913 42.8143 25.5368 42.5922C25.8303 42.1444 26.2795 41.8373 26.8015 41.7289C27.3234 41.621 27.8581 41.7221 28.3059 42.0155C28.7678 42.3178 29.3879 42.1884 29.6897 41.7274L45.0373 18.3085C45.1828 18.0863 45.2346 17.8158 45.1799 17.556Z"
                    fill="#5DCEA5"
                  />
                  <path
                    d="M34.4571 23.7982C34.0108 22.4335 33.046 21.2104 31.7393 20.3544C28.9722 18.5409 25.4908 18.9433 23.9805 21.2475C23.2252 22.4003 23.0689 23.831 23.5411 25.2748C23.9874 26.6396 24.9522 27.8627 26.2584 28.7187C27.397 29.4648 28.6871 29.8617 29.9464 29.8617C30.1319 29.8617 30.3165 29.8534 30.5001 29.8358C32.0128 29.6923 33.2618 28.9784 34.0167 27.8256C34.7725 26.6728 34.9288 25.2421 34.4571 23.7982Z"
                    fill="#4BBF9B"
                  />
                  <path
                    d="M33.9326 18.0091C33.7451 18.0091 33.5546 17.9564 33.3857 17.8456C32.9238 17.5428 32.7949 16.9232 33.0966 16.4613L34.7402 13.952C35.0429 13.4906 35.6621 13.3597 36.125 13.6634C36.5869 13.9662 36.7158 14.5858 36.414 15.0477L34.7705 17.557C34.5781 17.85 34.2588 18.0091 33.9326 18.0091Z"
                    fill="#4BBF9B"
                  />
                  <path
                    d="M49 28H5C2.23859 28 0 25.7614 0 23V59C0 61.7614 2.23859 64 5 64H49C50.6569 64 52 62.6569 52 61V31C52 29.3431 50.6569 28 49 28Z"
                    fill="#C19087"
                  />
                  <path
                    d="M12 36.6699V43.6699C12 44.2199 11.55 44.6699 11 44.6699C10.45 44.6699 10 44.2199 10 43.6699V36.6699C10 36.1099 10.45 35.6699 11 35.6699C11.55 35.6699 12 36.1099 12 36.6699Z"
                    fill="#B2827D"
                  />
                  <path
                    d="M12 48.3301V55.3301C12 55.8901 11.55 56.3301 11 56.3301C10.45 56.3301 10 55.8901 10 55.3301V48.3301C10 47.7801 10.45 47.3301 11 47.3301C11.55 47.3301 12 47.7801 12 48.3301Z"
                    fill="#B2827D"
                  />
                  <path
                    d="M53 39H47C43.1406 39 40 42.1401 40 46C40 49.8599 43.1406 53 47 53H53C54.6543 53 56 51.6543 56 50V42C56 40.3457 54.6543 39 53 39Z"
                    fill="#B2827D"
                  />
                  <path
                    d="M46 48C47.1046 48 48 47.1046 48 46C48 44.8954 47.1046 44 46 44C44.8954 44 44 44.8954 44 46C44 47.1046 44.8954 48 46 48Z"
                    fill="#996967"
                  />
                  <path
                    d="M12 28V32C12 32.55 11.55 33 11 33C10.45 33 10 32.55 10 32V28H12Z"
                    fill="#B2827D"
                  />
                  <path
                    d="M11 47.3299C10.45 47.3299 10 47.7799 10 48.3299V55.3299C10 55.89 10.45 56.3299 11 56.3299C11.55 56.3299 12 55.89 12 55.3299V48.3299C12 47.7799 11.55 47.3299 11 47.3299ZM11 35.6699C10.45 35.6699 10 36.1099 10 36.6699V43.6699C10 44.2199 10.45 44.6699 11 44.6699C11.55 44.6699 12 44.2199 12 43.6699V36.6699C12 36.1099 11.55 35.6699 11 35.6699Z"
                    fill="#B2827D"
                  />
                  <path
                    d="M12 60V64H10V60C10 59.45 10.45 59 11 59C11.55 59 12 59.45 12 60Z"
                    fill="#B2827D"
                  />
                </svg>
              </div>
            </div>
            <div className="title-desc flex flex-col items-start gap-2 self-stretch">
              <h4 className=" self-stretch text-lg lg:text-2xl text-primary font-semibold tracking-[-0.48px]">
                E-Wallet
              </h4>
              <p className=" self-stretch text-base text-neutral-2 font-normal tracking-[-0.32px]">
                Bayar dengan mudah menggunakan dompet digital.
              </p>
            </div>
          </div>
          <div className="method-card flex lg:h-[290px] p-6 lg:flex-col items-start gap-4 rounded-2xl bg-white">
            <div className="icon flex size-[74px] p-[5px] justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
              <div className="sVG-container flex size-16 px-1 justify-center items-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59"
                  height="64"
                  viewBox="0 0 59 64"
                  fill="none"
                >
                  <path
                    d="M15.334 40H7.33398C6.7817 40 6.33398 40.4477 6.33398 41V55C6.33398 55.5523 6.7817 56 7.33398 56H15.334C15.8863 56 16.334 55.5523 16.334 55V41C16.334 40.4477 15.8863 40 15.334 40Z"
                    fill="#70B1F2"
                  />
                  <path
                    d="M33.334 40H25.334C24.7817 40 24.334 40.4477 24.334 41V55C24.334 55.5523 24.7817 56 25.334 56H33.334C33.8863 56 34.334 55.5523 34.334 55V41C34.334 40.4477 33.8863 40 33.334 40Z"
                    fill="#70B1F2"
                  />
                  <path
                    d="M51.334 40H43.334C42.7817 40 42.334 40.4477 42.334 41V55C42.334 55.5523 42.7817 56 43.334 56H51.334C51.8863 56 52.334 55.5523 52.334 55V41C52.334 40.4477 51.8863 40 51.334 40Z"
                    fill="#70B1F2"
                  />
                  <path
                    d="M16.334 36H6.33398C5.7817 36 5.33398 36.4477 5.33398 37V41C5.33398 41.5523 5.7817 42 6.33398 42H16.334C16.8863 42 17.334 41.5523 17.334 41V37C17.334 36.4477 16.8863 36 16.334 36Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M34.334 36H24.334C23.7817 36 23.334 36.4477 23.334 37V41C23.334 41.5523 23.7817 42 24.334 42H34.334C34.8863 42 35.334 41.5523 35.334 41V37C35.334 36.4477 34.8863 36 34.334 36Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M52.334 36H42.334C41.7817 36 41.334 36.4477 41.334 37V41C41.334 41.5523 41.7817 42 42.334 42H52.334C52.8863 42 53.334 41.5523 53.334 41V37C53.334 36.4477 52.8863 36 52.334 36Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M16.334 54H6.33398C5.7817 54 5.33398 54.4477 5.33398 55V59C5.33398 59.5523 5.7817 60 6.33398 60H16.334C16.8863 60 17.334 59.5523 17.334 59V55C17.334 54.4477 16.8863 54 16.334 54Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M34.334 54H24.334C23.7817 54 23.334 54.4477 23.334 55V59C23.334 59.5523 23.7817 60 24.334 60H34.334C34.8863 60 35.334 59.5523 35.334 59V55C35.334 54.4477 34.8863 54 34.334 54Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M52.334 54H42.334C41.7817 54 41.334 54.4477 41.334 55V59C41.334 59.5523 41.7817 60 42.334 60H52.334C52.8863 60 53.334 59.5523 53.334 59V55C53.334 54.4477 52.8863 54 52.334 54Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M52.8535 17.1455L29.8535 3.14551C29.5352 2.95215 29.1328 2.95215 28.8145 3.14551L5.81445 17.1455C5.51562 17.3271 5.33398 17.6514 5.33398 18V33C5.33398 33.5527 5.78125 34 6.33398 34H52.334C52.8867 34 53.334 33.5527 53.334 33V18C53.334 17.6514 53.1523 17.3271 52.8535 17.1455Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M58.0751 19.0303C57.9667 18.0938 57.4452 17.2715 56.6444 16.7744L29.8612 0.150391C29.539 -0.0507812 29.1288 -0.0507812 28.8065 0.150391L2.02333 16.7744C1.22255 17.2715 0.701063 18.0938 0.592665 19.0303C0.485243 19.9658 0.805555 20.8857 1.47157 21.5518C2.06532 22.1455 2.84755 22.4531 3.63954 22.4531C4.19227 22.4531 4.74989 22.3027 5.24989 21.9951L29.3339 7.17383L53.4179 21.9951C54.6337 22.7432 56.1874 22.5596 57.1962 21.5518C57.8622 20.8857 58.1825 19.9658 58.0751 19.0303Z"
                    fill="#B8E1FF"
                  />
                  <path
                    d="M55.334 58H3.33398C2.7817 58 2.33398 58.4477 2.33398 59V63C2.33398 63.5523 2.7817 64 3.33398 64H55.334C55.8863 64 56.334 63.5523 56.334 63V59C56.334 58.4477 55.8863 58 55.334 58Z"
                    fill="#70B1F2"
                  />
                  <path
                    d="M30.334 20V16H33.334C33.8867 16 34.334 15.5527 34.334 15C34.334 14.4473 33.8867 14 33.334 14H30.334V13C30.334 12.4473 29.8867 12 29.334 12C28.7812 12 28.334 12.4473 28.334 13V14C26.1279 14 24.334 15.7939 24.334 18C24.334 20.2061 26.1279 22 28.334 22V26H25.334C24.7812 26 24.334 26.4473 24.334 27C24.334 27.5527 24.7812 28 25.334 28H28.334V29C28.334 29.5527 28.7812 30 29.334 30C29.8867 30 30.334 29.5527 30.334 29V28C32.54 28 34.334 26.2061 34.334 24C34.334 21.7939 32.54 20 30.334 20ZM26.334 18C26.334 16.8975 27.2314 16 28.334 16V20C27.2314 20 26.334 19.1025 26.334 18ZM30.334 26V22C31.4365 22 32.334 22.8975 32.334 24C32.334 25.1025 31.4365 26 30.334 26Z"
                    fill="#FFCD5F"
                  />
                  <path
                    d="M55.334 32H3.33398C2.7817 32 2.33398 32.4477 2.33398 33V37C2.33398 37.5523 2.7817 38 3.33398 38H55.334C55.8863 38 56.334 37.5523 56.334 37V33C56.334 32.4477 55.8863 32 55.334 32Z"
                    fill="#B8E1FF"
                  />
                </svg>
              </div>
            </div>
            <div className="title-desc flex flex-col items-start gap-2 self-stretch">
              <h4 className=" self-stretch text-lg lg:text-2xl text-primary font-semibold tracking-[-0.48px]">
                Virtual Account
              </h4>
              <p className=" self-stretch text-base text-neutral-2 font-normal tracking-[-0.32px]">
                Transfer langsung ke akun virtual yang disediakan.
              </p>
            </div>
          </div>
          <div className="method-card flex lg:h-[290px] p-6 lg:flex-col items-start gap-4 rounded-2xl bg-white">
            <div className="icon flex size-[74px] p-[5px] justify-center items-center flex-shrink-0 rounded-lg bg-secondary">
              <div className="sVG-container flex size-16 px-1 justify-center items-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="48"
                  viewBox="0 0 65 48"
                  fill="none"
                >
                  <path
                    d="M46.666 0H4.66602C2.45688 0 0.666016 1.79086 0.666016 4V34C0.666016 36.2091 2.45688 38 4.66602 38H46.666C48.8752 38 50.666 36.2091 50.666 34V4C50.666 1.79086 48.8752 0 46.666 0Z"
                    fill="#8FCAFF"
                  />
                  <path
                    d="M48.2549 23.0586C44.7446 22.3564 41.1489 22 37.5669 22H31.666C30.0117 22 28.666 23.3457 28.666 25V38H46.666C48.8716 38 50.666 36.2061 50.666 34V23.4762C49.8584 23.3569 49.0541 23.2184 48.2549 23.0586Z"
                    fill="#70B1F2"
                  />
                  <path
                    d="M63.666 26H57.7651C54.4473 26 51.1152 25.6699 47.8623 25.0195C44.48 24.3428 41.0161 24 37.5669 24H31.666C31.1138 24 30.666 24.4473 30.666 25V45C30.666 45.5527 31.1138 46 31.666 46H37.5669C40.8848 46 44.2168 46.3301 47.4697 46.9805C50.8521 47.6572 54.3159 48 57.7651 48H63.666C64.2183 48 64.666 47.5527 64.666 47V27C64.666 26.4473 64.2183 26 63.666 26Z"
                    fill="#79E0B6"
                  />
                  <path
                    d="M47.666 42C50.4274 42 52.666 39.3137 52.666 36C52.666 32.6863 50.4274 30 47.666 30C44.9046 30 42.666 32.6863 42.666 36C42.666 39.3137 44.9046 42 47.666 42Z"
                    fill="#5DCEA5"
                  />
                  <path
                    d="M39.666 37H36.666C36.1138 37 35.666 36.5527 35.666 36C35.666 35.4473 36.1138 35 36.666 35H39.666C40.2183 35 40.666 35.4473 40.666 36C40.666 36.5527 40.2183 37 39.666 37Z"
                    fill="#5DCEA5"
                  />
                  <path
                    d="M58.666 37H55.666C55.1138 37 54.666 36.5527 54.666 36C54.666 35.4473 55.1138 35 55.666 35H58.666C59.2183 35 59.666 35.4473 59.666 36C59.666 36.5527 59.2183 37 58.666 37Z"
                    fill="#5DCEA5"
                  />
                  <path d="M0.666016 6H50.666V16H0.666016V6Z" fill="#B8E1FF" />
                  <path
                    d="M12.666 26H5.66602C5.11373 26 4.66602 26.4477 4.66602 27V33C4.66602 33.5523 5.11373 34 5.66602 34H12.666C13.2183 34 13.666 33.5523 13.666 33V27C13.666 26.4477 13.2183 26 12.666 26Z"
                    fill="#B8E1FF"
                  />
                  <path
                    d="M24.666 27H16.666C16.1138 27 15.666 27.4473 15.666 28C15.666 28.5527 16.1138 29 16.666 29H24.666C25.2183 29 25.666 28.5527 25.666 28C25.666 27.4473 25.2183 27 24.666 27Z"
                    fill="#B8E1FF"
                  />
                  <path
                    d="M21.666 31H16.666C16.1138 31 15.666 31.4473 15.666 32C15.666 32.5527 16.1138 33 16.666 33H21.666C22.2183 33 22.666 32.5527 22.666 32C22.666 31.4473 22.2183 31 21.666 31Z"
                    fill="#B8E1FF"
                  />
                </svg>
              </div>
            </div>
            <div className="title-desc flex flex-col items-start gap-2 self-stretch">
              <h4 className=" self-stretch text-lg lg:text-2xl text-primary font-semibold tracking-[-0.48px]">
                Kartu Kredit / Debit
              </h4>
              <p className=" self-stretch text-base text-neutral-2 font-normal tracking-[-0.32px]">
                Gunakan kartu kredit atau debit untuk pembayaran cepat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailClassHero;
