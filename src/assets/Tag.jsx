import React from 'react'
import "./Tag.css"

const Tag = (props) => {
  return (
         <button className='Tag'>{props.tagName}</button>
  )
}

export default Tag