import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import food from '../../fakeData/data';
import { BtnStyle } from '../styles/StyleFoods';
import Menu from './Menu';

const Foods = () => {
	const history=useHistory()
	const cartFoods= useSelector(state=>state.cart)
	const [ item, setItems ] = useState({});
	const [ showItems, setShowItems ] = useState({
		type     : 'Breakfast',
		property : food[0],
		slug     : 'breakfast'
	});

	useEffect(
		() => {
			let foods = food.filter((item) => {
				return item.type === showItems.type;
			});
			setItems(foods);
		},
		[ showItems.type ]
	);

	const handleClick = (event) => {
		let menu = food.filter((item) => {
			return item.type === event.currentTarget.innerText;
		});
		setShowItems({
			type     : menu[0].type,
			property : food[menu[0].id],
			slug     : menu[0].slug
		});
	};

	const checkoutClick=()=>{
		history.push('/cart')
	}

	return (
		<BtnStyle className="container">
			<div className={ `btn-type text-center active-${showItems.property.id}`}>
				<button onClick={handleClick} className="btn mx-3 breakfast">
					Breakfast
				</button>
				<button onClick={handleClick} className="btn mx-3 lunch">
					Lunch
				</button>
				<button onClick={handleClick} className="btn mx-3 dinner">
					Dinner
				</button>
			</div>
			<div className={`row active-item-${showItems.property.id}`}>
				{item[0]?.items.map((food) => {
					return <Menu key={food.id} food={food} slug={item[0]?.slug} />;
				})}
			</div>
			<div className="checkout">
				<button onClick={checkoutClick} className="btn checkout-btn" disabled={cartFoods.length===0}>Checkout Your Food</button>
			</div>
		</BtnStyle>
	);
};

export default Foods;
