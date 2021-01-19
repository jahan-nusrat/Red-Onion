import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorDiv } from '../components/styles/StyleError';
import img from '../Image/img/error.jpg';

const Error404 = () => {
	return (
		<ErrorDiv className="container">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-6">
					<img src={img} alt="error-img" className="img-fluid" />
				</div>
				<div className="col-lg-4 text-center">
					<h3>404</h3>
					<p>Page not found!!</p>
					<Link to="/">
						<button className="btn">Back to HOME</button>
					</Link>
				</div>
			</div>
		</ErrorDiv>
	);
};

export default Error404;
