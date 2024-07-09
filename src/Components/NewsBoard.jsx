import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news,index)=>{
        return <NewsItems key={index} title={news.title} description={news.discription} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  );
};

export default NewsBoard;
