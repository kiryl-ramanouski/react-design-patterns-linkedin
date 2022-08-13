import React from 'react';

export const UserInfo = ({ name, age, hairColor, hobbies }) => {
  return (
    <>
      <h3>NameL {name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};
