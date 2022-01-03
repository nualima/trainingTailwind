import react from "react";
import React, { useState } from 'react';



export default function Header(props) {

    const [actualSelectedLink, setActualSelectedLink] = useState('/home')

    return (
        <div id='header'>
            <div id="header" className="flex justify-between h-28  ">
                <div id="left-header" className=" flex  mx-auto">

                    <img src={`${process.env.PUBLIC_URL}/test.png`} alt="" className="" width="60px" />
                    <div id="logoText" className="">



                        <p>

                            IT Support Today

                        </p>
                        <p className="text-sky-500	">24/7 IT Support ALl day Everyday</p>
                    </div>



                </div>
                <div id="right-header" className="flex flex-col mx-auto		">
                    <p className="flex flex-row-reverse h-4">08 200 4000</p>


                    <nav className="flex sm:justify-center space-x-4 ">
                        {[
                            ['Home', '/home'],
                            ['Services', '/team'],
                            ['About Us', '/aboutUs'],
                            ['Contact', '/contact'],
                        ].map(([title, url]) => (
                            <button onClick={() => setActualSelectedLink(url)} className={`rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 ${(actualSelectedLink === url) ? 'text-sky-500' : ''}`}>{title}</button>
                        ))}
                    </nav>




                </div>

            </div>

        </div>
    );
}