import React from 'react';
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
