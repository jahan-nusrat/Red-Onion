import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { SingleProduct } from '../../components/styles/StyleCart';
import { decreaseAmount, increaseAmount } from '../../redux/actions';
const CartItems = ({ food }) => {
	const { quantity, img, name, price } = food;
	const [ value, setValue ] = useState(quantity);
	const inputHandler = (e) => {
		const { value } = e.target;
		setValue(value);
		if (value <= 1) {
			setValue(1);
		}
	};

	const dispatch = useDispatch();

	const nxtBtn = () => {
		dispatch(increaseAmount(food.id));
		setValue(value + 1);
	};

	const prevBtn = () => {
		dispatch(decreaseAmount(food.id));
		setValue(value - 1);
		if (value <= 1) {
			setValue(1);
		}
	};

	return (
		<SingleProduct className="single-item d-flex align-items-center">
			<div className="single-item-img">
				<img src={img} alt={name} className="img-fluid single-img" />
			</div>
			<div className="single-item-detail">
				<h5>{name}</h5>
				<h4>
					<strong>${(price * value).toFixed(2)}</strong>
				</h4>
				<p>Delivery Free</p>
			</div>
			<div className="single-quantity">
				<span className="d-flex">
					<button onClick={prevBtn} className="btn minus-btn">
						<FaMinus className="fa-icon" />
					</button>
					<input onChange={inputHandler} type="number" name="quantity" value={value} />
					<button onClick={nxtBtn} className="btn plus-btn">
						<FaPlus className="fa-icon plus" />
					</button>
				</span>
			</div>
		</SingleProduct>
	);
};

export default CartItems;
