import React from 'react';
import {BTNContainer} from './BTNContainer';
import { TextContainer } from './TextContainer';

interface TaskContainerProps {
    task: Task,
    completeTask :Function,
    deleteTask: Function,
    index:number

}

interface Task {
    taskName: string,
    isCompleted?: boolean
  } 


const TaskContainer = ({ task, index, completeTask, deleteTask }:TaskContainerProps) => {
    return (
        <div className="task-container">
            <TextContainer index={index} taskName={task.taskName} isCompleted={task.isCompleted}/>
            <BTNContainer completeTask={completeTask} deleteTask={deleteTask}  index={index}/>
        </div>
    )
}

export default TaskContainer;