import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	const loginInfo = useSelector((state) => state.userInfo);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				loginInfo.email || sessionStorage.getItem('token') ? (
					children
				) : (
					<Redirect
						to={{
							pathname : '/login',
							state    : { from: location }
						}}
					/>
				)}
		/>
	);
};

export default PrivateRoute;
