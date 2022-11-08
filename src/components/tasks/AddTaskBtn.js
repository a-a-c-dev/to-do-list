import React from "react";
import addIcon from '../../assets/add-icon.svg'


export const AddTaskBtn =React.memo(({show}) => {
    return (
        <button className="btn-add-modal" onClick={show} >
            <h3> add  task</h3> 
            <img src={addIcon} alt="Add Icon"/>
        </button>
    )
})