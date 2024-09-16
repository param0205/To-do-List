import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({title,icon,subtitle}) => {
  return (
    <section className='Sectionclass'><h2  className= "SubHeaderclass"><img src={icon} className='Iconclass'>
    </img> {title}</h2>
    <TaskCard text = {subtitle}/>
    </section>
)
}

export default TaskColumn