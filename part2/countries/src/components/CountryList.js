import React from "react";

const ContactList = ({ countries, search }) => {
  const filteredContries = countries.filter((country) =>
    country.name.toLowerCase().includes(search)
  );

  if (filteredContries.length > 10) {
    return (
      <>
        <p>Too many matches, please specify another filter</p>
      </>
    );
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

export default ContactList;
