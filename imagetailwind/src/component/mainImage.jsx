import react from "react";

export default function MainImage(porps) {

    return (
        <div id="mainImage">
            <img src={`${process.env.PUBLIC_URL}/test2.png`} alt="" className="w-full max-h-96 " width="" />
        </div>
    );

}
