import react from "react";
import '../App.css';


export default function Random(props) {




    return (

        <div className="max-w-xs flex-1 img-random self-center">


            <img src={props.image} alt="" className=" flex max-w-full sm:self-center h-28 xl:h-auto  mb-3" width="" />
            <p className='text-3xl xl:text-5xl  text-center font-semibold mb-3 '>{props.title}</p>
            <p className="whitespace-pre-wrap font-semibold">{props.comment}  </p>



        </div>


    );


}