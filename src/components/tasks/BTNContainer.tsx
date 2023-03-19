import React from "react";

import completeIcon from '../../assets/complete-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import {BTN } from './BTN'

interface Props {
    completeTask :Function,
    deleteTask: Function,
    index:number
}

export const BTNContainer = ({completeTask,deleteTask,index}:Props) => {

    return (
        
        <div className="btn-container">
            <BTN 
            handlerFunction={completeTask}
            index={index}
            icon={completeIcon} 
            describtion="Complete Icon"
            />
            <BTN 
            handlerFunction={deleteTask}
            index={index}
            icon={deleteIcon} 
            describtion="Delete Icon"
            />
        </div>
    )
}