import React from "react";

export const Error = () => {
    return (
        <p className="error">
            * the list of tasks is full!<br/>
            the list can hold up to ten tasks,<br/>
            to add  more tasks
            please delete some of the tasks that have been completed 
        </p>
    )
}