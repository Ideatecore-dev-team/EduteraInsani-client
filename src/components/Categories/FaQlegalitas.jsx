import React, { useState } from "react";

const ButtonWithDropdown = () => {
  const [isDropDown, setIsDropDown] = useState({
    0: false,
    1: false,
    2: false,
  });
  const [clickedButton, setClickedButton] = useState(null);

  const toggleDropdown = (index) => {
    setIsDropDown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setClickedButton(index);
  };

  return (
    <div className="list-of-question lg:w-width-8.1 flex items-start gap-6">
      <div className="all-questions w-mobile-6 lg:w-base-content  flex flex-col items-start gap-4">
        {Object.keys(isDropDown).map((index) => (
          <button key={index} onClick={() => toggleDropdown(parseInt(index))}>
            <div
              className={`bantuan-dropdown w-mobile-6 flex lg:w-width-8.1 p-4 flex-col items-start gap-6 rounded-xl bg-secondary transition-all duration-500 ${
                isDropDown[index]
                  ? "lg:max-h-56 lg:min-h-56 max-h-[30rem] min-h-[30rem]"
                  : "lg:max-h-14 lg:min-h-14 max-h-20 min-h-0"
              }`}
            >
              <div className="1 flex lg:w-width-8.2  items-center justify-between">
                <p className="text-white w-80 lg:w-full text-left font-semibold text-base">
                  {index === "0" &&
                    `alias id est at! Id, recusandaeesse. Vero placeat amet`}
                  {index === "1" && "Lorem ipsum, dolor sit amet?"}
                  {index === "2" &&
                    "consectetur necessitatibus. Quidem, libero?"}
                </p>
                <svg
                  className={`w-6 h-6 flex-shrink-0 duration-300 ${
                    !isDropDown[index] ? "rotate-0" : "rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 13.786L17.9531 7.82815C18.3938 7.38752 19.1062 7.38752 19.5422 7.82815C19.9781 8.26877 19.9781 8.98127 19.5422 9.4219L12.7969 16.1719C12.3703 16.5985 11.6859 16.6078 11.2453 16.2047L4.45312 9.42659C4.23281 9.20627 4.125 8.91565 4.125 8.62971C4.125 8.34377 4.23281 8.05315 4.45312 7.83284C4.89375 7.39221 5.60625 7.39221 6.04219 7.83284L12 13.786Z"
                    fill="white"
                  />
                </svg>
              </div>
              {isDropDown[index] && (
                <div
                  className={`paragraph self-stretch text-white font-normal text-base text-left duration-1000 ${
                    isDropDown[index] ? "flex" : "hidden"
                  }`}
                >
                  {index === "0" && (
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laboriosam nisi eligendi, alias id est at! Id, recusandae
                      esse. Vero placeat amet nostrum minus aliquam quisquam
                      tenetur, consectetur necessitatibus. Quidem, libero.
                    </p>
                  )}
                  {index === "1" && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum aliquam ab iusto consequuntur est harum alias porro
                      repellat exercitationem! Cumque qui maxime natus impedit.
                      Eaque maiores id nisi similique voluptatum, excepturi
                      recusandae impedit nulla et minus quam, eius officia
                      aliquam? Sint similique ratione esse recusandae vel harum
                      beatae maxime officiis voluptatum. Quisquam placeat
                      repudiandae soluta praesentium, optio distinctio. Rem
                      omnis necessitati
                    </p>
                  )}
                  {index === "2" && (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Autem voluptatem in ipsum suscipit soluta est molestiae,
                      vitae necessitatibus odit enim qui eligendi aliquid
                      doloribus dicta accusantium culpa, ab totam possimus?
                    </p>
                  )}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonWithDropdown;
