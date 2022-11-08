import React from "react";

export const TextContainer = React.memo(({index ,taskName , isCompleted}) => {
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