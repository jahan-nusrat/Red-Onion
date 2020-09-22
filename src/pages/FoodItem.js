import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaShoppingCart, FaPlus, FaMinus, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
import { SingleItem } from '../components/styles/StyleFoods';
import foodData from '../fakeData/data';

const FoodItem = () => {
	const history = useHistory();
	let { slug, id } = useParams();
	const [ selectedItem, setSelectedItem ] = useState({});
	const [ counter, setCounter ] = useState(1);

	let selectedFood = foodData.find((food) => food.slug === slug);
	const { items } = selectedFood;
	const [ menu, setMenu ] = useState({
		foods : items,
		food  : items[0]
	});

	const prevBtn = () => {
		const id = menu.food.id - 1;
		setMenu({
			...menu,
			food : items[id]
		});
	};

	const increaseCount = () => {
		setCounter(counter + 1);
	};

	const decreaseCount = () => {
		setCounter(counter - 1);
		if (counter === 1) {
			setCounter(1);
		}
	};

	const nextBtn = () => {
		const id = menu.food.id + 1;
		setMenu({
			...menu,
			food : items[id]
		});
	};

	const handleImgClick = () => {
		setSelectedItem(menu.food);
		history.replace(`/${menu.food.id}/${slug}`);
	};

	useEffect(
		() => {
			const filterItem = items.find((food) => food.id === parseInt(id));
			setSelectedItem(filterItem);
		},
		[ id, items ]
	);

	return (
		<SingleItem className="container single-item mt-5">
			<div className="row justify-content-between">
				<div className="col-lg-5">
					<h1>{selectedItem.name}</h1>
					<p>{selectedItem.info}</p>
					<div className="cart-item">
						<h2>${(selectedItem.price * counter).toFixed(2)}</h2>
						<span>
							<FaMinus onClick={decreaseCount} className="fa-icon minus" /> {counter}{' '}
							<FaPlus onClick={increaseCount} className="fa-icon plus" />
						</span>
					</div>

					<button className="btn btn-custom px-4">
						<FaShoppingCart className="fa-cart" /> Add
					</button>
					<div className="sub-menu text-center">
						<button className="btn" onClick={prevBtn} disabled={menu.food.id === 0}>
							<FaAngleLeft className="fa-angle" />
						</button>
						<img
							onClick={handleImgClick}
							src={menu.food.img}
							alt={menu.food.name}
							className="img-fluid single-img"
						/>
						<button className="btn" onClick={nextBtn} disabled={menu.food.id === menu.foods.length - 1}>
							<FaAngleRight className="fa-angle" />
						</button>
					</div>
				</div>
				<div className="col-lg-5">
					<img src={selectedItem.img} alt={selectedItem.name} className="img-fluid item-img" />
				</div>
			</div>
		</SingleItem>
	);
};

export default FoodItem;

//history.replace('<new_route>')
//history.push(yourUpdatedUrl);
