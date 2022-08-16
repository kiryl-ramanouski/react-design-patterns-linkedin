import React, { useState, useEffect } from 'react';

export const ControlledForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [nameInputError, setNameInputError] = useState('');

  // Validation
  useEffect(() => {
    if (name.length < 2) {
      setNameInputError('Name must be two or more characters');
    } else {
      setNameInputError('');
    }
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(hairColor);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Heir Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
