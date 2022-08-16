import React, { useState } from 'react';

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  // The part of a string (before [currentIndex]) below just covers us in the case
  // that children is only a single element, where children wouldn't actually be an array.
  const currentChild = React.Children.toArray(children)[currentIndex];

  // This if checks the currentChild and clone it with goToNext property inside.
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};
