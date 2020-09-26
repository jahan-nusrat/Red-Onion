import React, { useState } from 'react';
import { FaPlus, FaMinus, FaRegTimesCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { SingleProduct } from '../../components/styles/StyleCart';
import { decreaseAmount, increaseAmount, removeFromCart } from '../../redux/actions';
import PropTypes from 'prop-types';

const CartItems = (props) => {
	const { quantity, img, name, price } = props.food;
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
		dispatch(increaseAmount(props.food.id));
		setValue(value + 1);
	};

	const prevBtn = () => {
		dispatch(decreaseAmount(props.food.id));
		setValue(value - 1);
		if (value <= 1) {
			setValue(1);
		}
	};

	const removeHandle = () => {
		dispatch(removeFromCart(props.food.id));
	};

	function truncate (str, n) {
		return str.length > n ? str.substr(0, n - 1) + '....' : str;
	}

	return (
		<SingleProduct className="single-item d-flex align-items-center">
			<button className="btn btn-close">
				<FaRegTimesCircle onClick={removeHandle} className="close" />
			</button>
			<div className="single-item-img">
				<img src={img} alt={name} className="img-fluid single-img" />
			</div>
			<div className="single-item-detail">
				<h5>{truncate(name, 20)}</h5>
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

CartItems.propTypes = {
	name     : PropTypes.string,
	id       : PropTypes.number,
	quantity : PropTypes.number,
	price    : PropTypes.number
};

export default CartItems;
