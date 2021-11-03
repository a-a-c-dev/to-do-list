import React from "react";
import Task from "./Task";

export const Tasks =React.memo( ({tasks,completeTask,deleteTask}) => {
    return (
        <div className="tasks-container">
            {tasks.map((task, index) =>  
                (
                    <Task
                    key={index}
                    index={index}
                    task={task}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    />
                )
            )}
        </div>
    )
})