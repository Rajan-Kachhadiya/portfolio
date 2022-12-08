import React from "react";
import Logo from "../logo";
import Navigation from "./navigation";

export default function Header() {
    return (
        <div className="container py-[24px] flex items-center justify-between gap-30">
            <Logo />
            <Navigation />
        </div>
    )
}