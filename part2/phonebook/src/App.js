import React, { useState } from "react";
import ContactList from "./components/ContactList";
import InputForm from "./components/InputForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);

  return (
    <div>
      <InputForm persons={persons} setPersons={setPersons} />
      <ContactList persons={persons} />
    </div>
  );
};

export default App;
