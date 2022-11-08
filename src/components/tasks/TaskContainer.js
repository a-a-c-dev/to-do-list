import React from 'react';
import {BTNContainer} from './BTNContainer';
import { TextContainer } from './TextContainer';



const TaskContainer = ({ task, index, completeTask, deleteTask }) => {
    return (
        <div className="task-container">
            <TextContainer index={index} taskName={task.taskName} isCompleted={task.isCompleted}/>
            <BTNContainer completeTask={completeTask} deleteTask={deleteTask}  index={index}/>
        </div>
    )
}

export default TaskContainer;