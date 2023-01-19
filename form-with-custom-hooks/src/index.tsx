import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';
// @ts-ignore 
import Form from './Form.tsx';
// @ts-ignore 
import reportWebVitals from './report-web-vitals.tsx';

const docElement = document.querySelector('#root');

if (docElement) {
  // @ts-ignore https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43848
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
