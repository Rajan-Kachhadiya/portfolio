import Image from "next/image";
import React from "react";
import { LogoImage } from "/public/images"

export default function Logo() {
    return (
        <div className="flex items-center gap-10">
            <Image className="rounded-full border-2 border-gray" src={LogoImage} width="60" height="60" alt="Logo Image" />
            <span className="font-bold">RK</span>
        </div>
    )
}