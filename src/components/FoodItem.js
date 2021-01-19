import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaShoppingCart, FaPlus, FaMinus, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { SingleItem } from '../components/styles/StyleFoods';
import foodData from '../fakeData/data';
import { addToCart } from '../redux/actions';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const FoodItem = () => {
	const cartFoods= useSelector(state=>state.cart)
	const dispatch= useDispatch();
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
		setCounter(parseInt(counter )+ 1);
	};

	const decreaseCount = () => {
		setCounter(parseInt(counter) - 1);
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

	const inputHandler=(e)=>{
		setCounter(e.target.value)
		if(e.target.value===1){
			setCounter(1)
		}
	}

	const handleImgClick = () => {
		setSelectedItem(menu.food);
		history.replace(`/${menu.food.id}/${slug}`);
	};

	useEffect(
		() => {
			const filterItem = items?.find((food) => food?.id === parseInt(id));
			setSelectedItem(filterItem);
		},
		[ id, items ]
	);

	const handleCart=()=>{
		dispatch(addToCart(selectedItem.id, counter, slug, selectedItem.img, selectedItem.name, selectedItem.price))
		let findSameItem= cartFoods.find(item=>{
			return item.name===selectedItem.name
		})
		if(findSameItem){
			toast.error("same item can not be added to cart")
		}else{
			toast.info("Items Added to Cart")
		}
		
	}

	return (
		<SingleItem className="container single-item mt-5">
			<div className="row justify-content-between">
				<div className="col-lg-5">
					<h1>{selectedItem.name}</h1>
					<p>{selectedItem.info}</p>
					<div className="cart-item">
						<h2>$ {(selectedItem.price * counter).toFixed(2)}
						<span>
							<FaMinus onClick={decreaseCount} className="fa-icon minus" />
							<input type="number" onChange={inputHandler} value={counter} />
							<FaPlus onClick={increaseCount} className="fa-icon plus" />
						</span>
						</h2>
					</div>

					<button className="btn btn-custom px-4" onClick={handleCart}>
						<FaShoppingCart className="fa-cart" /> Add
					</button>
					<ToastContainer 
						position="top-center"
						autoClose={2000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover>
					</ToastContainer>
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