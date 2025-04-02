import React, { useEffect, useState } from 'react'
import '../assets/BlogList.css'
import axios from 'axios';
import BlogListComponent from './BlogListComponent';

const BlogList = () => {
  const [result , setresult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://khatreez.vercel.app/data/blogcomponent");
        const data = response.data;
        setresult(data);
      } catch (err) {
        console.error("Error Occured", err)
      }
    }
    fetchData();
  }, []);
  return (
    <div className='podcast-section'>
      <h1 className='section-h1'>The Articles across The world</h1>
        <div className="podcast-container">
        {result && result.map((article) => {
        return (
          <BlogListComponent
            key={article.id}
            id={article.id}
            src={article.imageurl}
            title={article.title}
            text={article.article.substring(0, 50)}
            status={article.status}
            date={article.datetime}
          />
        );
      })}
      </div>
    </div>
  )
}

export default BlogList