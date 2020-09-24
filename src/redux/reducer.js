const { ADD_CART, DELIVERY_INFO, INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_CART } = require('./actions');

const initialState = {
	cart     : [],
	delivery : {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
				cart : [ ...state.cart, action.payload ]
			};

		case REMOVE_CART:
			let filterId = [ ...state.cart ].filter((item) => {
				return item.id !== action.id;
			});
			return {
				cart : [ ...filterId ]
			};

		case DELIVERY_INFO:
			return {
				...state,
				delivery : action.payload
			};

		case INCREASE_AMOUNT:
			const newCart = [ ...state.cart ].map((item) => {
				return item.id === action.id ? { ...item, quantity: item.quantity + 1 } : { ...item };
			});
			return {
				cart : [ ...newCart ]
			};

		case DECREASE_AMOUNT:
			const newAgainCart = [ ...state.cart ].map((item) => {
				return item.id === action.id ? { ...item, quantity: item.quantity - 1 } : { ...item };
			});
			const quantityManage = [ ...newAgainCart ].map((item) => {
				return item.quantity <= 1 ? { ...item, quantity: 1 } : { ...item, quantity: item.quantity };
			});
			return {
				cart : [ ...quantityManage ]
			};

		default:
			return state;
	}
};

export default reducer;
