import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpIcon } from "../../icons";

export default function ScrollTop() {

    return (
        <div className="scroll-top-box">
            <ScrollToTop smooth component={<ArrowUpIcon />} className="!rounded-full !right-30 !bottom-30 inline-flex items-center justify-center !bg-white/70 !w-[50px] !h-[50px] transition-all duration-[0.4s] relative before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-full before:opacity-0 hover:before:opacity-100"/>
            <style>{`
                .scroll-top-box button svg path{
                    transition: 0.2s all ease-in-out;
                }
                .scroll-top-box button:hover svg path{
                    fill: white;
                }
            `}</style>
        </div>
    )
}