import React, { useCallback, useState } from 'react';

import  {ModalHeader} from './ModalHeader'
import { ModalFooter } from './ModalFooter';
import { ModalInput } from './ModalInput';

const ModalForm = ({ addTask, closeModal}) => {
    const [newTaskValue, setNewTaskValue] = useState('')
    const [errors, setErrors] = useState({});

    const debounce = fn => {
        let timerId;
        return (...args) => {
          clearTimeout(timerId);
          timerId = setTimeout(() => fn(...args), 200);
        }
      };
    const fieldIsValid = useCallback( () => {
        const errors = {};
        const textPattern = /^[a-zA-Z0-9 .!?"-]+$/
        if (!newTaskValue) errors.textRequired = "* Text is required, please insert text";
        if (!newTaskValue.match(textPattern)) errors.validText = "* Please insert text in English or numbers";
        setErrors(errors);
        return Object.keys(errors).length === 0
    },[newTaskValue]);

    const handleChange = value => {
        setNewTaskValue(value);
    }
    const optimizedhandle = useCallback(debounce(handleChange),[]);

    const handleSubmit = event => {
        event.preventDefault();
        if (!fieldIsValid()) return;
        addTask(newTaskValue);
        setNewTaskValue('');
        closeModal();
    }


    return (
        <form onSubmit={handleSubmit}>
            <ModalHeader/>
            <ModalInput  handleChange={(name, value)=>optimizedhandle(name,value)} handleSubmit={handleSubmit} errors={errors} />
            <ModalFooter closeModal={closeModal}/>
        </form>
    )
}

export default ModalForm;