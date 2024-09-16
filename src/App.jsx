import React from 'react'
import "./App.css"
import HeaderComponent from './assets/HeaderComponent'
import TaskColumn from './assets/TaskColumn'
import Start from '../src/img/direct-hit.png'
import Progress from '../src/img/glowing-star.png'
import Done from '../src/img/check-mark-button.png'


const App = () => {
  return (
    <div className='AppClass'>
      <HeaderComponent/>
      <main className='mainClass'>
        <TaskColumn title = "Start Task" icon ={Start} subtitle = "This is a Sample test"/>
        <TaskColumn title = "Task in Progress" icon ={Progress} subtitle = "This is a Sample test"/>
        <TaskColumn title = "Task Completed" icon ={Done} subtitle = "This is a Sample test"/>
      </main>
    </div>
  )
}

export default App