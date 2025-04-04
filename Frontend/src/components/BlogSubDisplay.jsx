import React from 'react'
import "../assets/Blogs.css"
import { NavLink } from 'react-router-dom'

const BlogSubDisplay = (props) => {
  return (
      <NavLink to={`/articles/${props.id}`}  className='blog-element' id={props.id}>
        <img src={props.src} alt="Article Photo"/>
            <div className='blog-element-div' >
                <h1>{props.title}</h1>
                <p className='div-p'>{props.text} ...</p>
                <p className='div-p'>{props.status}</p>
                <p className='div-date div-p'>Date: {props.date}</p>
            </div>
            </NavLink>
  )
}

export default BlogSubDisplay