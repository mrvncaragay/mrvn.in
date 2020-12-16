import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider, InitialState, StateReducer } from './context';

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={InitialState} reducer={StateReducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
