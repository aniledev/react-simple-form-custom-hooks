import React from 'react';
import ReactDOM from 'react-dom/client.js';
import './Form.css';
import Form from './Form';
import reportWebVitals from './reportWebVitals';

const docElement = document.querySelector('#root');

if (docElement) {
	const root = ReactDOM.createRoot(docElement);
	root.render(
		<React.StrictMode>
			<Form />
		</React.StrictMode>,
	);
} else {
	console.log('ERROR: Root element is null / cannot be found/');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
