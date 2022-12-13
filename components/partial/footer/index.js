import React from "react";
import Logo from "../logo";

export default function Footer() {

    let currentYear = new Date().getFullYear();

    return (
        <div className="container md:py-80 py-50 footer">
            <div className="flex flex-col items-center gap-15">
                <Logo />
                <div className="font-medium text-center">
                    © {currentYear}. All rights reserved by Rajan Kachhadiya.
                </div>
            </div>
            <style>{`
                .footer .logo-box{
                    flex-direction: column;
                }
            `}</style>
        </div>
    )
}