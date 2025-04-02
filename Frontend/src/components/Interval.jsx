import React from 'react'
import '../assets/interval.css'

const Interval = (props) => {
  return (
    <div className='interval-div'>
        <h1>{props.title}</h1>
        <p>{props.detail}</p>
        <hr />
    </div>
  )
}

export default Interval;