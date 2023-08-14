import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';
import { AuthProvider } from './contexts/auth';



function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
}

export default App;
