import React from "react";

export const ModalInput = ({handleChange,newTaskValue,errors }) => {
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