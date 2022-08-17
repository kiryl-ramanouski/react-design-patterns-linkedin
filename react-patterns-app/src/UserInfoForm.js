import React from 'react';

// HOCs
import { withEditableUser } from './withEditableUser';

export const UserInfoForm = withEditableUser(
  (user, onChangeUser, onSaveUser, onResetUser) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
        <label>Hair color:</label>
        <input
          type="text"
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
        <button onClick={() => onResetUser}>Reset user</button>
        <button onClick={() => onSaveUser}>Save user</button>
      </>
    ) : (
      <h1>Loading...</h1>
    );
  },
  '123'
);
