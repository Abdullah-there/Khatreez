import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import "../assets/FirstComponent.css";

function FirstComponent() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const dataFetched = useRef(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      if (!dataFetched.current) {
        try {
          const response = await axios.get(
            "https://khatreezserver.vercel.app/data/blogmain",
            { signal: abortController.signal }
          );
          setResult(response.data[0]);
          dataFetched.current = true;
        } catch (err) {
          if (!abortController.signal.aborted) {
            console.error("Error occurred:", err);
            setError("Failed to load data. Please try again later.");
          }
        }
      }
    }

    fetchData();
    return () => abortController.abort(); // Cleanup on unmount
  }, []);

  if (error) {
    return <p className="p-error">{error}</p>;
  }

  if (!result) {
    return <div className="main-1 flex">
        <div className="left">
          <h1>Loading ...</h1>
          <p></p>
          <div className="left-div flex">
            <p className="details-p"></p>
            <p className="details-p status"></p>
          </div>
        </div>
        <div className="right">
          <img src="#" alt="News" />
        </div>
      </div>;
  }

  return (
    <NavLink to={`/articles/${result.id}`} className="custom-link">
      <div className="main-1 flex">
        <div className="left">
          <h1>{result.title}</h1>
          <p>{result.article.substring(0, 150)} ...</p>
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
  );
}

export default FirstComponent;