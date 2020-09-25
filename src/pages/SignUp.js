import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, MainDiv } from '../components/styles/StyleSignUp';
import logo from '../Image/logo2.png';
import bg from '../Image/bg2.png';

const SignUp = () => {
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
								<input type="text" className="form-control" placeholder="Name" />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Confirm Password" />
							</div>
							<button type="submit" className="btn btn-submit">
								Sign Up
							</button>
							<Link to="/login">
								<p>Already have an account</p>
							</Link>
						</form>
					</div>
				</div>
			</FormContainer>
		</MainDiv>
	);
};

export default SignUp;
