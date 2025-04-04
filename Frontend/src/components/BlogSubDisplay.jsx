import React from 'react'
import "../assets/Blogs.css"
import { NavLink } from 'react-router-dom'

const BlogSubDisplay = (props) => {
  return (
    <div id={props.id}>
      <NavLink to={`/articles/${props.id}`}  className='blog-element'>
        <img src={props.src} alt="Article Photo"/>
            <div className='blog-element-div' >
                <h1>{props.title}</h1>
                <p className='div-p'>{props.text} ...</p>
                <p className='div-p'>{props.status}</p>
                <p className='div-date div-p'>Date: {props.date}</p>
            </div>
            </NavLink>
    </div>
  )
}

export default BlogSubDisplay