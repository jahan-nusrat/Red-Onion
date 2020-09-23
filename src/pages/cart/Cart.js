import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryDetails } from '../../redux/actions';
import CartItems from './CartItems';

const Cart = () => {
	const cartFoods = useSelector((state) => state.cart);
	const deliveryInfo = useSelector((state) => state.delivery);
	console.log(cartFoods);
	const dispatch = useDispatch();
	const [ isDelivery, setIsDelivery ] = useState(false);
	const [ delivery, setDelivery ] = useState({
		type        : '',
		road        : '',
		flat        : '',
		name        : '',
		instruction : ''
	});

	const handleInput = (e) => {
		setDelivery({
			...delivery,
			[e.target.name]: e.target.value
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		setIsDelivery(true);
		dispatch(deliveryDetails(delivery));
	};
	return (
		<div className="container cart-section">
			<div className="row justify-content-around align-items-center">
				<div className="col-lg-5">
					<form onSubmit={handleForm}>
						<h4>Edit Delivery Details</h4>
						<hr />
						<div className="form-group">
							<input
								type="text"
								name="type"
								className="form-control"
								placeholder="Delivery to Door"
								onChange={handleInput}
								value={delivery.type}
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="road"
								className="form-control"
								placeholder="Road No."
								onChange={handleInput}
								value={delivery.road}
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="flat"
								className="form-control"
								placeholder="Flat, Suit or Floor"
								onChange={handleInput}
								value={delivery.flat}
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="name"
								className="form-control"
								placeholder="Business name"
								onChange={handleInput}
								value={delivery.name}
								required
							/>
						</div>
						<div className="form-group">
							<textarea
								name="instruction"
								cols="60"
								rows="8"
								placeholder="Add delivery instruction"
								onChange={handleInput}
								value={delivery.instruction}
								required
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Save & Continue
						</button>
					</form>
				</div>
				<div className="col-lg-5">
					<div className="address-details">
						<h6>
							From <strong>Gulshan Plaza Restaurant GPR</strong>
						</h6>
						<p>Arriving in 20-30 min</p>
						{deliveryInfo.road && <p>{deliveryInfo.road}</p>}
					</div>

					{cartFoods.length >= 1 ? (
						<div className="cart-items">
							{cartFoods.map((food) => {
								return <CartItems key={food.id} food={food} />;
							})}
						</div>
					) : (
						<p>No foods in the cart</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Cart;
