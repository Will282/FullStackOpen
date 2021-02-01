import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNewName = (event) => {
    event.preventDefault();

    const personExists = persons.find((person) => person.name === newName);
    if (personExists) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newPersonEntry = {
        name: newName,
        number: newNumber,
      };

      axios
        .post("http://localhost:3001/persons", newPersonEntry)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        });
    }
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h3>Add a new entry</h3>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
