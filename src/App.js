import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import FoodItem from './pages/FoodItem';
import { createContext } from 'react';
import { useState } from 'react';
import NavBar from './components/Nav/NavBar';

export const UserContext = createContext();
const App = () => {
	const [ selected, setSelected ] = useState({});
	return (
		<UserContext.Provider value={[ selected, setSelected ]}>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/:id/:slug">
						<FoodItem />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/login">
						<LogIn />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
};

export default App;
