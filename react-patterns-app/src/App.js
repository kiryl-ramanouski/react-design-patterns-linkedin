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

function App() {
  return (
    <>
      <DataSource getDataFunc={getDataFunc('/users/123')} resourceName="user">
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={getDataFunc('/products/1234')}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>
    </>
  );
}

export default App;
