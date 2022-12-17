import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogoImage } from "/public/images"

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-10 logo-box">
            <Image className="rounded-full border-2 border-gray" src={LogoImage} width="60" height="60" alt="Logo Image" priority/>
            <span className="font-bold">RK</span>
        </Link>
    )
}