import React from 'react';
import completeIcon from '../../assets/complete-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';



const Task = ({ task, index, completeTask, deleteTask }) => {
    return (
        <div className="task-container">
            <div className="text-container">
                <p className="counter-task">
                    {index+1}.
                </p>
                <p className="task-text" style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}>
                    {task.taskName}
                </p>
            </div>
            <div className="btn-container">
                <button className="btn" onClick={() => completeTask(index)}><img src={completeIcon} alt="Complete Icon"/></button>
                <button className="btn" onClick={() => deleteTask(index)}><img src={deleteIcon} alt="Delete Icon"/></button>
            </div>
        </div>
    )
}

export default Task;




/*
              <div className="range-container">
                  <input type="range" id="volume" name="volume"
                    defaultValue='1' min="0" max="11"/>
                    <label htmlfor="volume">importancy</label>
                </div>
*/