import React, { useState, useEffect } from "react";
import CountryList from "./components/CountryList.js";
import getAllCountries from "./services/restcountries.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then((response) => {
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
