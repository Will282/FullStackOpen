import React from "react";

const Filter = ({ searchName, handleSearchName }) => {
  return (
    <p>
      Filter entries shown by name:{" "}
      <input value={searchName} onChange={handleSearchName} />
    </p>
  );
};

export default Filter;
