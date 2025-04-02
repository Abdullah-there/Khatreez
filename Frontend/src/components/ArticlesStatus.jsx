import React from 'react'
import "../assets/Blogs.css";
import BlogSubDisplay from './BlogSubDisplay';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ArticlesStatus = () => {
    const { type } = useParams();
    const [result, setResult] = useState([]);
    const [limit, setLimit] = useState(10);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`https://khatreez.vercel.app/articles/filter/${encodeURIComponent(type)}/${limit}`);
          const data = response.data;
          setResult(data);
        } catch (err) {
          console.log("Error occurred");
        }
      }
      fetchData();
    }, [limit]);

    const requestData = () => {
        setLimit(prevLimit => prevLimit + 10);
      };

  return (
    <div className="blog-container">
      {result && result.map((article) => {
        return (
          <BlogSubDisplay
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
      <button className="read-more-btn"  onClick={requestData}>Read More</button>
    </div>
  );
}

export default ArticlesStatus