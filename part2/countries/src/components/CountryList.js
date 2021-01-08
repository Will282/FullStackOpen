import React from "react";
import Country from "./Country.js";

const CountryList = ({ countries, search }) => {
  const filteredContries = countries.filter((country) =>
    country.name.toLowerCase().includes(search)
  );

  if (filteredContries.length > 10) {
    return (
      <>
        <p>Too many matches, please specify another filter</p>
      </>
    );
  }
  if (filteredContries.length === 1) {
    return <Country country={filteredContries[0]} />;
  } else {
    return (
      <>
        {filteredContries.map((country) => (
          <p key={country.name}>{country.name}</p>
        ))}
      </>
    );
  }
};

export default CountryList;
