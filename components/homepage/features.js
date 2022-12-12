import React from "react";
import { CloseIcon, MenuIcon } from "../icons";

export default function Features() {

    const featuresItem = [
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
        <div id="features" className="container md:py-80 py-50 border-b border-gray">
            <div className="section-subtitle mb-15">
                Features
            </div>
            <div className="section-title mb-50">
                What I Do
            </div>
            <div className="grid lg:grid-cols-3 gap-30">
                {featuresItem.map((item, key) => (
                    <div key={key} className="features-item-box max-w-[400px] mx-auto sm:p-50 p-30 cursor-pointer bg-gradient-box shadow-shadow-white rounded-[10px] relative inline-block w-full z-[2] transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white hover:translate-y-[-3px]">
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
                ))}
            </div>
            <style>{`
                .features-item-box svg path{
                    transition: 0.4s all ease-in-out;
                }
                .features-item-box:hover svg path{
                    fill: white;
                }
            `}</style>
        </div>
    )
}