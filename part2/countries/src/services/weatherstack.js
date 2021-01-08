import axios from "axios";

const getWeather = (location) => {
  const baseUrl = "http://api.weatherstack.com/current";
  const params = {
    access_key: process.env.REACT_APP_API_KEY,
    query: location,
  };
  const promise = axios.get(baseUrl, { params });
  return promise;
};

export default getWeather;
