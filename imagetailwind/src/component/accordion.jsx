import react from "react";

export default function Accordion(porps) {
   
    let [display, setDisplay] = react.useState(false);

    let handleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div id="accordion">
            <div>
                <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" onClick={() => handleDisplay()}/>
               <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-one">Label One</label>
            </div>
            <div className={`transition-[height] duration-1000  ${display ? " max-h-100 ": "max-h-0 overflow-hidden"}`}>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">Section 1</button>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">Section 2</button>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">Section 3</button>
                <button id="" className=" bg-gray-300 cursor-pointer p-5 w-full text-left border-none ">Section </button>
            </div>
            

            <div id="panel" className="p-0 bg-white hidden overflow-hidden ">
                <p>Lorem ipsum...</p>
            </div>
        </div>

    );

}
