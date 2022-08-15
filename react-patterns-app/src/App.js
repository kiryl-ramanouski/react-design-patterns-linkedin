import React from 'react';

// Rest API
import axios from 'axios';

// Components
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';
import { DataSource } from './DataSource';

const getDataFunc = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>
      <DataSource getDataFunc={getDataFunc('/users/123')} resourceName="user">
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={getLocalStorageData('message')}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
