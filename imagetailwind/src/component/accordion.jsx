import react from "react";

export default function Accordion(porps) {
   
    let [display, setDisplay] = react.useState(false);

    let handleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div id="accordion" className="flex w-44 flex-row-reverse flex-col visible relative md:invisible md:absolute">
            <div>
                <input className="absolute opacity-0  " id="tab-multi-one" type="checkbox" name="tabs" onClick={() => handleDisplay()}/>
               <label className="block p-5 leading-normal cursor-pointer wekbit-right" htmlFor="tab-multi-one">
               <img src={`${process.env.PUBLIC_URL}/list.png`} alt="" className="ml-0 w-1/3 max-h-28 max-w- mt-5 " width="" />

               </label>
            </div>
            <div className={`transition-[max-height] ease-in-out duration-100  ${display ? " max-h-96 ": "max-h-0 overflow-hidden"}`}>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">Home</button>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">Services</button>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">About Us</button>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">Contact</button>
            </div>
            

            <div id="panel" className="p-0 bg-white hidden overflow-hidden ">
                <p>Lorem ipsum...</p>
            </div>
        </div>

    );

}
