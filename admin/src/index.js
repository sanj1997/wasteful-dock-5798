import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContextProvider } from "./contexts/DarkModeContext";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</BrowserRouter>
);

