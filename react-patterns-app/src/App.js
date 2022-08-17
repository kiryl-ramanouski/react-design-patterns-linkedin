import React from 'react';

import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

function App() {
  return (
    <>
      <UserInfo userId="123" />
      <ProductInfo productId="2345" />
    </>
  );
}

export default App;
