import react from "react";
import React, { useState } from 'react';



export default function Header(props) {

    const [actualSelectedLink, setActualSelectedLink] = useState('/home')

    return (
        <div id="header" className="flex flex-col md:flex-row h-auto mr-24 font-semibold mt-12 flex-nowrap">
            <div id="left-header" className="w-2/6	">
                

                <img src={`${process.env.PUBLIC_URL}/test.png`} alt="" className="mr-2" width="60px" />
                <div id="logoText" className="">



                    <p className="text-4xl  "> 

                        IT Support Today

                    </p>
                    <p className="text-sky-500	text-xl">24/7 IT Support All day Everyday</p>
                </div>



            </div>
            <div id="right-header" className="flex-col text-5xl w-2/6	ml-auto mr-0">
                <p className="flex flex-row-reverse h-4 mr-12">08 200 4000</p>


                <nav className="flex sm:justify-center text-xl mt-7 ">
                    {[
                        ['Home', '/home'],
                        ['Services', '/team'],
                        ['About Us', '/aboutUs'],
                        ['Contact', '/contact'],
                    ].map(([title, url]) => (
                        <button onClick={() => setActualSelectedLink(url)} className={`rounded-lg px-3 py-2 font-medium hover:bg-gray-100 hover:text-gray-900 ${(actualSelectedLink === url) ? 'text-sky-500' : 'text-black'}`}>{title}</button>
                    ))}
                </nav>




            </div>

        </div>

    );
}