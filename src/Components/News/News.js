import React, { useState, useEffect } from "react";
import { LinearProgress } from "@material-ui/core";

import axios from "axios";
import "./news.css";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const news = await axios.get(
        "https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list?id=Technology",
        {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host":
              "bloomberg-market-and-financial-news.p.rapidapi.com",
          },
        }
      );

      // Not all returned data came back with stories/ if they did loop through the various arrays and push all available content to state
      let item = [];
      news.data.modules.map((article) => {
        if (article["stories"].length > 1) {
          article["stories"].map((story) => item.push(story));
        }
      });
      setNews(item);
      setLoading(!loading);
    };
    getNews();
  }, []);

  return (
    <div className="news">
      {loading ? (
        <div className="news__progress-bar-container">
          <p>Loading...</p>
          <div className="news__progress-bar">
            <LinearProgress />
          </div>
        </div>
      ) : (
        news.map((news) => {
          return (
            <div className="news__container">
              <div className="news__imgContainer">
                <img
                  alt="File Corrupted"
                  className="news__image"
                  src={news["thumbnailImage"]}
                />
              </div>
              <div className="news__title">{news["title"]}</div>
              <a href={news["shortURL"]}>Read More</a>
            </div>
          );
        })
      )}
    </div>
  );
};

export default News;
