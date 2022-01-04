import react from "react";

export default function Random(props){

    


    return (

        <div className="">


            <img src={props.image} alt="" className="w-72 max-h-96 " width="" />
            <p className='text-5xl text-center font-semibold'>{props.title}</p>
            <p>{props.comment}  </p>
           


        </div>


    );


}