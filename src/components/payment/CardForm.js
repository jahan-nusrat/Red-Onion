import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CardForm = (props) => {
	const stripe = useStripe();
	const elements = useElements();
	const [ errors, setErrors ] = useState(null);
	const [ success, setSuccess ] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type : 'card',
			card : cardElement
		});

		if (error) {
			setErrors(error.message);
			setSuccess(null);
		}
		else {
			setSuccess(paymentMethod.id);
			props.handlePayment(paymentMethod.id);
			props.setIsPaid(true)
			setErrors(null);
		}
	};

	return (
		<div className="payment-form shadow mt-5 p-3">
			<form onSubmit={handleSubmit}>
				<CardElement />
				<button className="btn btn-primary px-4 py-1 mt-4" type="submit" disabled={!stripe}>
					Pay
				</button>
			</form>
			{errors && <p className="mt-3">{errors}</p>}
			{success && <p className="mt-3">Thank you for completing your transaction</p>}
		</div>
	);
};

export default CardForm;
