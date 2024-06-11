import React, { useState } from 'react';
import ButtonLink from "./Buttons/Buttonlink";
import faq from "../databases/faq.json"

const ButtonWithDropdown = () => {
    const [isDropDown, setIsDropDown] = useState({
        0: false,
        1: false,
        2: false
    });

    const toggleDropdown = (index) => {
        setIsDropDown(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="bantuan-section flex flex-col pb-24 items-center gap-gap10 bg-background">
            <div className='bantuan-container flex flex-col items-center gap-12'>
                <h2 className=' text-4xl text-primary font-semibold w-width-2'>Bantuan</h2>
                <div className='categories flex flex-col items-start gap-4'>
                    <div className='categories-and-question flex flex-col items-start gap-4'>
                        <h4 className=' text-2xl text-primary font-semibold'>Kategori Bantuan:</h4>
                    </div>
                    <div className='list-of-question flex items-start gap-6'>
                        <div className='frame-112 flex flex-col items-start gap-4'>
                            <div className='menu-item flex w-width-3 py-3 px-4 content-center items-center gap-2 rounded-rounded32 border-secondary'>
                                <ButtonLink border={true} caption="Umum" to="/help">
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
                        </div>
                        <div className='all-questions flex flex-col items-start gap-4'>
                            {faq.map((q, index) => (
                                <button key={index} onClick={() => toggleDropdown(index)}>
                                    <div className={`bantuan-dropdown flex w-width-8.1 p-4 flex-col items-start gap-6 rounded-xl bg-secondary transition-all duration-500 ${isDropDown[index] ? "h-height-2" : "h-14"}`}>
                                        <div className='1 flex w-width-8.2 items-center justify-between'>
                                            <p className=' text-white font-semibold text-base'>{q.question}</p>
                                            <svg className={`w-6 h-6 flex-shrink-0  duration-300 ${!isDropDown[index] ? "rotate-180" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 13.786L17.9531 7.82815C18.3938 7.38752 19.1062 7.38752 19.5422 7.82815C19.9781 8.26877 19.9781 8.98127 19.5422 9.4219L12.7969 16.1719C12.3703 16.5985 11.6859 16.6078 11.2453 16.2047L4.45312 9.42659C4.23281 9.20627 4.125 8.91565 4.125 8.62971C4.125 8.34377 4.23281 8.05315 4.45312 7.83284C4.89375 7.39221 5.60625 7.39221 6.04219 7.83284L12 13.786Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <div className={`paragraph self-stretch text-white font-normal text-base text-left duration-1000 ${!isDropDown[index] ? "hidden" : "flex"}`}>
                                            <p>{q.answer}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonWithDropdown;
