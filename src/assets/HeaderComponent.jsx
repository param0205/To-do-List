import React from 'react'
import "./HeaderComponent.css"
import Tag from './Tag'

const HeaderComponent = () => {
    return (
        <header className='Headercss'>
            <form className='FormClass'>
                <input type="text" placeholder='Enter your Task' className='InputClass' />
                <div className='TagList'>
                    <div>
                        <Tag tagName = "HTML"/>
                        <Tag tagName = "CSS"/>
                        <Tag tagName = "JavaScript"/>
                        <Tag tagName = "React"/>
                    </div>

                    <div className='Addcontent'>
                        <select class="Selectclass">
                            <option value="StartTask">Start Task</option>
                            <option value="TaskinProgress">Task in Progress</option>
                            <option value="TaskCompleted">Task Completed</option>
                        </select>
                        <button type='submit' className='submitClass'> +Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default HeaderComponent