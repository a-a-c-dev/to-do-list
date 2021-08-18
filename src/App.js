import React from 'react';

import TasksContainer from './components/tasks/TasksContainer';
import { Header } from './components/common/Header';
import './App.css';




const App = () => {


  return (
    <div className="todoList-app">
        <Header/>
        <TasksContainer/>
    </div>
  )
}

export default App;