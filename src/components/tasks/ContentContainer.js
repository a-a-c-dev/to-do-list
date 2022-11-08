import React,{useState,useEffect,useMemo, Suspense, lazy}  from "react";
import ModalForm from "../modal/ModalForm";
import ToggleContent,{Modal} from '../modal/ToggleContent';
import { AddTaskBtn } from "./AddTaskBtn";
import { ErrorListFull } from "./ErrorListFull";

import {Spinner} from '../common/Spinner';
import useLocalStorage from '../../hooks/useLocalStorage';


const ListContainer = lazy(()=> import ("./ListContainer"));




export const ContentContainer = () => {
    const [tasks, setTasks] = useLocalStorage('tasks',[
        {
          taskName: 'Fix Wifi.',
          isCompleted: true
        },
        {
          taskName: 'buy groceries',
          isCompleted: false
        },
        {
          taskName: 'Do the dishes',
          isCompleted: false
        },
        {
          taskName: 'Wipe the floor',
          isCompleted: false
        }, {
          taskName: 'Sell the car.',
          isCompleted: true
        }
      ]);
    const [isListFull, setIsListFull]  = useState(false);

    const addTask = useMemo(()=>taskName => {
      let taskList = [...tasks, { taskName }];
      setTasks(taskList);
    },[setTasks, tasks]);
    const completeTask = useMemo(()=> index => {
      let taskList = [...tasks];
      taskList[index].isCompleted = !taskList[index].isCompleted;
      setTasks(taskList);
    },[setTasks, tasks]);
    const deleteTask = useMemo(()=>index => {
      let taskList = [...tasks];
      taskList.splice(index, 1);
      setTasks(taskList)
    },[setTasks,tasks]);

    
    useEffect(()=>{
      (tasks.length>=10)?setIsListFull(true):setIsListFull(false);
    },[tasks.isCompleted,tasks.length, deleteTask]);

    return (
        <>    
            <ToggleContent
              toggle={show =>  
                isListFull?
                (<ErrorListFull/>)
                :
                (
                  <AddTaskBtn show={show}/> )}
                     content={hide => (
                      <Modal>
                        <ModalForm addTask={addTask}  closeModal={hide}/>
                      </Modal>
                )}
            />
            <Suspense  
                fallback={<Spinner />}>
                <ListContainer tasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/>
              </Suspense>
        </>
    )
}

