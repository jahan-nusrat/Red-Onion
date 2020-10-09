export const ADD_CART = 'ADD_CART';
export const DELIVERY_INFO = 'DELIVERY_INFO';
export const INCREASE_AMOUNT = 'INCREASE_AMOUNT';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';
export const REMOVE_CART = 'REMOVE_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const PAYMENT_USER = 'PAYMENT_USER';

export const addToCart = (id, quantity, slug, img, name, price) => {
	return {
		type    : ADD_CART,
		payload : {
			id,
			quantity,
			slug,
			img,
			name,
			price
		}
	};
};

export const removeFromCart = (id) => {
	return {
		type : REMOVE_CART,
		id
	};
};

export const clearCart = () => {
	return {
		type : CLEAR_CART
	};
};

export const deliveryDetails = (info) => {
	return {
		type    : DELIVERY_INFO,
		payload : info
	};
};

export const increaseAmount = (id) => {
	return {
		type : INCREASE_AMOUNT,
		id
	};
};

export const decreaseAmount = (id) => {
	return {
		type : DECREASE_AMOUNT,
		id
	};
};

export const loggedInUser = (info) => {
	return {
		type    : LOGIN_USER,
		payload : info
	};
};

export const signedOutUser = () => {
	return {
		type : SIGNOUT_USER
	};
};
