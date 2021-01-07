import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((response) => {
        console.log(response.data)
        setCountries(response.data);
      })
      .catch(setCountries([]));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());

  };

  return (
    <div>
      <h2>Country Search</h2>
      Find countries: <input value={search} onChange={handleSearch} />
      <CountryList countries={countries} search={search} />
    </div>
  );
};

export default App;
