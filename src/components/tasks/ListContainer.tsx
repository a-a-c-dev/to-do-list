import React,{useId} from "react";
import TaskContainer from "./TaskContainer";

interface ListContainerProps {
    tasks: Task[],
    completeTask :Function,
    deleteTask: Function,

}


interface Task {
    taskName: string,
    isCompleted?: boolean
  } 
  

 const ListContainer = ({tasks,completeTask,deleteTask}:ListContainerProps) => {
    return (
        <div className="tasks-container">
            {tasks.map((task, index) =>  
                (
                    <TaskContainer
                        key={`${useId}-${task.taskName}`}
                        index={index}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                    />
                )
            )}
        </div>
    )
}

export default ListContainer;