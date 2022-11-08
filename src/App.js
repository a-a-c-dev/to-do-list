import React from 'react';
import {MainContainer} from './components/tasks/MainContainer';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import './App.css';




const App = () => {


  return (
    <div className="todoList-app-container">
        <Header/>
        <MainContainer/>
        <Footer/>
    </div>
  )
}

export default App;