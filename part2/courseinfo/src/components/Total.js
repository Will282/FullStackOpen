import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumParts, thisPart) => accumParts + thisPart.exercises,
    0
  );
  return (
    <p>
      <b>Total number of exercises {total}</b>
    </p>
  );
};

export default Total;
