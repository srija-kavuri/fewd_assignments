import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('Hyderabad');
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '216d530531560a72cb7c0450ab463121';

    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: location,
              appid: apiKey,
              units: 'metric',
            },
          }
        );

        setWeather(res.data);
        setError(null);
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError('Failed to fetch weather data.');
        }
        setWeather(null);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <div className="p-4 bg-blue-100 rounded-xl shadow-md max-w-sm">
      <h2 className="text-xl font-semibold mb-2">Weather in {location}</h2>

      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded w-full mb-2"
        placeholder="Enter city"
      />

      {error ? (
        <p className="text-red-600">{error}</p>
      ) : !weather ? (
        <p>Loading weather data...</p>
      ) : (
        weather.main && (
          <div>
            <p>🌡️ Temperature: {weather.main.temp} °C</p>
            <p>🌥️ Condition: {weather.weather[0].description}</p>
            <p>💨 Wind: {weather.wind.speed} m/s</p>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;
