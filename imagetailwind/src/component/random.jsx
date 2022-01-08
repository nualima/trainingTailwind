import react from "react";

export default function Random(props){

    


    return (

        <div className="max-w-xs flex-1 ">


            <img src={props.image} alt="" className="" width="" />
            <p className='text-5xl text-center font-semibold '>{props.title}</p>
            <p className="whitespace-pre-wrap font-normal">{props.comment}  </p>
           


        </div>


    );


}