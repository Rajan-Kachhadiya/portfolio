import Link from "next/link";
import React from "react";

export default function Navigation() {

    const navigationItem = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Features",
            url: "#",
        },
        {
            name: "Portfolio",
            url: "#",
        },
        {
            name: "Resume",
            url: "#",
        },
        {
            name: "Blog",
            url: "#",
        },
    ]

    return (
        <div className="flex items-center gap-30 uppercase font-medium text-[13px] leading-[20px]">
            {navigationItem.map((item, key) => (
                <div key={key}>
                    <Link href={item.url}>
                        {item.name}
                    </Link>
                </div>
            ))}
            <div>
                <Link href="#" className="relative inline-block z-[2] text-secondary px-20 py-15 rounded-md bg-gradient-box shadow-shadow-white transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white hover:translate-y-[-3px]">
                    Contact
                </Link>
            </div>
        </div>
    )
}