import react from "react";

export default function Random(props){

    


    return (

        <div className="">


            <img src={props.image} alt="" className="w-full max-h-96 " width="" />
            <p className='text-2xl'>{props.title}</p>
            <p>{props.comment}  </p>
           


        </div>


    );


}