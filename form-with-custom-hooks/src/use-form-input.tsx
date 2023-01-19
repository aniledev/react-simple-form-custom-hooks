import {useState} from 'react';

type Event = {
	target: {
		value: string;
	};
};

// Creat a custom hook to handle the form inputs
export const useFormInput = (initialValue: string) => {
	// Within the function implement useState for updating and accessing the value of the form
	const [value, setValue] = useState(initialValue);

	// Create a handleChange function that updates the state value
	const handleChange = (parameter: Event | string) => {
		// Check if param is string or event object
		if (typeof parameter === 'string') {
			setValue(parameter);
		} else {
			setValue(parameter.target.value);
		}
	};

	// Return the value and the handle change function in an object
	return {
		value,
		onChange: handleChange,
	};
};
