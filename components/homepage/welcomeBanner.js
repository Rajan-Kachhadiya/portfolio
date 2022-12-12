import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'
import React from "react";
import { BannerImage } from "../../public/images";
import FindMe from "../partial/findme";

export default function WelcomeBanner() {
  return (
    <div className="container md:mt-50 md:pb-80 pb-50 border-b border-gray">
      <div className="grid lg:grid-cols-2 justify-items-center items-center lg:gap-30 gap-50">
        <div className="flex flex-col gap-15 lg:order-1 order-2">
          <div className="tracking-[3px] uppercase font-medium text-[14px]">
            welcome to my world
          </div>
          <div className="section-title text-light-black flex flex-col md:gap-15">
            <div>
              Hi, I’m <span className="text-secondary">Rajan Patel</span>
            </div>
            <div className="xl:text-[48px]">
              <span className="text-secondary">a </span>
              <Typewriter
                words={['Web Designer', 'Web Developer', 'UI/UX Designer']}
                cursor
                loop
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
          <div className="leading-[30px]">
            I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
          </div>
          <div className="lg:mt-80 md:mt-50 mt-15">
            <FindMe />
          </div>
        </div>
        <div className=" lg:order-2 order-1 relative w-[70%] z-[2] after:absolute after:content-[''] after:w-full after:h-[calc(100%-20%)] after:z-[-1] after:bottom-0 after:rounded-md after:bg-gradient-box after:shadow-shadow-white">
          <Image className="mx-auto" src={BannerImage} width="400" height="564" alt="Banner Image" priority />
        </div>
      </div>
    </div>
  )
}