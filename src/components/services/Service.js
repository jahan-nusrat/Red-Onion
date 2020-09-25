import React from 'react';
import data from '../../fakeData/services';
import { ServiceContainer } from '../styles/StyleService';
import { FaArrowCircleRight } from 'react-icons/fa';

const Service = () => {
	return (
		<ServiceContainer className="container">
			<div className="section-title">
				<h2>
					<strong>why you choose us</strong>{' '}
				</h2>
				<p>
					El Diablo’s cook top is nothing short of extraordinary. Located on a Spanish Island, this restaurant
					cooks its meals over an active volcanic hole in the ground.
				</p>
			</div>
			<div className="row align-items-center">
				{data.map((info) => {
					return (
						<div className="col-lg-4" key={info.id}>
							<div className="service-box">
								<div className="service-img">
									<img src={info.img} alt={info.title} className="img-fluid" />
								</div>
								<div className="content">
									<div className="title d-flex">
										<img src={info.icon} alt="" className="img-fluid" />
										<h5>
											<strong>{info.title}</strong>
										</h5>
									</div>
									<p>{info.description}</p>
									<button className="btn">
										<strong>
											See more <FaArrowCircleRight className="arrow" />
										</strong>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</ServiceContainer>
	);
};

export default Service;
