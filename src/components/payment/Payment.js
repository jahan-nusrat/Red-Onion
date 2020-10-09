import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';

const stripePromise = loadStripe(
	'pk_test_51HZrSYLPpTSttWzfnY25jge0oofYI2nF5CkFkDqsoMrvEFpuHa7l5WoZMEtZVWMwfsqSVXDjxGhq2FtT79KY94lK00DC8xeXHk'
);

const Stripe = ({ handlePayment }) => {
	return (
		<Elements stripe={stripePromise} style={{ width: '200px', margin: 'auto' }}>
			<CardForm handlePayment={handlePayment} />
		</Elements>
	);
};

export default Stripe;
