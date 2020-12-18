import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider, InitialState, StateReducer } from './context';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './styles/custom';

ReactDOM.render(
	<StateProvider initialState={InitialState} reducer={StateReducer}>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</StateProvider>,
	document.getElementById('root')
);
