import React from 'react'
import './TaskCard.css'
import Tag from './Tag'
import Delete from '../img/delete.png'

const TaskCard = ({ text }) => {
    return (
        <article className='ArticleClass'>
            <p class ="titleclass">{text}</p>
            <div className='TaskCss'>
                <div className='Taskbutton'>
                    <Tag tagName="HTML" />
                    <Tag tagName="CSS" />
                </div>
                <div className='Deletebutton'>
                    <img src={Delete} className='DeleteIcon'></img>
                </div>
            </div>

        </article>
    )
}

export default TaskCard