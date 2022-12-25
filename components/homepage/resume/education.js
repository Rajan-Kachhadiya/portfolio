import React from "react";

export default function Education() {

    const educationItem = [
        {
            title: "Personal Portfolio April Fools",
            subTitle: "University of DVI (1997 - 2001)",
            rating: "4.30 / 5",
            content: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        },
        {
            title: "Diploma in Web Development",
            subTitle: "University of DVI (1997 - 2001)",
            rating: "4.30 / 5",
            content: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        },
        {
            title: "Personal Portfolio April Fools",
            subTitle: "University of DVI (1997 - 2001)",
            rating: "4.30 / 5",
            content: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
        },
    ]

    return (
        <div className="mt-50">
            <div className="text-secondary text-[14px] tracking-[2px] font-medium md:mb-10">
                2007 - 2010
            </div>
            <div className="md:text-[36px] md:leading-[40px] text-[24px] leading-[30px] font-bold text-light-black">
                Education Quality
            </div>
            <div className="sm:pl-30 pl-20 border-l-[5px] border-gray">
                {educationItem.map((item, key) => (
                    <div key={key} className="mt-50 bg-gradient-box shadow-shadow-white sm:p-50 p-20 rounded-md group relative z-[2] transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white">
                        <div className="before:absolute before:content-[''] before:sm:w-[30px] before:w-[20px] before:h-[5px] before:bg-gray before:right-full before:top-[58px] after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:sm:right-[calc(100%+22px)] after:right-[calc(100%+12px)] after:top-50 after:rounded-full after:bg-body-color after:border-[5px] after:border-gray group-hover:after:bg-secondary after:transition-all after:duration-[0.4s]">
                            <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-15 border-b border-gray md:pb-30 pb-20 md:mb-30 mb-20">
                                <div>
                                    <div className="md:text-[24px] md:leading-[30px] text-[20px] leading-[26px] font-semibold text-light-black md:mb-10 transition-all duration-[0.4s] group-hover:text-white">
                                        {item.title}
                                    </div>
                                    <div className="text-[14px]">
                                        {item.subTitle}
                                    </div>
                                </div>
                                <div className="bg-white w-fit shadow-shadow-white inline-block text-[14px] text-secondary font-medium py-[5px] px-15 rounded-md transition-all duration-200 group-hover:text-white group-hover:bg-red group-hover:shadow-none">
                                    {item.rating}
                                </div>
                            </div>
                            <div className="md:text-[18px] md:leading-[30px] font-medium">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}