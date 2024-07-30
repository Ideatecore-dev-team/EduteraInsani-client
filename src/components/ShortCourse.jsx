import React, { useState, useEffect } from "react";
import ButtonDetailClass from "./Buttons/ButtonDetailClass";
import AllClassComponent from "./AllCourseComponent";

const DigitalSchooling = function () {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
        const isCurrentlyMobile = window.innerWidth <= 768;
        setIsMobile(isCurrentlyMobile);

        // Jika berpindah ke mobile, ubah selectedCategory ke 1 jika saat ini adalah 0
        if (isCurrentlyMobile && selectedCategory === 0) {
            setSelectedCategory(1);
        }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Memastikan status awal yang benar saat komponen dimuat

        return () => window.removeEventListener("resize", handleResize);
    }, [selectedCategory]);

    const handleButtonClick = (index) => {
        setSelectedCategory(index);
    };

    return (
        <div className="digital-schooling-section flex py-12 lg:py-24 xs:px-4 flex-col items-center justify-center bg-background">
        <div className="digital-schooling-container flex w-full lg:w-base-content justify-center flex-col items-center gap-[44px] lg:gap-12">
            <div className="title-filter flex w-full flex-col items-center gap-4 lg:gap-6">
            <h2 className="lg:text-4xl text-2xl text-primary font-semibold text-center">
                Short Course
            </h2>
            <div className="button flex gap-4 mb-6 justify-center lg:w-[600px]">
                {!isMobile && (
                <ButtonDetailClass
                    caption="Semua Kelas"
                    buttonFn={() => handleButtonClick(0)}
                    isActive={selectedCategory === 0}
                    border={false}
                    width={true}
                />
                )}
                <ButtonDetailClass
                caption="Bahasa Asing"
                buttonFn={() => handleButtonClick(1)}
                isActive={selectedCategory === 1}
                border={false}
                width={true}
                />
                <ButtonDetailClass
                border={true}
                caption="Skill Baru"
                buttonFn={() => handleButtonClick(2)}
                isActive={selectedCategory === 2}
                width={true}
                />
            </div>
            </div>
            <div className="lg:w-auto flex justify-center w-[24.5rem] overflow-hidden">
            {selectedCategory === 0 && <AllClassComponent category={0} />}
            {selectedCategory === 1 && <AllClassComponent category={1} />}
            {selectedCategory === 2 && <AllClassComponent category={2} />}
            </div>
        </div>
        </div>
    );
};

export default DigitalSchooling;
