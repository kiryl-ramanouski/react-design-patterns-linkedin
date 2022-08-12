import React from 'react';

// Components
import SplitScreen from './SplitScreen';

// Styles
import './App.css';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left</h1>;
};

const RightHandComponent = () => {
  return <p style={{ backgroundColor: 'red' }}>Right</p>;
};

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      leftWeight={1}
      rightWeight={3}
    />
  );
}

export default App;
