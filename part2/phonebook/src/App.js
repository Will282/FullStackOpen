import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactList from "./components/ContactList";
import InputForm from "./components/InputForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState("");

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);

  const handleSearchName = (event) => {
    setSearchName(event.target.value.toLowerCase());
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <InputForm persons={persons} setPersons={setPersons} />
      <ContactList persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
