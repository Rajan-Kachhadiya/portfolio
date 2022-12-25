import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Profile() {

    return (
        <div className="mt-50 grid md:grid-cols-2 gap-30">
            <div>
                <div className="md:text-[36px] md:leading-[40px] text-[24px] leading-[30px] font-bold text-light-black">
                    Objective
                </div>
                <div className="md:mt-30 mt-10">
                    I Have Experience In Designing And Creativity And I Am Looking For A Career Filled With Challenges, Responsibility And Constant Growth.
                </div>
            </div>
            <div>
                <div className="md:text-[36px] md:leading-[40px] text-[24px] leading-[30px] font-bold text-light-black">
                    Languages
                </div>
                <ul className="md:mt-30 mt-10 flex items-center md:gap-50 sm:gap-30 gap-20 list-disc list-inside">
                    <li className="mr-10">English</li>
                    <li>Hindi</li>
                    <li>Gujarati</li>
                </ul>
            </div>
        </div>
    )
}