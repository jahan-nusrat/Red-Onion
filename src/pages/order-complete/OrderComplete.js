import React from 'react';
import { Order } from '../../components/styles/StyleOrder';
import { FaCircle } from 'react-icons/fa';
import img from '../../Image/map.jpg';
import rider from '../../Image/img/rider.png';
import helmet from '../../Image/img/helmet.png';
import { useSelector } from 'react-redux';

const OrderComplete = () => {
	const deliveryAddress = useSelector((state) => state.delivery);

	return (
		<Order className="container">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-7">
					<img src={img} alt="map" className="img-fluid map" />
				</div>
				<div className="col-lg-4 left-container">
					<div className="rider-img">
						<img src={rider} alt="rider-img" className="img-fluid rider" />
					</div>
					<div className="order-location">
						<h6>
							<FaCircle className="circle" />
							<strong>Your Location</strong>
						</h6>
						{deliveryAddress ? <p>{deliveryAddress.road}</p> : ''}

						<div className="shop-address">
							<h6>
								<FaCircle className="circle" />
								<strong>Shop Address</strong>
							</h6>
							<p>Gulshan Plaza Restaura GPR</p>
						</div>
					</div>
					<div className="estimated-delivery">
						<h2>
							<strong>09:30</strong>
						</h2>
						<p>Estimated delivery time</p>
					</div>
					<div className="rider-info d-flex align-items-center">
						<img src={helmet} alt="helmet" className="img-fluid helmet" />
						<div className="my-rider">
							<h6>
								<strong>Hamim</strong>
							</h6>
							<p>Your rider</p>
						</div>
					</div>
					<button className="btn contact-btn">Contact</button>
				</div>
			</div>
		</Order>
	);
};

export default OrderComplete;
