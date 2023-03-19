import React from "react";

interface ModalInputProps {
    handleChange:( value: string) => void,
    newTaskValue:string,
    errors:{
        textRequired?:string,
        validText?:string
    }
}


export const ModalInput = ({handleChange,newTaskValue,errors }:ModalInputProps) => {
    return (
        <div className="input-container">
            <input value={newTaskValue} placeholder="New Task" type="text" className="input" onChange={event => handleChange(event.target.value) } />
            {!errors?null:(
            <h4 className="error">
                {errors.textRequired||errors.validText}
            </h4>
            )}
        </div>
    )
}