import React, { useEffect, useState, useRef } from 'react'
import '../assets/BlogList.css'
import axios from 'axios';
import BlogListComponent from './BlogListComponent';

const BlogList = () => {
  const [result , setresult] = useState(null);
  const dataFetched = useRef(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      if (!dataFetched.current) {
      try {
        const response = await axios.get("https://khatreezserver.vercel.app/data/blogcomponent");
        const data = response.data;
        setresult(data);
        dataFetched.current = true;
      } catch (err) {
        console.error("Error Occured", err)
      }
    }
  }
    fetchData();
    return () => {
      abortController.abort(); // Cleanup on unmount
    };
  }, []);

  if (!result) {
    return (
    <div className='podcast-section'>
      <h1 className='section-h1'>The Articles across The world</h1>
        <div className="podcast-container">
          <BlogListComponent/>
      </div>
    </div>
    )
  }

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
            text={article.article}
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