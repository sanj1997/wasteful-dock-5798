import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContextProvider } from "./contexts/DarkModeContext";
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<DarkModeContextProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</DarkModeContextProvider>
	</BrowserRouter>
);

