import React, { useState } from 'react';

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = ({ stepData }) => {
    const nextIndex = currentIndex + 1;

    // Easy way to combine two {}:
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    console.log(updatedData);

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
  };

  // The part of a string (before [currentIndex]) below just covers us in the case
  // that children is only a single element, where children wouldn't actually be an array.
  const currentChild = React.Children.toArray(children)[currentIndex];

  // This if checks the currentChild and clone it with goToNext property inside.
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  } else {
    return currentChild;
  }
};
