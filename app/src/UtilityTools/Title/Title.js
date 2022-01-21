import React from 'react'
import './title.css'
const Title = ({title, color}) => {
  return (
        <div className="div">
            <h3 className="title" style={{color: color }}>{title}</h3>
        </div>
  )
}
 
export default Title
