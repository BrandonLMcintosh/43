import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";
import Body from "./Body";
import Context from "./Context";

import JoblyApi from "./api";

import "./App.css";

function App() {
	const [user, setUser] = useState(null);
	async function login(username, password) {
		setUser(JoblyApi.authLogin(username, password));
	}
	return (
		<BrowserRouter>
			<Context.Provider value={{ user, login }}>
				<div className="App">
					<NavBar />
					<Body />
				</div>
			</Context.Provider>
		</BrowserRouter>
	);
}

export default App;
