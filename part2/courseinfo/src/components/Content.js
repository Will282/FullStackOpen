import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const parts_arr = parts.map((value, index) => (
    <Part
      key={`part-${index}`}
      name={value.name}
      excercises={value.exercises}
    />
  ));
  return <div>{parts_arr}</div>;
};

export default Content;
