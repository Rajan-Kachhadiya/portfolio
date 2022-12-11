import React, { useState } from 'react'
import Link from "next/link";
import { CloseIcon, MenuIcon } from "../../icons";

export default function MobileNavigation() {

    const [toggle, setToggle] = useState();

    const handleClick = () => {
        setToggle(!toggle);
    };

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
        <div>
            <div onClick={handleClick} className={toggle && "after:fixed after:z-40 after:w-full after:h-full after:top-0 after:left-0 after:bg-primary/20"}>
                <MenuIcon />
            </div>
            <div className={toggle ? "fixed overflow-auto right-0 top-0 z-50 bg-body-color h-full w-full sm:max-w-[300px] max-w-[250px] p-20 transition-all duration-500" : "fixed overflow-hidden right-[-100%] top-0 z-50 bg-body-color h-full w-full sm:max-w-[300px] max-w-[250px] p-20 transition-all duration-500"}>
                <div className='flex justify-between items-center'>
                    <div className='font-bold'>
                        Menus
                    </div>
                    <div onClick={handleClick}>
                        <CloseIcon />
                    </div>
                </div>
                <div className='flex flex-col items-center gap-30'>
                    {navigationItem.map((item, key) => (
                        <div key={key}>
                            <Link href={item.url} className="uppercase font-medium text-[13px] leading-[20px] pt-50 pb-30">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                    <div>
                        <Link href="#" className="relative inline-block w-full z-[2] text-secondary px-20 py-15 rounded-md bg-gradient-box shadow-shadow-white transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white hover:translate-y-[-3px]">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}