import React, { useState } from "react";
import personsService from "../services/persons.js";

const InputForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    const personExists = persons.find((person) => person.name === newName);

    const PersonEntry = {
      name: newName,
      number: newNumber,
    };

    if (personExists) {
      if (
        window.confirm(
          [
            `${newName} is already added to phonebook, would you like `,
            `to replace the old number with a new one?`,
          ].join("")
        )
      ) {
        personsService
          .update(personExists.id, PersonEntry)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personExists.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      personsService.create(PersonEntry).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
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
