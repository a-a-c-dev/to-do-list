import React from "react";


export const BTN = ({handlerFunction,index, icon ,describtion}) => {

    return (
            <button role="btn" className="btn" onClick={() => handlerFunction(index)}><img src={icon} alt={describtion}/></button>
    )
}