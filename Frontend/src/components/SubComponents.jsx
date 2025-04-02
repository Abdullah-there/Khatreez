import React from 'react'
import "../assets/BlogList.css"
import { NavLink } from 'react-router-dom'

const SubComponents = (props) => {
  return (
    <div className='podcast-card sub-component-card'>
      <NavLink to={`/articles/filter/${props.title}`} className="sub-component-card">
        <h1 className='sub-component-h1'>{props.title}</h1>
        <img className="sub-component-img"src={props.src} alt={props.title} /></NavLink>
    </div>
  )
}

export default SubComponents