import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/FirstComponent.css";
import { NavLink } from "react-router-dom";

const FirstComponent = (props) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4000/data/blogmain");
        const data = response.data; 
        setResult(data[0]); 
      } catch (err) {
        console.error("Error occurred:", err);
      }
    }
    fetchData();
  }, []);

  return (
    result && (
        <NavLink to={`/articles/${result.id}`} className="custom-link">
            <div className="main-1 flex">
                <div className="left">
                    <h1>{result.title}</h1>
                    <p>{result.article.substring(0, 100)} ...</p>
                    <div className="left-div flex">
                        <p className="details-p">Date : {result.datetime}</p>
                        <p className="details-p status">{result.status}</p>
                    </div>
                </div>
                <div className="right">
                    <img src={result.imageurl} alt="Today's News" />
                </div>
            </div>
        </NavLink>
    )
);
};

export default FirstComponent;