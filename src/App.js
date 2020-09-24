import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Cart from './pages/cart/Cart';
import SignUp from './pages/SignUp';
import FoodItem from './pages/FoodItem';
import NavBar from './components/Nav/NavBar';

const App = () => {
	return (
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
	);
};

export default App;
