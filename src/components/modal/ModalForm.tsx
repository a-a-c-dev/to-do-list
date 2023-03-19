import React, { useCallback, useState } from 'react';

import  {ModalHeader} from './ModalHeader'
import { ModalFooter } from './ModalFooter';
import { ModalInput } from './ModalInput';

interface ModalFormProps {
    addTask : (task:string)=>void,
    closeModal:()=>void
}
interface Errors {
    textRequired?:string,
    validText?:string
}

const ModalForm = ({ addTask, closeModal}:ModalFormProps) => {
    const [newTaskValue, setNewTaskValue] = useState<string>('')
    const [errors, setErrors] = useState<Errors >({});

    const debounce = (fn:Function) => {
        let timerId:ReturnType<typeof setTimeout>;
        return (...args:any[]) => {
          clearTimeout(timerId);
          timerId = setTimeout(() => fn(...args), 200);
        }
      };
     const fieldIsValid = useCallback( () => {
        const errors:Errors = {};
        const textPattern = /^[a-zA-Z0-9 .!?"-]+$/
        if (!newTaskValue) errors.textRequired = "* Text is required, please insert text";
        if (!newTaskValue.match(textPattern)) errors.validText = "* Please insert text in English or numbers";
        setErrors(errors);
        return Object.keys(errors).length === 0
    },[newTaskValue]);

    const handleChange =(value:string) => {
        setNewTaskValue(value);
    }
    const optimizedhandle = useCallback(debounce(handleChange),[]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!fieldIsValid()) return;
        addTask(newTaskValue);
        setNewTaskValue('');
        closeModal();
    }


    return (
        <form onSubmit={handleSubmit}>
            <ModalHeader/>
            <ModalInput  handleChange={( value:string)=>optimizedhandle(value)} newTaskValue={newTaskValue} errors={errors} />
            <ModalFooter closeModal={closeModal}/>
        </form>
    )
}

export default ModalForm ;