import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
	const cartFoods = useSelector((state) => state.cart);
	console.log(cartFoods);
	const handleForm = (e) => {
		e.preventDefault();
	};
	return (
		<div className="container cart-section">
			<div className="row justify-content-around align-items-center">
				<div className="col-lg-5">
					<form onSubmit={handleForm}>
						<h4>Edit Delivery Details</h4>
						<hr />
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Delivery to Door" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Road No." />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Flat, Suit or Floor" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Business name" />
						</div>
						<div className="form-group">
							<textarea name="" cols="60" rows="8" placeholder="Add delivery instruction" />
						</div>
						<button type="submit" className="btn btn-primary">
							Save & Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Cart;
