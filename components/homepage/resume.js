import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Resume() {

    return (
        <div id="resume" className="container md:py-80 py-50 border-b border-gray">
            <div className="section-subtitle mb-15 text-center">
                1+ YEARS OF EXPERIENCE
            </div>
            <div className="section-title mb-50 text-center">
                My Resume
            </div>
            <Tabs>
                <TabList className="border-0 bg-gradient-box shadow-shadow-white rounded-[10px] flex md:flex-row flex-col justify-between items-center">
                    <Tab className="lg:py-30 py-20 px-10 w-full text-center font-medium text-light-black lg:text-[18px] cursor-pointer rounded-[10px] transition-all duration-[0.4s] focus-visible:outline-0 hover:text-secondary hover:bg-gradient-box hover:shadow-shadow-white hover:rounded-[10px]">Education</Tab>
                    <Tab className="lg:py-30 py-20 px-10 w-full text-center font-medium text-light-black lg:text-[18px] cursor-pointer rounded-[10px] transition-all duration-[0.4s] focus-visible:outline-0 hover:text-secondary hover:bg-gradient-box hover:shadow-shadow-white hover:rounded-[10px]">Professional Skills</Tab>
                    <Tab className="lg:py-30 py-20 px-10 w-full text-center font-medium text-light-black lg:text-[18px] cursor-pointer rounded-[10px] transition-all duration-[0.4s] focus-visible:outline-0 hover:text-secondary hover:bg-gradient-box hover:shadow-shadow-white hover:rounded-[10px]">Experience</Tab>
                    <Tab className="lg:py-30 py-20 px-10 w-full text-center font-medium text-light-black lg:text-[18px] cursor-pointer rounded-[10px] transition-all duration-[0.4s] focus-visible:outline-0 hover:text-secondary hover:bg-gradient-box hover:shadow-shadow-white hover:rounded-[10px]">Interview</Tab>
                </TabList>
                <TabPanel>
                    <h2>Education</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Professional</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Experience</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Interview</h2>
                </TabPanel>
            </Tabs>
            <style>{`
                .react-tabs__tab--selected{
                    background: linear-gradient(145deg, #e2e8ec, #ffffff);
                    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
                    border-radius: 10px;
                    color: #ff014f;
                }
            `}</style>
        </div>
    )
}