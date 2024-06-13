import React, { useState } from 'react';

const ButtonWithDropdown = () => {
    const [isDropDown, setIsDropDown] = useState({
        // 0: false,
        1: false,
        2: false,
    });
    const [clickedButton, setClickedButton] = useState(null);

    const toggleDropdown = (index) => {
        setIsDropDown(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
        setClickedButton(index);
    

    };

    return (
        <div className='list-of-question flex items-start gap-6'>
            <div className='all-questions flex flex-col items-start gap-4'>
                {Object.keys(isDropDown).map((index) => (
                    <button key={index} onClick={() => toggleDropdown(parseInt(index))}>
                        <div className={`bantuan-dropdown flex w-width-8.1 p-4 flex-col items-start gap-6 rounded-xl bg-secondary transition-all duration-500 ${isDropDown[index] 
                            ? "max-h-56 min-h-20"
                            : "max-h-14 min-h-14"
                            }`}>
                            <div className='1 flex w-width-8.2 items-center justify-between'>
                                <p className="text-white font-semibold text-base">
                                    {/* {index === '0' && "Apa itu Edu Tera Insani?"} */}
                                    {index === '1' && "Kurikulum apa yang digunakan di Edu Tera Insani?"}
                                    {index === '2' && "Bagaimana Cara Belajarnya?"}
                                </p>
                                <svg className={`w-6 h-6 flex-shrink-0 duration-300 ${isDropDown[index] ? "rotate-180" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 13.786L17.9531 7.82815C18.3938 7.38752 19.1062 7.38752 19.5422 7.82815C19.9781 8.26877 19.9781 8.98127 19.5422 9.4219L12.7969 16.1719C12.3703 16.5985 11.6859 16.6078 11.2453 16.2047L4.45312 9.42659C4.23281 9.20627 4.125 8.91565 4.125 8.62971C4.125 8.34377 4.23281 8.05315 4.45312 7.83284C4.89375 7.39221 5.60625 7.39221 6.04219 7.83284L12 13.786Z" fill="white"/>
                                </svg>
                            </div>
                            {isDropDown[index] && (
                                <div className={`paragraph self-stretch text-white font-normal text-base text-left duration-1000 ${isDropDown[index] ? "flex" : "hidden"}`}>
                                    {/* {index === '0' && (
                                        <p>Edu Tera Insani adalah platform sekolah digital yang dirancang untuk siswa SMP dan SMA, menawarkan jalur pembelajaran yang dipersonalisasi dan akses ke guru-guru ahli dari seluruh dunia. Melalui kurikulum yang komprehensif dan terorganisir, termasuk program inovatif seperti Kurikulum Merdeka Plus, siswa dapat terlibat dalam pembelajaran jarak jauh yang fleksibel.</p>
                                    )} */}
                                    {index === '1' && (
                                        <p>Kurikulum Merdeka Plus adalah pendekatan pendidikan yang fleksibel dan berpusat pada siswa, dirancang untuk mendorong kemandirian belajar dan pemikiran kritis. Dengan fokus pada pengembangan keterampilan hidup dan pembelajaran praktis, kurikulum ini memungkinkan siswa untuk mengeksplorasi minat mereka, mengatasi tantangan dunia nyata, dan menjadi individu yang kreatif serta inovatif. Kurikulum ini juga mengintegrasikan nilai-nilai lokal dan global, mempersiapkan siswa untuk berkontribusi secara positif terhadap masyarakat dan bangsa.</p>
                                    )}
                                    {index === '2' && (
                                        <p>Lorem ipsum dolor sit amet consectetur. Integer semper nibh in massa nisl sit. Nisl sollicitudin dictum fringilla proin. Volutpat sit ornare non nisl aliquam commodo.Lorem ipsum dolor sit amet consectetur. Integer semper nibh in massa nisl sit.Lorem ipsum dolor sit amet consectetur. Integer semper nibh in massa nisl sit. Nisl sollicitudin dictum fringilla proin.</p>
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
