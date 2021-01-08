import axios from "axios";
const baseUrl = "https://restcountries.eu/rest/v2/all";

const getAllCountries = () => {
  const promise = axios.get(baseUrl)
  return promise;
};

export default getAllCountries;