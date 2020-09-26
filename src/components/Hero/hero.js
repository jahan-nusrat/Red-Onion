import React from 'react';
import { HeroContainer } from '../styles/StyleHero';

const Hero = () => {
	const handleForm = (e) => {
		e.preventDefault();
	};
	return (
		<HeroContainer className="hero">
			<div className="container text-center hero-content">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<h1>Best food waiting for your belly</h1>

						<form className="row justify-content-center mt-4" onSubmit={handleForm}>
							<div className="form-group col-md-8">
								<input type="text" name="search" className="form-control" />
								<button className="btn">Search</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</HeroContainer>
	);
};

export default Hero;
