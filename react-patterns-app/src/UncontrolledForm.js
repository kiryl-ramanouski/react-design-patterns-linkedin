import React, { useRef } from 'react';

export const UncontrolledForm = () => {
  const nameInput = useRef();
  const ageInput = useRef();
  const hairColorInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input
        name="hairColor"
        type="text"
        placeholder="Heir Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
