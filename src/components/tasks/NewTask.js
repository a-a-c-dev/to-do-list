import React, { useState } from 'react';
import addIcon from '../../assets/add-icon.svg';


const NewTask = ({ addTask, closeModal}) => {
    const [newTaskValue, setNewTaskValue] = useState('')
    const handleSubmit = event => {
        event.preventDefault();
        if (!newTaskValue) return;
        addTask(newTaskValue);
        setNewTaskValue('');
        closeModal();
    }
    return (
        <>
             <h3>
                Add tasks
            </h3>
            <p>
                 fill in the input with your task.
            </p>
            <form onSubmit={handleSubmit} >
                <input value={newTaskValue} placeholder="New Task" type="text" className="input" onChange={e => setNewTaskValue(e.target.value)} />
                <button className="btn" type="submit"><img src={addIcon} alt="Add Icon"/></button>
            </form>
        </>
    )
}

export default NewTask;