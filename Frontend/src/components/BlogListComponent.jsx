import React from 'react'
import "../assets/BlogList.css"
import { NavLink } from 'react-router-dom'

const BlogListComponent = (props) => {
  return (
            <div>
              <NavLink to={`/articles/${props.id}`} className='podcast-card'>
              <div className='card-img'>
                <img src={props.src} alt="Title" />
              </div>
                <div className='card-info'>
                  <h2>{props.title.substring(0,20)} ...</h2>
                  <p>{props.text.substring(0,15)} ...</p>
                  <p>Date : {props.date}</p>
                </div>
                </NavLink>
            </div>
)
}

export default BlogListComponent