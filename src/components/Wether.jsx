/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wether() {
  const ApiKey = '71f857359ee43c623efb99dbae20862a';
  const [search, setsearch] = useState('');
  const [weatherData, setWeatherData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search) {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${ApiKey}`,
          );
          setWeatherData(response?.data);
        } else {
          setWeatherData('');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [search]);
  // eslint-disable-next-line no-console
  console.log(weatherData, 'asasasa');
  const searchClick = () => {
    // eslint-disable-next-line no-console
    console.log('worked');
  };
  return (
    <div className="weather">
      <div className="weather_main">
        <div className="weather_top">
          <h1>Weather App</h1>
        </div>
        <input
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={searchClick}>Search</button>
        {search?.length > 0 && (
          <div className="weather_detail">
            <p>{weatherData?.name},City</p>
            <span>{weatherData?.main?.temp} F</span>
            <span>{weatherData?.clouds?.all === '0' ? 'no' : weatherData?.clouds?.all} clouds</span>
            {/* <span>{weatherData?.description} </span> */}
          </div>
        )}
      </div>
    </div>
  );
}
