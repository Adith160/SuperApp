import React, { useState, useEffect } from 'react';
import styles from './News.module.css';

const News = () => {
    const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [topNews, setTopNews] = useState({});
  const apiKey = '51bad21ae9334d1ca414c702adad592a'; 

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.articles && data.articles.length > 0) {
          // Set only the one article as the top news
          setTopNews(data.articles[1]);
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });

      const intervalId = setInterval(() => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        setCurrentTime(`${time}`)
        setCurrentDate(`${date}`)}, 1000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
  }, [apiKey]);

  return (
   <>
        {topNews && (
            <div className={styles.news}>
            <img src={topNews.urlToImage} alt={topNews.title} className={styles.image}/>
            <h4 className={styles.title}>{topNews.title}<br/><span className={styles.timings}>{currentDate} &nbsp;&nbsp;&nbsp; {currentTime}</span></h4>
            <div className={styles.desc} >
            <p>{topNews.description}</p>
            </div>
            </div>
        )}
    </>
  );
};

export default News;
