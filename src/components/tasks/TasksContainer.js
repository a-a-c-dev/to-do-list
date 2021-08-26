import React,{useState,useEffect} from "react";
import NewTask from "./NewTask";
import Task from "./Task";
import ToggleContent,{Modal} from '../modal/ToggleContent';
import addIcon from '../../assets/add-icon.svg'

const TasksContainer = () => {


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
          taskName: 'Complete portfolio',
          isCompleted: false
        },
        {
          taskName: 'Do the dishes',
          isCompleted: false
        },
        {
          taskName: 'Wipe the floor',
          isCompleted: false
        },
        {
          taskName: 'Sell your car.',
          isCompleted: true
        },
        {
          taskName: 'Fix upper floor Wifi.',
          isCompleted: true
        },
        {
          taskName: 'Complete portfolio',
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
          
            <div className="tasks-container">
                {tasks.map((task, index) =>  
                      (
                        <Task
                        key={index}
                        index={index}
                        task={task}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        />
                      )
                )}
            </div>
            <ToggleContent
                toggle={show => 
                            // Add validation here, if the number of tasks is bigger then 10 displat an error,
                            // telling the user the he needed to delete before he could add some more
                            listIsFull?
                            (
                              <p className="error">
                                  *List is full!<br/> please delete some of your tasks, in order to add some more
                              </p>
                            )
                            :
                            (
                              <button className="btn-add-modal" onClick={show} >
                                <h3>Press here to add new task</h3> 
                                <img src={addIcon} alt="Add Icon"/>
                              </button>
                            )
                        }
                content={hide => (
                    <Modal>
                        <NewTask addTask={addTask}  closeModal={hide}/>
                        <button className="close-btn" onClick={hide}>Close</button>
                    </Modal>
                )}
            />
        </div>
    )
}


export default TasksContainer;