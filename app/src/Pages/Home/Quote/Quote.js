import React from 'react'
import './Quote.css'
const Quote = ({title}) => {
  return (
    <div className="quote-body">
      <div className="indent">“</div>
        <div className="blockquote"> 
            <span className="before-quote"> “ </span>
            {title}
            <span className="after-quote"> ”</span>    
        </div>
    </div>
  )
}

export default Quote
