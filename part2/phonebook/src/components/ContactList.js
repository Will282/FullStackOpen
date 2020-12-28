import React from "react";

const ContactList = ({ persons, searchName }) => {
  const viewPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName)
  );

  return (
    <div>
      <h2>Numbers</h2>
      {viewPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default ContactList;
