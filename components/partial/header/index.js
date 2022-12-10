import React from "react";
import Logo from "../logo";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";

export default function Header() {
    return (
        <div className="container py-20 flex items-center justify-between gap-30">
            <Logo />
            {/* RJ7878 */}
            <div className="lg:block hidden">
                <Navigation />
            </div>
            <div className="lg:hidden block">
                <MobileNavigation />
            </div>
        </div>
    )
}