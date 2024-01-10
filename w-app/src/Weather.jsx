// Weather.js
import React, { useState } from 'react';
import { getWeather } from './weatherService';
import './weather.css';
import './WeatherComponent.css';
const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await getWeather(city);
      setWeatherData(data);
      setError('');
    } catch (error) {
      setWeatherData(null);
      setError('City not found. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div  className='ipidata' >
        {weatherData.weather[0].icon && (
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="weather icon"
              className='icon'
            />
          )}
          <h2 className='header'>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className='info'>{weatherData.weather[0].description}</p>
          <p className='info'>Temperature: {weatherData.main.temp} °C</p>
          <p className='info'>Humidity: {weatherData.main.humidity}%</p>
          <p className='info'>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className='info'>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className='info'>Visibility: {weatherData.visibility} meters</p>
          <p className='info'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p className='info'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
            
        </div>
      )};
    </div>
  );
};

export default Weather;
