import React from "react";

interface Props{
    handlerFunction: Function
    index:number,
     icon:string ,
     describtion:string
}

export const BTN = ({handlerFunction,index, icon ,describtion}:Props) => {

    return (
            <button role="btn" className="btn" onClick={() => handlerFunction(index)}><img src={icon} alt={describtion}/></button>
    )
}