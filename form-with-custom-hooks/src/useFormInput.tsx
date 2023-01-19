import { useState } from 'react';

// Creat a custom hook to handle the form inputs
// TODO: Implement type checking for event object
export const useFormInput = (initialValue) => {
  // Within the function implement useState for updating and accessing the value of the form
  const [value, setValue] = useState(initialValue);

	// Create a handleChange function that updates the state value
	const handleChange = (param: Event | string) => {
		// Check if param is string or event object 
    if (typeof param === 'string') {
      setValue(param);
    } else {
      setValue(param.target.value);
    }
	};

  // Return the value and the handle change function in an object
  return {
    value,
    onChange: handleChange
  };
};
