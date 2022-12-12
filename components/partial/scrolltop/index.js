import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpIcon } from "../../icons";

export default function ScrollTop() {

    return (
        <div className="scroll-top-box">
            <ScrollToTop smooth component={<ArrowUpIcon />} />
            <style>{`
                .scroll-top-box button{
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                }
            `}</style>
        </div>
    )
}