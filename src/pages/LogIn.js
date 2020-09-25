import React from 'react';
import { FormContainer, MainDiv } from '../components/styles/StyleSignUp';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import logo from '../Image/logo2.png';
import bg from '../Image/bg2.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebaseConfig from '../components/firebase/firebase.config';
import { loggedInUser } from '../redux/actions';

const LogIn = () => {
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };
	//firebase initialize
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	//redux
	const loginInfo = useSelector((state) => state.userInfo);
	console.log(loginInfo);
	const dispatch = useDispatch();
	//state
	const [ user, setUser ] = useState({
		displayName : '',
		email       : '',
		password    : ''
	});

	//handle input data
	const handleInput = (e) => {
		if (e.target.name === 'email') {
			const regex = /\S+@\S+\.\S+/;
			regex.test();
		}
		if (e.target.name === 'password') {
			const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
			regex.test();
		}
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	//google login handle
	var provider = new firebase.auth.GoogleAuthProvider();
	const googleLogin = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				const { displayName, email } = result.user;
				setUser({
					displayName,
					email
				});
				toast.success('Logged In Successfully');
				dispatch(loggedInUser(displayName, email));

				history.replace(from);
			})
			.catch(function (error) {
				toast.error(error.message);
			});
	};

	//facebook login handle
	var fbProvider = new firebase.auth.FacebookAuthProvider();
	const fbLogin = () => {
		firebase
			.auth()
			.signInWithPopup(fbProvider)
			.then(function (result) {
				const { displayName, email } = result.user;
				setUser({ displayName, email });
				toast.success('Logged In Successfully');
				dispatch(loggedInUser(displayName, email));
				history.replace(from);
			})
			.catch(function (error) {
				toast.error(error.message);
			});
	};

	//on form submit
	const handleForm = (e) => {
		e.preventDefault();
		if (!user.email && !user.displayName) {
			document.getElementById('error').innerText = 'Enter All Values Correctly';
		}
		else {
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then((result) => {
					dispatch(loggedInUser(user.email, user.password));
					history.replace(from);
				})
				.catch((error) => {
					document.getElementById('error').innerText = error.message;
				});
		}
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
								<input
									type="email"
									name="email"
									className="form-control"
									onChange={handleInput}
									value={user.email}
									placeholder="Email"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									name="password"
									className="form-control"
									onChange={handleInput}
									value={user.password}
									placeholder="Password"
								/>
							</div>
							<button type="submit" className="btn btn-submit">
								Login
							</button>
							<div className="error-catch text-center">
								<p id="error" style={{ color: 'red' }}>
									{''}
								</p>
							</div>
							<Link to="/signup">
								<p>
									<strong>Create a new account</strong>
								</p>
							</Link>
						</form>
						<p className="text-center">
							<strong>Or Login with</strong>
						</p>
						<div className="social-media d-flex justify-content-center">
							<FaFacebookSquare onClick={fbLogin} className="icon fb" />
							<FaGoogle onClick={googleLogin} className="icon google" />
							<ToastContainer
								position="top-center"
								autoClose={2000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						</div>
					</div>
				</div>
			</FormContainer>
		</MainDiv>
	);
};

export default LogIn;
