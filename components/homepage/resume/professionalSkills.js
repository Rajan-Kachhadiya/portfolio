import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function ProfessionalSkills() {

    const professionalSkillsItem = [
        {
            title: "HTML5",
            percent: "100",
        },
        {
            title: "CSS3",
            percent: "100",
        },
        {
            title: "SASS",
            percent: "70",
        },
        {
            title: "Tailwind CSS",
            percent: "100",
        },
        {
            title: "Bootstrap",
            percent: "70",
        },
        {
            title: "Git",
            percent: "90",
        },
        {
            title: "JavaScript",
            percent: "60",
        },
        {
            title: "Figma",
            percent: "90",
        },
        {
            title: "Adobe Photoshop",
            percent: "80",
        },
        {
            title: "Corel Draw",
            percent: "90",
        },
    ]

    return (
        <div className="mt-50">
            <div className="text-secondary text-[14px] tracking-[2px] font-medium md:mb-10">
                Features
            </div>
            <div className="md:text-[36px] md:leading-[40px] text-[24px] leading-[30px] font-bold text-light-black">
                Professional Skills
            </div>
            <div className="md:mt-50 mt-30 grid md:grid-cols-2 md:gap-30 gap-20">
                {professionalSkillsItem.map((item, key) => (
                    <div key={key} className="">
                        <div className="text-[14px] mb-[5px]">
                            {item.title}
                        </div>
                        <ProgressBar
                            completed={item.percent}
                            maxCompleted={100}
                            animateOnRender={true}
                            labelClassName="text-[10px] leading-[14px] px-[6px] text-white tracking-[1px] font-medium"
                            bgColor="#ff014f"
                            height="18px"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}