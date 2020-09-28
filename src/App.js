import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Cart from './pages/cart/Cart';
import SignUp from './pages/SignUp';
import FoodItem from './pages/FoodItem';
import NavBar from './components/Nav/NavBar';
import OrderComplete from './pages/order-complete/OrderComplete';
import PrivateRoute from './components/private-route/PrivateRoute';
import User from './pages/User';
import Error404 from './pages/Error404';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<NavBar />
					<Home />
					<Footer />
				</Route>
				<Route path="/:id/:slug">
					<NavBar />
					<FoodItem />
					<Footer />
				</Route>
				<Route path="/login">
					<LogIn />
				</Route>
				<Route path="/signup">
					<SignUp />
				</Route>
				<PrivateRoute path="/cart">
					<NavBar />
					<Cart />
					<Footer />
				</PrivateRoute>
				<Route path="/user-info">
					<NavBar />
					<User />
				</Route>
				<Route path="/complete-order">
					<NavBar />
					<OrderComplete />
					<Footer />
				</Route>
				<Route path="*">
					<Error404 />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
