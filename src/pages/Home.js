import React from 'react';
import Foods from '../components/Food-items/Foods';
import Hero from '../components/Hero/hero';
import Service from '../components/services/Service';

const Home = () => {
	return (
		<header>
			<Hero />
			<Foods />
			<Service />
		</header>
	);
};

export default Home;
