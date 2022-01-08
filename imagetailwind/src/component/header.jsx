import react from "react";
import React, { useState } from 'react';
import Accordion from "./accordion";



export default function Header(props) {

    const [actualSelectedLink, setActualSelectedLink] = useState('/home')

    return (
        <div id="header" className="flex flex-col md:flex-row h-auto px-5 lg:pr-24 font-semibold mt-12 flex-nowrap lg:pl-48">
            <div id="left-header" className="flex w-2/6 flex-col xl:flex-row basis-1/2">


                <img src={`${process.env.PUBLIC_URL}/test.png`} alt="" className="mr-2 h-24" width="60px" />
                <div id="logoText" className="">



                    <p className="text-xl xl:text-6xl  ">

                        IT Support Today

                    </p>
                    <span className="text-sky-500 text-3xl nowrap">24/7 IT Support All day Everyday</span>
                </div>



            </div>
            <div id="right-header" className="flex-col  mr-0">
                <span className="flex xl:text-5xl lg:text-xl flex-row-reverse h-4 basis-1/2">08 200 4000</span>


                <nav className="flex justify-center text-3xl mt-7 lg:justify-between overflow-auto flex-col xl:flex-row">
                    {[
                        ['Home', '/home'],
                        ['Services', '/team'],
                        ['About Us', '/aboutUs'],
                        ['Contact', '/contact'],
                    ].map(([title, url]) => (
                        <button onClick={() => setActualSelectedLink(url)} className={` rounded-lg px-3 py-2 font-medium hover:bg-gray-100 hover:text-gray-900 ${(actualSelectedLink === url) ? 'text-sky-500' : 'text-black'}`}>{title}</button>
                    ))}
                </nav>
                <Accordion />

                



            </div>

        </div>

    );
}