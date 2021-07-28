import { Switch, Route, Redirect, useParams } from "react-router-dom";
import React from "react";

import Landing from "./Landing";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Landing />
			</Route>
			<Route exact path="/companies">
				<Companies />
			</Route>
			<Route path="/companies/:handle">
				<Jobs />
			</Route>
			<Route exact path="/jobs">
				<Jobs />
			</Route>
			<Route exact path="/profile">
				<Profile />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/signup">
				<Signup />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
}

export default Routes;
