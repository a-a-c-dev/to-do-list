import React from "react";


export const BTN = ({handlerFunction,index, icon ,describtion}) => {

    return (
            <button className="btn" onClick={() => handlerFunction(index)}><img src={icon} alt={describtion}/></button>
    )
}