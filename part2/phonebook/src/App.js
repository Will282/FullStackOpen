import React, { useState } from "react";
import ContactList from "./components/ContactList";
import InputForm from "./components/InputForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [searchName, setSearchName] = useState("");

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
