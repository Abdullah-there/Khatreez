import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/SingleBlog.css"

const SingleBlog = () => {
    const {id} = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://localhost:3000/data/article/${id}`);
            const data = response.data;
            setResult(data[0]);
          } catch (err) {
            console.error("Error Occured", err)
          }
        }
        fetchData();
      }, [id]);
  return (
    <div className='container-single'>
        {result ? (
            <div className="sub">
                <p><span className='sapn-1'>Explore Article</span> | {result.datetime}</p>
                <h1>{result.title}</h1>
                <p>{result.status}</p>
                <img src={result.imageurl} alt="Todays News" />
                <p className='break-spaces'>{result.article}</p>
                <NavLink to="/articles" className="read-more"><p>Read More Articles</p></NavLink>
            </div>
        ) : (
            <p className='loading-p'>Loading ...</p>
        )}
        
    </div>
  )
}

export default SingleBlog