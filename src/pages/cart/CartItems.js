import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { SingleProduct } from '../../components/styles/StyleCart';

const CartItems = ({ food }) => {
	const { quantity, img, name, price } = food;
	return (
		<SingleProduct className="single-item d-flex align-items-center">
			<div className="single-item-img">
				<img src={img} alt={name} className="img-fluid single-img" />
			</div>
			<div className="single-item-detail">
				<h5>{name}</h5>
				<h4>
					<strong>${price}</strong>
				</h4>
				<p>Delivery Free</p>
			</div>
			<div className="single-quantity">
				<span>
					<FaMinus className="fa-icon" />
					<input type="number" value={quantity} />
					<FaPlus className="fa-icon plus" />
				</span>
			</div>
		</SingleProduct>
	);
};

export default CartItems;
