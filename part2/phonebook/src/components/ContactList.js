import React from "react";
import personsService from "../services/persons.js";

const ContactList = ({ persons, searchName, setPersons }) => {
  const viewPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName)
  );

  const deleteContact = (deletePerson) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${deletePerson.name}?`
    );
    if (confirm) {
      personsService.deleteId(deletePerson.id).then(() => {
        setPersons(persons.filter((person) => person.id !== deletePerson.id));
      });
    }
  };

  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {viewPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}&nbsp;
            <button onClick={() => deleteContact(person)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
