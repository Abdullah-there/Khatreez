import React from 'react'
import "../assets/Blogs.css"
import { NavLink } from 'react-router-dom'

const BlogSubDisplay = (props) => {
  return (
    <div className='blog-element' id={props.id}>
        <img src={props.src} alt="Article Photo"/>
            <div className='blog-element-div' >
                <h1>{props.title}</h1>
                <p className='div-p'>{props.text} ...</p>
                <p className='div-p'>{props.status}</p>
                <p className='div-date div-p'>Date: {props.date}</p>
                <NavLink to={`/articles/${props.id}`}><button className="learn-more-button">Read More! </button></NavLink>
            </div>
    </div>
  )
}

export default BlogSubDisplay