import React from "react";
import Image from "next/image";
import { ContactImage } from "/public/images";
import Link from "next/link";
import Findme from "../partial/findme"

export default function Contact() {

    return (
        <div id="contact" className="container md:py-80 py-50 border-b border-gray">
            <div className="section-subtitle mb-15 text-center">
                CONTACT
            </div>
            <div className="section-title mb-50 text-center">
                Contact With Me
            </div>
            <div className="grid lg:grid-cols-2 gap-50">
                <div className="group flex flex-col sm:p-30 p-20 bg-gradient-box shadow-shadow-white rounded-[20px]">
                    <div className="mb-30 rounded-[10px] overflow-hidden md:max-w-auto max-w-max mx-auto">
                        <Image className="group-hover:scale-110 transition duration-[0.4s] w-full" src={ContactImage} width="640" height="256" alt="Contact Image" priority />
                    </div>
                    <div className="md:text-[18px] font-medium text-primary/80 mb-50">
                        <div className="md:mb-20 mb-15 sm:text-[30px] sm:leading-[37px] text-[24px] leading-[32px] font-bold text-light-black">
                            Rajan Kachhadiya
                        </div>
                        <div className="md:mb-20 mb-15">
                            Web Designer
                        </div>
                        <div className="md:mb-20 mb-15">
                            Incase Of Any Query, Connect with Me Via Mail And Call.
                        </div>
                        <div className="flex gap-[5px] md:mb-[2px]">
                            <span className="min-w-max">
                                Phone :
                            </span>
                            <Link href="tel:+918200402101">
                                +91 8200 402 101
                            </Link>
                        </div>
                        <div className="flex gap-[5px]">
                            <span className="min-w-max">
                                Email :
                            </span>
                            <Link href="mailto:rajan.kachhadia@gmail.com" className="break-all">
                                rajan.kachhadia@gmail.com
                            </Link>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <Findme />
                    </div>
                </div>
                <form className="sm:p-30 p-20 flex flex-col gap-20 bg-gradient-box shadow-shadow-white rounded-[20px]">
                    <div className="flex items-center gap-30 lg:flex-row flex-col">
                        <div className="w-full">
                            <label htmlFor="name" className="block uppercase mb-10 text-[12px] leading-[22px] font-medium tracking-[1px]">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" className="block w-full border-2 border-gray-100 rounded-md px-15 py-10 focus-visible:outline-secondary" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="phone" className="block uppercase mb-10 text-[12px] leading-[22px] font-medium tracking-[1px]">Phone Number</label>
                            <input type="number" id="phone" name="phone" placeholder="Phone Number" className="block w-full border-2 border-gray-100 rounded-md px-15 py-10 focus-visible:outline-secondary" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block uppercase mb-10 text-[12px] leading-[22px] font-medium tracking-[1px]">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="block w-full border-2 border-gray-100 rounded-md px-15 py-10 focus-visible:outline-secondary" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="subject" className="block uppercase mb-10 text-[12px] leading-[22px] font-medium tracking-[1px]">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" className="block w-full border-2 border-gray-100 rounded-md px-15 py-10 focus-visible:outline-secondary" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="message" className="block uppercase mb-10 text-[12px] leading-[22px] font-medium tracking-[1px]">Your Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="7" cols="50" className="block w-full border-2 border-gray-100 rounded-md px-15 py-10 focus-visible:outline-secondary" />
                    </div>
                    <div className="w-full">
                        <Link href="#" className="relative inline-block w-full text-center uppercase font-semibold text-[13px] leading-[20px] z-[2] text-secondary px-20 py-15 rounded-md bg-gradient-box shadow-shadow-white transition-all duration-[0.4s] before:transition-all before:duration-[0.4s] before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-box-hover before:z-[-1] before:rounded-md before:opacity-0 hover:before:opacity-100 hover:text-white hover:translate-y-[-3px]">
                            Send Message
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}