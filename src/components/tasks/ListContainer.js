import {useId} from "react";
import TaskContainer from "./TaskContainer";

 const ListContainer = ({tasks,completeTask,deleteTask}) => {
    return (
        <div className="tasks-container">
            {tasks.map((task, index) =>  
                (
                    <TaskContainer
                    key={`${useId}-${task}`}
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