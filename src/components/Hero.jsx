/* eslint-disable react/prop-types */
import React from "react";
import "./Hero.css";
import ButtonLink from "./Buttons/Buttonlink";
import Banner from "/images/Main Banner.png";
import MobileBanner from "/images/banner-mobile.png";
import Teacher1 from "/images/teacher-1.png";
import Teacher2 from "/images/teacher-2.png";
import Teacher3 from "/images/teacher-3.png";
import Teacher4 from "/images/teacher-4.png";
import Plus from "/images/Plus.png";

function Hero({ onCardHeroClick }) {
  return (
    <>
      <div className="hero flex py-12 lg:py-24 flex-col lg:justify-center items-center gap-4 lg:gap-gap10 -z-20">
        <div className="hero-cta lg:h-height-5.1 w-width-3.2 lg:w-base-content flex flex-col items-start gap-4 justify-center relative">
          <img src={MobileBanner} alt="banner" className="lg:hidden" />
          <h1 className=" text-primary text-4xl sm lg:text-5xl font-bold sm:self-stretch sm:leading-leading45 sm:tracking-trackingMinus072">
            Nurturing Minds
            <br /> Building Future.
          </h1>
          <p className=" text-neutral-2 text-base font-normal lg:w-width-5">
            Bergabunglah dengan kami dalam membina pikiran dan membangun masa
            depan di Digital Schooling Edu Tera Insani.
          </p>
          <div className="cta flex items-start gap-3">
            <ButtonLink
              caption="Hubungi Kami"
              to="/help"
              border={false}
            ></ButtonLink>
            <ButtonLink
              border={true}
              caption="Pelajari Lebih Lanjut"
              to="/about-us"
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
                  fill="#A88646"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z"
                  fill="#A88646"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z"
                  fill="#A88646"
                />
              </svg>
            </ButtonLink>
          </div>
          <div className="main-banner absolute xs:hidden">
            <img src={Banner} alt="Banner" />
          </div>
          <div className="secondary-banner absolute xs:hidden bg-primary flex flex-col justify-end items-start gap-1 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 14L21 9L12 4L3 9L12 14ZM12 14L18.1591 10.5783C18.7017 11.9466 19 13.4384 19 14.9999C19 15.7013 18.9398 16.3885 18.8244 17.0569C16.2143 17.3106 13.849 18.4006 12 20.0555C10.151 18.4006 7.78571 17.3106 5.17562 17.0569C5.06017 16.3885 5 15.7012 5 14.9999C5 13.4384 5.29824 11.9466 5.84088 10.5782L12 14ZM8 19.9999V12.5L12 10.2778"
                stroke="#FBF9F7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base text-background">
              Define your future
              <br />
              with Edu Tera Insani
            </p>
          </div>
          <div className="icon-1 absolute xs:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
            >
              <g opacity="0.4" clipPath="url(#clip0_491_3875)">
                <path
                  d="M41.753 65.1384L41.81 65.0847C41.8225 65.0674 41.8331 65.0489 41.8419 65.0295C41.871 64.9902 41.8955 64.9477 41.915 64.9028L58.79 35.6745C58.8886 35.5021 58.9147 35.2976 58.8628 35.1059C57.4959 30.8351 54.5983 27.2205 50.7272 24.9572C46.3137 22.4091 41.6266 22.4873 39.3185 22.7352C40.6939 19.4979 43.1868 11.0775 34.7171 6.1875C34.5448 6.08805 34.3401 6.06109 34.148 6.11258C33.9558 6.16406 33.792 6.28976 33.6925 6.46202L29.9332 12.9734C24.0948 9.95338 18.0082 11.2631 17.7335 11.3339C17.6326 11.3569 17.5376 11.4006 17.4544 11.4621C17.3712 11.5236 17.3016 11.6016 17.25 11.6913L0.375001 40.9197C0.375001 40.9197 0.35625 40.9522 0.346875 40.9684C0.337501 40.9847 0.322501 41.0106 0.309377 41.0334L0.29136 41.1096C0.284405 41.1306 0.279175 41.1522 0.275724 41.1742C0.271533 41.2018 0.269852 41.2299 0.2707 41.2579C0.267018 41.2772 0.265835 41.2968 0.267184 41.3164C0.268766 41.3495 0.272975 41.3823 0.27977 41.4146C0.278636 41.4272 0.280163 41.4399 0.284257 41.4519L0.317333 41.5446L0.332933 41.5926L0.381881 41.6728L0.407725 41.718L0.469296 41.7839L0.514762 41.8101L0.586209 41.8514L0.64952 41.9442L0.701482 41.9742L0.759938 42.008L0.842635 42.0297L0.894597 42.0597L0.976425 42.068L1.04201 42.0669L1.12485 42.0584L1.17232 42.0512C1.25016 42.0139 7.44615 40.6721 12.9671 43.8596C16.4878 45.9478 19.1389 49.2338 20.4354 53.1165C20.4898 53.3014 20.6132 53.4583 20.78 53.5546C20.9469 53.651 21.1445 53.6794 21.3318 53.634C21.3866 53.644 27.5812 52.2971 33.1022 55.4846C36.6262 57.5689 39.2785 60.8564 40.5705 64.7415L40.59 64.7527C40.6006 64.7896 40.6148 64.8254 40.6323 64.8594L40.6688 64.9238L40.7104 64.9868C40.7273 65.0083 40.7464 65.028 40.7673 65.0456L40.8193 65.0756C40.8928 65.1412 40.9791 65.191 41.0726 65.2219L41.1278 65.2538L41.204 65.2718L41.2845 65.2749C41.3073 65.2777 41.3304 65.278 41.3533 65.2757C41.4516 65.2714 41.5478 65.2456 41.6351 65.2002C41.6549 65.191 41.6741 65.1804 41.6924 65.1684L41.753 65.1384ZM34.6072 7.87778C42.9898 13.3237 37.6232 22.9039 37.3757 23.3326L23.7913 46.8614C24.1627 43.2783 23.3183 38.9283 18.4728 35.8233L34.6072 7.87778ZM2.45029 40.3252L18.3765 12.7401C19.6478 12.5258 24.5595 11.9234 29.1794 14.279L16.8175 35.6904C16.7181 35.8626 16.6911 36.0674 16.7426 36.2595C16.7941 36.4516 16.9198 36.6154 17.0921 36.7149C24.3245 40.8905 22.5178 47.8972 21.2463 50.9995C19.6862 47.4649 17.0516 44.512 13.7171 42.5606C9.39452 40.0649 4.80493 40.0868 2.45029 40.3252ZM22.5854 51.9502L38.5116 24.3651C39.8406 24.1408 45.174 23.4831 49.9772 26.2562C53.4091 28.2927 56.0195 31.4666 57.3552 35.2271L41.4477 62.7797C39.899 59.1771 37.2371 56.1652 33.8522 54.1856C29.5296 51.6899 24.94 51.7118 22.5854 51.9502Z"
                  fill="#A88646"
                />
                <path
                  d="M46.9646 43.4742L40.9651 32.8657C40.8994 32.752 40.8051 32.6575 40.6915 32.5917C40.5779 32.5259 40.4491 32.4911 40.3178 32.4907C40.1865 32.4903 40.0574 32.5243 39.9435 32.5895C39.8295 32.6546 39.7346 32.7485 39.6683 32.8618L33.4808 43.5788C33.4142 43.693 33.3791 43.8228 33.3788 43.9549C33.3785 44.0871 33.4132 44.217 33.4793 44.3314C33.5467 44.444 33.6417 44.5376 33.7553 44.6034C33.8704 44.6682 34.0005 44.7015 34.1326 44.6999L46.3196 44.5914C46.4497 44.5898 46.5772 44.5545 46.6895 44.4887C46.8018 44.423 46.8951 44.3291 46.9601 44.2164C47.0252 44.1037 47.0598 43.9761 47.0606 43.8459C47.0614 43.7158 47.0283 43.5877 46.9646 43.4742ZM35.4361 43.1922L40.3111 34.7484L45.0378 43.1066L35.4361 43.1922Z"
                  fill="#A88646"
                />
              </g>
              <defs>
                <clipPath id="clip0_491_3875">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(24) rotate(30)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="icon-2 absolute xs:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="59"
              viewBox="0 0 60 59"
              fill="none"
            >
              <g opacity="0.4" clipPath="url(#clip0_491_3865)">
                <path
                  d="M31.2444 34.0376C31.1379 34.066 31.0265 34.0707 30.9181 34.0512L5.62912 29.5028C5.48899 29.4776 5.35891 29.4131 5.25409 29.3167C5.14927 29.2204 5.07404 29.0962 5.03719 28.9587C5.00034 28.8212 5.0034 28.676 5.046 28.5401C5.0886 28.4043 5.16899 28.2834 5.27777 28.1915L24.9034 11.6043C24.9876 11.5333 25.0865 11.4817 25.1929 11.4532C25.2993 11.4246 25.4107 11.4199 25.5192 11.4393L50.8091 15.9914C50.9492 16.0166 51.0793 16.0811 51.1841 16.1775C51.289 16.2738 51.3642 16.398 51.401 16.5355C51.4379 16.673 51.4348 16.8182 51.3922 16.9541C51.3496 17.0899 51.2692 17.2108 51.1604 17.3027L31.5338 33.8862C31.4496 33.9573 31.3508 34.009 31.2444 34.0376ZM7.46378 28.3085L30.8397 32.5271L48.9744 17.1857L25.6015 12.978L7.46378 28.3085Z"
                  fill="#A88646"
                />
                <path
                  d="M17.0642 39.0718C16.8721 39.1232 16.6674 39.0963 16.4951 38.9968C16.3228 38.8974 16.1971 38.7336 16.1456 38.5414L14.1074 30.9348C14.056 30.7426 14.0829 30.5379 14.1824 30.3657C14.2818 30.1934 14.4456 30.0677 14.6378 30.0162C14.8299 29.9647 15.0346 29.9917 15.2069 30.0911C15.3792 30.1906 15.5049 30.3544 15.5563 30.5465L17.5945 38.1532C17.646 38.3453 17.6191 38.5501 17.5196 38.7223C17.4202 38.8946 17.2563 39.0203 17.0642 39.0718Z"
                  fill="#A88646"
                />
                <path
                  d="M46.042 31.3072C45.8499 31.3587 45.6451 31.3317 45.4729 31.2323C45.3006 31.1328 45.1749 30.969 45.1234 30.7768L43.0852 23.1702C43.0337 22.978 43.0607 22.7733 43.1602 22.6011C43.2596 22.4288 43.4234 22.3031 43.6156 22.2516C43.8077 22.2001 44.0124 22.2271 44.1847 22.3266C44.3569 22.426 44.4826 22.5898 44.5341 22.782L46.5723 30.3886C46.6238 30.5808 46.5968 30.7855 46.4974 30.9577C46.3979 31.13 46.2341 31.2557 46.042 31.3072Z"
                  fill="#A88646"
                />
                <path
                  d="M33.5456 42.6259C25.3521 44.8213 17.1297 42.2143 16.1455 38.5414C16.094 38.3493 16.121 38.1445 16.2205 37.9723C16.3199 37.8 16.4837 37.6743 16.6759 37.6228C16.868 37.5714 17.0727 37.5983 17.245 37.6978C17.4172 37.7972 17.5429 37.961 17.5944 38.1532C18.2098 40.4497 25.1884 43.3122 33.1573 41.177C41.1262 39.0417 45.7386 33.0733 45.1233 30.7768C45.0718 30.5847 45.0988 30.38 45.1982 30.2077C45.2977 30.0355 45.4615 29.9098 45.6536 29.8583C45.8458 29.8068 46.0505 29.8337 46.2227 29.9332C46.395 30.0327 46.5207 30.1965 46.5722 30.3886C47.5564 34.0615 41.739 40.4304 33.5456 42.6259Z"
                  fill="#A88646"
                />
                <path
                  d="M44.4579 39.8844C44.2658 39.9359 44.0611 39.9089 43.8888 39.8095C43.7165 39.71 43.5908 39.5462 43.5394 39.3541L39.8745 25.6765L28.0074 23.2464C27.9084 23.2295 27.8138 23.193 27.7292 23.1388C27.6446 23.0847 27.5717 23.0141 27.5149 22.9313C27.4581 22.8485 27.4185 22.7551 27.3985 22.6567C27.3784 22.5582 27.3784 22.4568 27.3983 22.3584C27.4182 22.2599 27.4577 22.1665 27.5144 22.0836C27.5711 22.0007 27.6439 21.93 27.7284 21.8758C27.813 21.8216 27.9075 21.7849 28.0065 21.7679C28.1055 21.7509 28.2069 21.754 28.3047 21.7769L40.6272 24.2985C40.764 24.3262 40.8903 24.3914 40.9921 24.4869C41.0938 24.5824 41.1668 24.7044 41.203 24.8392L44.9883 38.9658C45.0397 39.158 45.0128 39.3627 44.9133 39.5349C44.8139 39.7072 44.6501 39.8329 44.4579 39.8844Z"
                  fill="#A88646"
                />
                <path
                  d="M45.3314 43.1444C44.9016 43.2596 44.4472 43.2447 44.0258 43.1016C43.6045 42.9586 43.2349 42.6938 42.964 42.3408C42.6931 41.9877 42.533 41.5623 42.5039 41.1182C42.4748 40.6742 42.578 40.2314 42.8005 39.8461C43.023 39.4607 43.3548 39.1499 43.7539 38.9531C44.1531 38.7563 44.6016 38.6822 45.0428 38.7403C45.484 38.7984 45.898 38.986 46.2326 39.2794C46.5672 39.5728 46.8072 39.9589 46.9224 40.3887C47.0769 40.9651 46.996 41.5793 46.6976 42.0961C46.3993 42.6128 45.9078 42.9899 45.3314 43.1444ZM44.555 40.2466C44.4117 40.285 44.283 40.365 44.1852 40.4765C44.0874 40.5881 44.0249 40.7261 44.0055 40.8732C43.9861 41.0202 44.0108 41.1697 44.0764 41.3028C44.142 41.4358 44.2456 41.5464 44.3741 41.6206C44.5025 41.6947 44.6501 41.7292 44.7981 41.7195C44.9462 41.7097 45.088 41.6564 45.2057 41.5661C45.3233 41.4758 45.4116 41.3526 45.4593 41.2121C45.507 41.0717 45.5119 40.9202 45.4735 40.7769C45.422 40.5848 45.2963 40.421 45.1241 40.3215C44.9518 40.2221 44.7471 40.1951 44.555 40.2466Z"
                  fill="#A88646"
                />
                <path
                  d="M47.5828 47.1999L45.4095 47.7823C45.309 47.8096 45.204 47.8157 45.101 47.8002C44.9981 47.7847 44.8995 47.7479 44.8116 47.6922C44.7236 47.6366 44.6482 47.5632 44.5902 47.4768C44.5321 47.3904 44.4927 47.2928 44.4744 47.1904L43.6719 42.7466C43.6277 42.5526 43.6623 42.3489 43.7682 42.1803C43.8741 42.0118 44.0426 41.8922 44.2367 41.848C44.4308 41.8037 44.6345 41.8383 44.803 41.9442C44.9715 42.0501 45.0911 42.2187 45.1354 42.4127C45.0767 42.2225 45.096 42.0168 45.189 41.8408C45.282 41.6648 45.4411 41.533 45.6313 41.4743C45.8215 41.4156 46.0272 41.4349 46.2032 41.5279C46.3792 41.6209 46.511 41.78 46.5697 41.9702L48.0966 46.2198C48.132 46.3177 48.1466 46.4219 48.1396 46.5257C48.1325 46.6296 48.1039 46.7308 48.0556 46.823C48.0072 46.9152 47.9402 46.9963 47.8588 47.0612C47.7774 47.1261 47.6834 47.1733 47.5828 47.1999ZM45.8072 46.1228L46.4085 45.9616L45.1538 42.4816C45.1472 42.464 45.1423 42.4458 45.1393 42.4272C45.1459 42.4448 45.1508 42.463 45.1538 42.4816L45.8072 46.1228Z"
                  fill="#A88646"
                />
              </g>
              <defs>
                <clipPath id="clip0_491_3865">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0.606201 12.4233) rotate(-15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="icon-3 absolute xs:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
            >
              <g opacity="0.4" clipPath="url(#clip0_491_3874)">
                <path
                  d="M27.6468 35.9139C27.5403 35.8853 27.4415 35.8337 27.3573 35.7626L16.5947 26.6671C16.4859 26.5752 16.4055 26.4543 16.3629 26.3185C16.3203 26.1826 16.3172 26.0374 16.3541 25.8999C16.3909 25.7624 16.4662 25.6382 16.571 25.5419C16.6758 25.4455 16.8059 25.381 16.946 25.3558L30.8145 22.8602C30.9229 22.8408 31.0343 22.8455 31.1408 22.874C31.2472 22.9026 31.346 22.9542 31.4303 23.0252L42.1929 32.1207C42.3017 32.2126 42.3821 32.3335 42.4247 32.4693C42.4673 32.6052 42.4703 32.7504 42.4335 32.8879C42.3966 33.0254 42.3214 33.1496 42.2166 33.2459C42.1118 33.3423 41.9817 33.4068 41.8416 33.432L27.9731 35.9276C27.8646 35.947 27.7532 35.9424 27.6468 35.9139ZM18.7807 26.5501L28.0554 34.3889L40.0069 32.2377L30.7322 24.3989L18.7807 26.5501Z"
                  fill="#A88646"
                />
                <path
                  d="M19.5101 34.4053C19.318 34.3538 19.1542 34.2281 19.0547 34.0558C18.9553 33.8835 18.9283 33.6788 18.9798 33.4867L20.0212 29.6001C20.0727 29.4079 20.1984 29.2441 20.3707 29.1446C20.5429 29.0452 20.7476 29.0182 20.9398 29.0697C21.1319 29.1212 21.2957 29.2469 21.3952 29.4192C21.4946 29.5914 21.5216 29.7961 21.4701 29.9883L20.4287 33.8749C20.3772 34.0671 20.2515 34.2309 20.0792 34.3303C19.907 34.4298 19.7023 34.4567 19.5101 34.4053Z"
                  fill="#A88646"
                />
                <path
                  d="M35.4479 38.6758C35.2557 38.6243 35.0919 38.4986 34.9925 38.3263C34.893 38.1541 34.8661 37.9493 34.9175 37.7572L35.959 33.8706C36.0104 33.6784 36.1361 33.5146 36.3084 33.4152C36.4807 33.3157 36.6854 33.2888 36.8775 33.3402C37.0697 33.3917 37.2335 33.5174 37.3329 33.6897C37.4324 33.8619 37.4593 34.0667 37.4079 34.2588L36.3664 38.1454C36.3149 38.3376 36.1892 38.5014 36.017 38.6008C35.8447 38.7003 35.64 38.7272 35.4479 38.6758Z"
                  fill="#A88646"
                />
                <path
                  d="M26.3851 40.6228C21.7016 39.3678 18.4003 35.6492 18.9797 33.4867C19.0312 33.2946 19.1569 33.1308 19.3292 33.0313C19.5014 32.9319 19.7061 32.9049 19.8983 32.9564C20.0904 33.0079 20.2542 33.1336 20.3537 33.3058C20.4531 33.4781 20.4801 33.6828 20.4286 33.8749C20.1287 34.9942 22.6621 38.0723 26.7733 39.1739C30.8845 40.2755 34.6176 38.8765 34.9175 37.7572C34.969 37.5651 35.0947 37.4013 35.2669 37.3018C35.4392 37.2024 35.6439 37.1754 35.836 37.2269C36.0282 37.2784 36.192 37.4041 36.2915 37.5763C36.3909 37.7486 36.4179 37.9533 36.3664 38.1455C35.7869 40.3079 31.0686 41.8777 26.3851 40.6228Z"
                  fill="#A88646"
                />
                <path
                  d="M45.7441 52.4098L3.72634 41.1512C3.14994 40.9968 2.6585 40.6197 2.36013 40.1029C2.06176 39.5861 1.98091 38.9719 2.13535 38.3955L9.12347 12.3155C9.27791 11.7391 9.65501 11.2477 10.1718 10.9493C10.6886 10.651 11.3027 10.5701 11.8791 10.7246L53.8969 21.9832C54.4733 22.1376 54.9648 22.5147 55.2631 23.0315C55.5615 23.5483 55.6424 24.1625 55.4879 24.7389L48.4998 50.8189C48.3453 51.3953 47.9682 51.8867 47.4515 52.1851C46.9347 52.4834 46.3205 52.5643 45.7441 52.4098ZM11.4909 12.1734C11.2988 12.122 11.0941 12.1489 10.9218 12.2484C10.7495 12.3478 10.6238 12.5116 10.5724 12.7038L3.58424 38.7838C3.53276 38.9759 3.55971 39.1806 3.65917 39.3529C3.75862 39.5251 3.92244 39.6508 4.11457 39.7023L46.1323 50.961C46.3245 51.0124 46.5292 50.9855 46.7015 50.886C46.8737 50.7866 46.9994 50.6228 47.0509 50.4306L54.039 24.3506C54.0905 24.1585 54.0635 23.9538 53.9641 23.7815C53.8646 23.6093 53.7008 23.4836 53.5087 23.4321L11.4909 12.1734Z"
                  fill="#A88646"
                />
                <path
                  d="M35.1355 55.779L11.2288 49.3732C11.0367 49.3217 10.8728 49.196 10.7734 49.0238C10.6739 48.8515 10.647 48.6468 10.6985 48.4547C10.7499 48.2625 10.8756 48.0987 11.0479 47.9993C11.2202 47.8998 11.4249 47.8729 11.617 47.9243L35.5237 54.3301C35.7158 54.3816 35.8796 54.5073 35.9791 54.6796C36.0785 54.8518 36.1055 55.0565 36.054 55.2487C36.0025 55.4408 35.8768 55.6046 35.7046 55.7041C35.5323 55.8035 35.3276 55.8305 35.1355 55.779Z"
                  fill="#A88646"
                />
                <path
                  d="M23.1822 52.5761C22.9901 52.5246 22.8263 52.3989 22.7268 52.2266C22.6274 52.0544 22.6004 51.8496 22.6519 51.6575L24.2048 45.862C24.2563 45.6698 24.382 45.506 24.5543 45.4066C24.7265 45.3071 24.9312 45.2801 25.1234 45.3316C25.3155 45.3831 25.4793 45.5088 25.5788 45.6811C25.6782 45.8533 25.7052 46.0581 25.6537 46.2502L24.1008 52.0457C24.0493 52.2379 23.9236 52.4017 23.7513 52.5011C23.5791 52.6006 23.3744 52.6276 23.1822 52.5761Z"
                  fill="#A88646"
                />
                <path
                  d="M36.1221 18.7734C35.9299 18.7219 35.7661 18.5962 35.6667 18.4239C35.5672 18.2517 35.5403 18.0469 35.5917 17.8548C35.913 16.6559 34.8737 15.333 33.2763 14.905C31.6789 14.477 30.1174 15.1029 29.7962 16.3019C29.7447 16.494 29.619 16.6578 29.4467 16.7573C29.2745 16.8568 29.0698 16.8837 28.8776 16.8322C28.6855 16.7807 28.5217 16.655 28.4222 16.4828C28.3228 16.3105 28.2958 16.1058 28.3473 15.9137C28.8821 13.9178 31.2666 12.8136 33.6645 13.4561C36.0624 14.0986 37.5754 16.2472 37.0406 18.243C36.9891 18.4352 36.8635 18.599 36.6912 18.6984C36.5189 18.7979 36.3142 18.8248 36.1221 18.7734Z"
                  fill="#A88646"
                />
                <path
                  d="M35.3525 15.8496C35.2254 15.8164 35.1092 15.7505 35.0155 15.6583C34.9452 15.5888 34.8893 15.506 34.8511 15.4147C34.8129 15.3235 34.7932 15.2255 34.793 15.1266C34.7928 15.0277 34.8122 14.9297 34.85 14.8383C34.8878 14.7469 34.9434 14.6639 35.0134 14.594L41.3983 8.15205C41.468 8.08203 41.5509 8.02643 41.6421 7.98843C41.7334 7.95042 41.8312 7.93076 41.93 7.93057C42.0288 7.93037 42.1267 7.94965 42.2181 7.98729C42.3095 8.02493 42.3926 8.0802 42.4626 8.14994C42.5326 8.21969 42.5882 8.30254 42.6262 8.39377C42.6642 8.48501 42.6839 8.58283 42.6841 8.68166C42.6843 8.78049 42.665 8.87839 42.6274 8.96977C42.5897 9.06116 42.5345 9.14423 42.4647 9.21425L36.0798 15.6562C35.9864 15.7497 35.8699 15.8168 35.7422 15.8507C35.6145 15.8847 35.48 15.8843 35.3525 15.8496Z"
                  fill="#A88646"
                />
                <path
                  d="M31.0059 14.6849C30.8781 14.6512 30.7615 14.5843 30.6678 14.491C30.5742 14.3978 30.5069 14.2814 30.4727 14.1538L28.1642 5.3824C28.1129 5.1895 28.1404 4.98414 28.2405 4.81148C28.3407 4.63882 28.5053 4.51301 28.6982 4.46173C28.8911 4.41046 29.0965 4.43791 29.2691 4.53805C29.4418 4.63819 29.5676 4.80282 29.6189 4.99572L31.9273 13.7671C31.9531 13.8626 31.9597 13.9623 31.9467 14.0603C31.9338 14.1584 31.9016 14.253 31.8519 14.3385C31.8023 14.4241 31.7362 14.499 31.6575 14.5589C31.5788 14.6189 31.489 14.6626 31.3933 14.6877C31.2662 14.7207 31.1326 14.7197 31.0059 14.6849Z"
                  fill="#A88646"
                />
              </g>
              <defs>
                <clipPath id="clip0_491_3874">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(12.4233) rotate(15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className="card-hero flex p-4 gap-2 flex-col items-start bg-background absolute mx-auto left-0 right-0 xs:hidden"
            onClick={onCardHeroClick}
          >
            <p className="text-base font-semibold text-primary">
              Expertise Pengajar <br /> International
            </p>
            <div className="teacher-avatar flex items-start">
              <img src={Teacher1} className="size-10" alt="teach-pic" />
              <img src={Teacher2} className="size-10 -ml-2" alt="teach-pic" />
              <img src={Teacher3} className="size-10 -ml-2" alt="teach-pic" />
              <img src={Teacher4} className="size-10 -ml-2" alt="teach-pic" />
              <img src={Plus} className="size-10 -ml-2" alt="teach-pic" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-containersm pt-6 px-3 w-full bg-background">
        <div
          className="card-hero flex p-4 gap-2 flex-col items-start bg-white mx-auto left-0 right-0 lg:hidden"
          onClick={onCardHeroClick}
        >
          <p className="text-base font-semibold text-primary">
            Expertise Pengajar <br /> International
          </p>
          <div className="teacher-avatar flex items-start">
            <img src={Teacher1} className="size-10" alt="teach-pic" />
            <img src={Teacher2} className="size-10 -ml-2" alt="teach-pic" />
            <img src={Teacher3} className="size-10 -ml-2" alt="teach-pic" />
            <img src={Teacher4} className="size-10 -ml-2" alt="teach-pic" />
            <img src={Plus} className="size-10 -ml-2" alt="teach-pic" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
