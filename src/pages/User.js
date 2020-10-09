import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserDiv } from '../components/styles/StyleUser';
import icon from '../Image/ICON/user.png';

const User = () => {
	const cartInfo = useSelector((state) => state.cart);
	const loginInfo = useSelector((state) => state.userInfo);

	return (
		<UserDiv className="container text-center">
			<div className="row justify-content-center">
				<div className="col-md-6 profile">
					<div className="user-img">
						{loginInfo.photoURL ? (
							<img src={loginInfo.photoURL} alt="user-img" className="img-fluid" />
						) : (
							<img src={icon} alt="user-img" className="img-fluid" />
						)}
					</div>
					{loginInfo.email ? (
						<div className="user-name">
							<h3>
								<strong>{loginInfo.displayName}</strong>
							</h3>
							<p>{loginInfo.email}</p>
						</div>
					) : (
						<p>You are not logged In</p>
					)}
					{cartInfo.length >= 1 ? (
						<h4>You have {cartInfo.length} items in cart</h4>
					) : (
						<h4>You have no items in cart</h4>
					)}
				</div>
			</div>
			<div className="row align-items-center justify-content-center">
				{cartInfo.map((item) => {
					return (
						<div className="col-lg-5 text-center" key={item.id}>
							<div className="cart-items mb-3">
								<Link to="/cart">
									<strong>
										Order id: #{item.id}-{item.slug}
									</strong>
								</Link>

								<img src={item.img} alt={item.name} className="img-fluid" />
								<h6 className="mt-2">
									<strong>{item.name}</strong>{' '}
								</h6>
								<h6>Subtotal: ${(item.price * item.quantity).toFixed(2)}</h6>
							</div>
						</div>
					);
				})}
			</div>
		</UserDiv>
	);
};

export default User;
