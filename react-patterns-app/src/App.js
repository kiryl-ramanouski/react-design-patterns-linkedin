import React from 'react';

import { Button, DangerButton, BigSuccessButton } from './partiallyApply';

function App() {
  return (
    <>
      <Button text="Regular" />
      <DangerButton text="Do not do it!" />
      <BigSuccessButton text="Yes!!" />
    </>
  );
}

export default App;
