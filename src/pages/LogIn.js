import React from 'react';
import { FormContainer, MainDiv } from '../components/styles/StyleSignUp';
import logo from '../Image/logo2.png';
import bg from '../Image/bg2.png';
import { Link } from 'react-router-dom';

const LogIn = () => {
	const handleForm = (e) => {
		e.preventDefault();
	};

	return (
		<MainDiv>
			<img src={bg} alt="" className="img-fluid bg" />
			<FormContainer className="container">
				<img src={logo} alt="banner" />

				<div className="row justify-content-center">
					<div className="col-md-4">
						<form onSubmit={handleForm}>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" />
							</div>
							<button type="submit" className="btn btn-submit">
								Login
							</button>
							<Link to="/signup">
								<p>New User</p>
							</Link>
						</form>
					</div>
				</div>
			</FormContainer>
		</MainDiv>
	);
};

export default LogIn;
