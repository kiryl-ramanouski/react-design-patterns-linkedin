import React from 'react';

// Styles
import './App.css';

// Components
import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';

const userIds = ['123', '234', '345'];

function App() {
  return (
    <>
      {userIds.map((id) => {
        return (
          <UserLoader key={id} userId={id}>
            <UserInfo />
          </UserLoader>
        );
      })}
    </>
  );
}

export default App;
