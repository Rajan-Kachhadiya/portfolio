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
                <Link href="#" className="relative z-[2] text-secondary p-20 rounded-md bg-gradient-box shadow-shadow-white transition duration-300 before:transition before:duration-300 before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:bg-none hover:text-white">
                    Contact
                </Link>
            </div>
        </div>
    )
}