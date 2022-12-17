import Image from "next/image";
import React from "react";
import { PortfolioImage1 } from "/public/images";

export default function Portfolio() {

    const portfolioItem = [
        {
            image: PortfolioImage1,
            title: "The services provide for design",
            content: "DEVELOPMENT",
        },
        {
            image: PortfolioImage1,
            title: "Mobile app landing design & app maintain",
            content: "APPLICATION",
        },
        {
            image: PortfolioImage1,
            title: "Logo design creativity & Application",
            content: "PHOTOSHOP",
        },
        {
            image: PortfolioImage1,
            title: "Business Stratagy",
            content: "DEVELOPMENT",
        },
        {
            image: PortfolioImage1,
            title: "APPLICATION",
            content: "APPLICATION",
        },
        {
            image: PortfolioImage1,
            title: "Business Stratagy",
            content: "PHOTOSHOP",
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-30 gap-y-50">
                {portfolioItem.map((item, key) => (
                    <div key={key} className="portfolio-item-box group sm:p-30 p-20 cursor-pointer bg-gradient-box shadow-shadow-white rounded-[20px]">
                        <div className="mb-20 rounded-[10px] overflow-hidden">
                            <Image className="group-hover:scale-110 transition duration-[0.4s] w-full" src={item.image} width="355" height="266" alt="Portfolio Image" priority />
                        </div>
                        <div className="mb-10 text-[12px] tracking-[1px] font-medium text-secondary">
                            {item.content}
                        </div>
                        <div className="sm:text-[24px] sm:leading-[32px] text-[20px] font-semibold transition duration-[0.4s] hover:text-secondary">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}