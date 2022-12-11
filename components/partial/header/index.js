import React from "react";
import Logo from "../logo";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";

export default function Header() {
    return (
        <div className="md:py-20 md:px-50 p-15 flex items-center justify-between gap-30 sticky top-0 bg-body-color z-50">
            <Logo />
            <div className="lg:block hidden">
                <Navigation />
            </div>
            <div className="lg:hidden block">
                <MobileNavigation />
            </div>
        </div>
    )
}