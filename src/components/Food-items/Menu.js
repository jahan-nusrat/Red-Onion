import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ food, slug }) => {
	const { img, name, title, price, id } = food;

	return (
		<div className="card-box col-lg-4">
			<Link to={`/${id}/${slug}`}>
				<div className="card">
					<div className="card-body">
						<img src={img} alt={name} className="img-fluid" />
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{title}</p>
						<h4>${price}</h4>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Menu;
