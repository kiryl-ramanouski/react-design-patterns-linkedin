import React, { useState } from 'react';

// Components
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
  </>
);

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    const updatedData = { ...onboardingData, ...stepData };
    setOnboardingData(updatedData);
    setCurrentIndex(currentIndex + 1);

    console.log(updatedData);
  };

  return (
    <ControlledOnboardingFlow
      currentIndex={currentIndex}
      onNext={onNext}
      onFinish={(data) => {
        console.log(data);
        alert('Onboarding complete!');
      }}
    >
      <StepOne />
      <StepTwo />
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
}

export default App;
