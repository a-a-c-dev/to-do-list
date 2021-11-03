import React,{useState,useEffect} from "react";
import NewTask from "./NewTask";
import {Tasks} from "./Tasks";
import ToggleContent,{Modal} from '../modal/ToggleContent';
import { AddTaskBtn } from "./AddTaskBtn";
import { Error } from "./Error";

const TasksContainer =React.memo( () => {

    const [tasks, setTasks] = useState([
        {
          taskName: 'Sell your car.',
          isCompleted: true
        },
        {
          taskName: 'Fix upper floor Wifi.',
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
        }
      ])
    const [listIsFull, setListIsFull]  = useState(false)
    
    const addTask = taskName => {
        let taskList = [...tasks, { taskName }];
        setTasks(taskList);
      }
    const completeTask = index => {
        let taskList = [...tasks];
        taskList[index].isCompleted = !taskList[index].isCompleted;
        setTasks(taskList);
      }
    const deleteTask = index => {
        let taskList = [...tasks];
        taskList.splice(index, 1);
        setTasks(taskList)
      }
    useEffect(()=>{
        (tasks.length===10) ?setListIsFull(true):setListIsFull(false)
      },[tasks])
    return (
        <div className="main-container">    
          
            <Tasks  tasks={tasks} completeTask={completeTask} deleteTask={deleteTask}/>      
            <ToggleContent
                toggle={show =>  listIsFull?(<Error/>):(<AddTaskBtn show={show}/> )}
                        content={hide => (
                          <Modal>
                              <NewTask addTask={addTask}  closeModal={hide}/>
                              <button className="close-btn" onClick={hide}>Close</button>
                          </Modal>
                       )}
            />
        </div>
    )
})


export default TasksContainer;