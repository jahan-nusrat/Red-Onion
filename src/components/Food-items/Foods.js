import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import food from '../../fakeData/data';
import Menu from './Menu';

const Foods = () => {
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

	return (
		<div className="container">
			<div className="btn-type text-center">
				<button onClick={handleClick} className="btn btn-success mx-3">
					Breakfast
				</button>
				<button onClick={handleClick} className="btn btn-success mx-3">
					Lunch
				</button>
				<button onClick={handleClick} className="btn btn-success mx-3">
					Dinner
				</button>
			</div>
			<div className="row">
				{item[0]?.items.map((food) => {
					return <Menu key={food.id} food={food} slug={item[0]?.slug} />;
				})}
			</div>
		</div>
	);
};

export default Foods;
