import React, { useState } from 'react';
import addIcon from '../../assets/add-icon.svg';


const NewTask = ({ addTask, closeModal}) => {
    const [newTaskValue, setNewTaskValue] = useState('')
    const [errors, setErrors] = useState({});

    
    const fieldIsValid = text => {
        const errors = {};
        const textPattern = /^[a-zA-Z0-9_.-]*$/
        if (!text) errors.textRequired = "*Text is required, please insert text";
        if (!text.match(textPattern)) errors.validText = "*Please insert text in English or numbers";
        setErrors(errors);
        return Object.keys(errors).length === 0
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!fieldIsValid(newTaskValue)) return;
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
                <input value={newTaskValue} placeholder="New Task" type="text" className="input" onChange={event => setNewTaskValue(event.target.value) } />
                <button className="btn" type="submit"><img src={addIcon} alt="Add Icon"/></button>
            </form>
            {!errors?null:(
                <h4 className="error">
                    {errors.textRequired||errors.validText}
                </h4>
            )}
        </>
    )
}

export default NewTask;