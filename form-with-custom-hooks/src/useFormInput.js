import { useState } from 'react';

// Creat a custom hook to handle the form inputs
export const useFormInput = (initialValue) => {
  // Within the function implement useState for updating and accessing the value of the form
  const [value, setValue] = useState(initialValue);

  // Create a handleChange function that updates the state value
  const handleChange = (param) => {
    // Check if the object is an event with the target property
    const newValue = param.target ? param.target.value : param;
    setValue(newValue);
  };

  // Return the value and the handle change function in an object
  return {
    value,
    onChange: handleChange
  };
};
