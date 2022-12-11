import React from "react";
import { CloseIcon, MenuIcon } from "../icons";

export default function Portfolio() {

    const portfolioItem = [
        {
            icon: MenuIcon,
            title: "Business Stratagy",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
            icon: CloseIcon,
            title: "App Development",
            content: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
        },
        {
            icon: MenuIcon,
            title: "Business Stratagy",
            content: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
    ]

    return (
        <div id="portfolio" className="container md:py-80 py-50 border-b border-gray">
            <div className="section-subtitle mb-15 text-center">
                VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </div>
            <div className="section-title mb-50 text-center">
                My Portfolio
            </div>
            <div className="grid grid-cols-3 gap-30">
                {/* {portfolioItem.map((item, key) => (
                    <div key={key} className="features-item-box p-50 cursor-pointer bg-gradient-box shadow-shadow-white rounded-[10px] relative inline-block w-full z-[2] text-secondary transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white hover:translate-y-[-3px]">
                        <div className="mb-30">
                            <item.icon />
                        </div>
                        <div className="mb-20 text-[24px] leading-[32px] font-semibold">
                            {item.title}
                        </div>
                        <div>
                            {item.content}
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    )
}