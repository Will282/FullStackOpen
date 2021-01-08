import React, { useState, useEffect } from "react";
import getWeather from "../services/weatherstack.js";

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location) {
      setIsLoading(true);
      setWeather(null)
      getWeather(location)
        .then((response) => {
          setWeather(response.data.current);
          setIsLoading(false);
        })
        .catch(console.log);
    }
  }, [location]);

  return (
    <>
      {isloading && <p>Loading...</p>}
      {!!weather && (
        <>
          <h3>Weather in {location}</h3>
          <p><b>Temperature:</b> {weather.temperature}</p>
          <img
            src={weather.weather_icons[0]}
            alt={weather.weather_descriptions[0]}
            height="100"
            weight="100"
          />
          <p>
            <b>Wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}
          </p>
        </>
      )}
    </>
  );
};

export default Weather;
