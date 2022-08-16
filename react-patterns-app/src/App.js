import React, { useState } from 'react';

// Components
import { ControlledModal } from './ControlledModal';

function App() {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <ControlledModal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      >
        <h1>Modal Opened</h1>
      </ControlledModal>
      <button onClick={() => setShouldShow(true)}>
        {shouldShow ? 'Hide Modal' : 'Show Modal'}
      </button>
    </>
  );
}

export default App;
