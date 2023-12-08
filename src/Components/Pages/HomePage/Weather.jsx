import React, { useState, useEffect } from 'react';
import styles from './Weather.module.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Replace 'YOUR_API_KEY' and 'YOUR_LOCATION' with your actual API key and location
    const apiKey = 'YOUR_API_KEY';
    const location = 'YOUR_LOCATION';

    // Fetch weather data from the API
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

    // Update current time every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();


    //   const hours = now.getHours();
    //   const minutes = now.getMinutes();
    //   const seconds = now.getSeconds();
    //   const ampm = hours >= 12 ? 'PM' : 'AM';
    //   setCurrentTime(`${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}   ${dates}`);
    // }, 1000);

    setCurrentTime(`${time}`)
    setCurrentDate(`${date}`)}, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <>
      <div className={styles.weather}>
        <div className={styles.timings}>
          <p>{currentDate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {currentTime} </p> 
        </div>
        <div className={styles.weatherReport}>
          {weatherData && (
            <>
              <p>Rain: {weatherData.current.precip_mm} mm</p>
              <p>Temperature: {weatherData.current.temp_c} °C</p>
              <p>Humidity: {weatherData.current.humidity}%</p>
              <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;






// import React from 'react'
// import styles from './Weather.module.css'

// function Weather() {
//   return (
//     <>
//         <div className={styles.weather}>

//         <div className={styles.timings}></div>
//         <div className={styles.weatherReport}></div>

//         </div>   
//     </>
//   )
// }

// export default Weather