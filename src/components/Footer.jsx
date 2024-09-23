import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/images/edulogo.png";
import "./Footer.css";

function Footer() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const links = document.querySelectorAll([".footer-link a", ".logo-slogan"]);
    links.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
    };
  }, []);

  return (
    <footer className="footer bg-white flex items-center py-24 px-6 lg:px-3">
      <div className="footer-container  flex w-mobile-6 lg:w-base-content mx-auto items-start flex-col gap-7">
        <div className="logo-slogan flex flex-col items-start gap-2">
          <Link className="flex items-center gap-2" to="/">
            <img src={Logo} className=" size-8 lg:size-10" alt="logo" />
            <h3 className="lg:text-3xl text-xl text-black font-semibold">
              Edu Tera Insani
            </h3>
          </Link>
          <h4 className="lg:text-2xl text-lg font-semibold text-primary">
            Nurturing Minds Building Future.
          </h4>
        </div>
        <div className="all-details flex justify-between items-start self-stretch lg:flex-row flex-col row-gap lg:gap-0 gap-12">
          <div className="information flex flex-col items-start gap-4">
            <div className="phone flex items-start gap-2 w-width-4">
              <div className="size-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0377 3.29028C7.09761 3.29028 3.07723 7.16261 3.07548 11.9216C3.07432 13.4434 3.48774 14.9287 4.27161 16.2369L3 20.7096L7.75142 19.5094C9.07309 20.2008 10.5427 20.5614 12.0343 20.5604H12.0377C16.9779 20.5604 20.9983 16.6875 21 11.9285C21.0012 9.62338 20.0698 7.45351 18.3772 5.82248C16.6852 4.19086 14.4352 3.29086 12.0377 3.29028ZM12.0377 19.1024H12.0348C10.6982 19.1024 9.3871 18.7563 8.24323 18.1025L7.97032 17.9469L5.15187 18.6588L5.90439 16.0111L5.72729 15.7399C4.98343 14.6054 4.58745 13.2782 4.58806 11.9216C4.58981 7.96564 7.932 4.74828 12.0406 4.74828C14.0299 4.74886 15.9002 5.49615 17.3071 6.85196C18.714 8.20777 19.488 10.0107 19.4868 11.928C19.4851 15.8839 16.1435 19.1024 12.0372 19.1024H12.0377ZM16.1237 13.7285C15.8996 13.6211 14.7987 13.0991 14.5932 13.0265C14.3882 12.9551 14.239 12.918 14.0897 13.134C13.9411 13.35 13.5114 13.836 13.3814 13.9794C13.2501 14.1234 13.1195 14.1408 12.8954 14.0334C12.6712 13.9254 11.9495 13.6978 11.0948 12.9627C10.4288 12.3913 9.97935 11.6853 9.84871 11.4687C9.71806 11.2533 9.83477 11.1365 9.94684 11.0291C10.0473 10.9333 10.171 10.7777 10.2825 10.6517C10.3939 10.5257 10.4311 10.4357 10.5066 10.2917C10.5809 10.1483 10.5437 10.0217 10.4874 9.91428C10.4311 9.8057 9.984 8.74428 9.79645 8.31286C9.61529 7.89248 9.43064 7.9488 9.29303 7.94183C9.16239 7.93603 9.01374 7.93428 8.86335 7.93428C8.71529 7.93428 8.472 7.98828 8.26645 8.20428C8.06148 8.42028 7.48258 8.9417 7.48258 10.0031C7.48258 11.0651 8.28503 12.0905 8.3971 12.2345C8.50916 12.378 9.97645 14.5571 12.223 15.492C12.7572 15.7132 13.1741 15.8462 13.4998 15.946C14.0363 16.1103 14.5246 16.0865 14.9102 16.0314C15.3399 15.9693 16.2352 15.51 16.421 15.0065C16.608 14.5031 16.608 14.0711 16.5523 13.9811C16.4977 13.8911 16.3479 13.8371 16.1237 13.7285Z"
                    fill="#A88646"
                  />
                </svg>
              </div>
              <p className="text-base text-neutral-2">
                +62 896-9069-7474 (DINA)
              </p>
            </div>
            <div className="mail flex items-start gap-2 w-width-4">
              <div className="size-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="#A88646"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base text-neutral-2">
                eduterainsanifoundation@gmail.com
              </p>
            </div>
            <div className="address flex items-start gap-2 lg:w-width-6">
              <div className="lg:size-6 size-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                    stroke="#A88646"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                    stroke="#A88646"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base text-neutral-2">
                Jl. Cendrawasih 1, Kom. Binamarga No. 10, Kebayoran Lama.
                jakarta.
              </p>
            </div>
          </div>
          <div className=" flex flex-wrap gap-9">
            <div className="footer-link flex flex-col items-start gap-6 ">
              <p className="text-primary text-base font-semibold">
                Tentang Sekolah
              </p>
              <Link className=" text-base text-neutral-2" to="/about-us">
                <p>Tentang Edu Tera Insani</p>
              </Link>
              <Link className=" text-base text-neutral-2" to="/curriculum">
                <p>Kurikulum Kami</p>
              </Link>
              <Link className=" text-base text-neutral-2" to="/help">
                <p>Kontak Kami</p>
              </Link>
            </div>
            <div className="footer-link flex flex-col items-start gap-6">
              <p className="text-primary text-base font-semibold">
                Program Kami
              </p>
              <Link className=" text-base text-neutral-2" to="/ourprogram">
                <p>Junior Highschool</p>
              </Link>
              <Link className=" text-base text-neutral-2" to="/ourprogram">
                <p>Senior Highschool</p>
              </Link>
              <Link className=" text-base text-neutral-2" to="/shortcourse">
                <p>Short Course</p>
              </Link>
            </div>
            <div className="footer-link flex flex-col items-start gap-6">
              <p className="text-primary text-base font-semibold">
                Bantuan dan Panduan
              </p>
              <Link className=" text-base text-neutral-2" to="/help">
                <p>Bantuan</p>
              </Link>
              <Link className=" text-base text-neutral-2" to="/curriculum">
                <p>Kebijakan Privasi</p>
              </Link>
              <Link className=" text-base text-neutral-2" to="/help">
                <p>Syarat dan Ketentuan</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom-section flex flex-col gap-6 self-stretch">
          <hr />
          <div className="bottom-content flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-start self-stretch">
            <p className="text-primary text-base font-semibold">
              Copyright 2024 Edu Tera Insani. All rights reserved.
            </p>
            <div className="icon flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12.0607C22 6.504 17.5233 2 12 2C6.47667 2 2 6.504 2 12.0607C2 17.0833 5.656 21.2453 10.4373 22V14.9693H7.89867V12.06H10.4373V9.844C10.4373 7.32267 11.93 5.92933 14.2147 5.92933C15.308 5.92933 16.4533 6.126 16.4533 6.126V8.602H15.1913C13.9493 8.602 13.5627 9.378 13.5627 10.174V12.0607H16.336L15.8927 14.9687H13.5627V22C18.344 21.2453 22 17.0833 22 12.0607Z"
                  fill="#A88646"
                />
              </svg>
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
                  d="M19.792 5.41483C20.6521 5.64589 21.3325 6.32626 21.5635 7.18633C21.9872 8.75244 22 12.0002 22 12.0002C22 12.0002 22 15.2608 21.5764 16.8141C21.3453 17.6741 20.665 18.3545 19.8049 18.5856C18.2516 19.0092 12 19.0092 12 19.0092C12 19.0092 5.74839 19.0092 4.19512 18.5856C3.33504 18.3545 2.65469 17.6741 2.42362 16.8141C2 15.248 2 12.0002 2 12.0002C2 12.0002 2 8.75244 2.41078 7.19917C2.64185 6.33909 3.32221 5.65873 4.18229 5.42767C5.73556 5.00404 11.9872 4.99121 11.9872 4.99121C11.9872 4.99121 18.2388 4.99121 19.792 5.41483ZM15.1836 12.0002L9.99743 15.004V8.99635L15.1836 12.0002Z"
                  fill="#A88646"
                />
              </svg>
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
                  d="M12 3C9.5556 3 9.2496 3.0102 8.2896 3.054C7.3314 3.0978 6.6768 3.2502 6.1044 3.4728C5.5044 3.6984 4.9602 4.0524 4.5102 4.5108C4.05253 4.96028 3.69831 5.5041 3.4722 6.1044C3.2508 6.6768 3.0978 7.332 3.054 8.2902C3.0108 9.2496 3 9.555 3 12C3 14.445 3.0102 14.7504 3.054 15.7104C3.0978 16.6686 3.2502 17.3232 3.4728 17.8956C3.6984 18.4956 4.0524 19.0398 4.5108 19.4898C4.96029 19.9475 5.50411 20.3017 6.1044 20.5278C6.6768 20.7498 7.3314 20.9022 8.2896 20.946C9.2496 20.9898 9.5556 21 12 21C14.4444 21 14.7504 20.9898 15.7104 20.946C16.6686 20.9022 17.3232 20.7498 17.8956 20.5272C18.4956 20.3016 19.0398 19.9476 19.4898 19.4892C19.9475 19.0397 20.3017 18.4959 20.5278 17.8956C20.7498 17.3232 20.9022 16.6686 20.946 15.7104C20.9898 14.7504 21 14.4444 21 12C21 9.5556 20.9898 9.2496 20.946 8.2896C20.9022 7.3314 20.7498 6.6768 20.5272 6.1044C20.3012 5.50384 19.947 4.95979 19.4892 4.5102C19.0397 4.05253 18.4959 3.69831 17.8956 3.4722C17.3232 3.2508 16.668 3.0978 15.7098 3.054C14.7504 3.0108 14.445 3 12 3ZM12 4.6218C14.403 4.6218 14.688 4.6308 15.6372 4.674C16.5144 4.7142 16.9908 4.86 17.3082 4.9842C17.7282 5.1468 18.0282 5.3424 18.3432 5.6568C18.6582 5.9718 18.8532 6.2718 19.0158 6.6918C19.1394 7.0092 19.2858 7.4856 19.326 8.3628C19.3692 9.312 19.3782 9.597 19.3782 12C19.3782 14.403 19.3692 14.688 19.326 15.6372C19.2858 16.5144 19.14 16.9908 19.0158 17.3082C18.8718 17.6991 18.6419 18.0528 18.3432 18.3432C18.0528 18.642 17.6992 18.8718 17.3082 19.0158C16.9908 19.1394 16.5144 19.2858 15.6372 19.326C14.688 19.3692 14.4036 19.3782 12 19.3782C9.5964 19.3782 9.312 19.3692 8.3628 19.326C7.4856 19.2858 7.0092 19.14 6.6918 19.0158C6.30087 18.8718 5.9472 18.6419 5.6568 18.3432C5.35811 18.0528 5.12828 17.6991 4.9842 17.3082C4.8606 16.9908 4.7142 16.5144 4.674 15.6372C4.6308 14.688 4.6218 14.403 4.6218 12C4.6218 9.597 4.6308 9.312 4.674 8.3628C4.7142 7.4856 4.86 7.0092 4.9842 6.6918C5.1468 6.2718 5.3424 5.9718 5.6568 5.6568C5.94716 5.35803 6.30085 5.12819 6.6918 4.9842C7.0092 4.8606 7.4856 4.7142 8.3628 4.674C9.312 4.6308 9.597 4.6218 12 4.6218Z"
                  fill="#A88646"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 15.003C11.6057 15.003 11.2152 14.9254 10.8508 14.7744C10.4865 14.6235 10.1554 14.4023 9.87658 14.1235C9.59773 13.8446 9.37653 13.5136 9.22561 13.1492C9.0747 12.7849 8.99702 12.3944 8.99702 12C8.99702 11.6057 9.0747 11.2152 9.22561 10.8508C9.37653 10.4865 9.59773 10.1554 9.87658 9.87659C10.1554 9.59774 10.4865 9.37654 10.8508 9.22562C11.2152 9.07471 11.6057 8.99703 12 8.99703C12.7965 8.99703 13.5603 9.31342 14.1235 9.87659C14.6866 10.4398 15.003 11.2036 15.003 12C15.003 12.7965 14.6866 13.5603 14.1235 14.1235C13.5603 14.6866 12.7965 15.003 12 15.003ZM12 7.37403C10.7731 7.37403 9.59649 7.86141 8.72895 8.72896C7.8614 9.5965 7.37402 10.7731 7.37402 12C7.37402 13.2269 7.8614 14.4036 8.72895 15.2711C9.59649 16.1387 10.7731 16.626 12 16.626C13.2269 16.626 14.4036 16.1387 15.2711 15.2711C16.1386 14.4036 16.626 13.2269 16.626 12C16.626 10.7731 16.1386 9.5965 15.2711 8.72896C14.4036 7.86141 13.2269 7.37403 12 7.37403ZM17.9718 7.29003C17.9718 7.58005 17.8566 7.85818 17.6515 8.06325C17.4465 8.26833 17.1683 8.38353 16.8783 8.38353C16.5883 8.38353 16.3102 8.26833 16.1051 8.06325C15.9 7.85818 15.7848 7.58005 15.7848 7.29003C15.7848 7.00002 15.9 6.72188 16.1051 6.51681C16.3102 6.31174 16.5883 6.19653 16.8783 6.19653C17.1683 6.19653 17.4465 6.31174 17.6515 6.51681C17.8566 6.72188 17.9718 7.00002 17.9718 7.29003Z"
                  fill="#A88646"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
