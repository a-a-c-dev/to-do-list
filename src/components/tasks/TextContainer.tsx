import React from "react";

interface TextContainerProps {
    index:number ,
    taskName:string ,
    isCompleted?:boolean
}

export const TextContainer = React.memo(({index ,taskName , isCompleted}:TextContainerProps) => {
    return (
        <div className="text-container">
            <p className="counter-task">
                {index+1}.
            </p>
            <p className="task-text" style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
                {taskName}
            </p>
        </div>
    )
})