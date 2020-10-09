const {
	ADD_CART,
	DELIVERY_INFO,
	INCREASE_AMOUNT,
	DECREASE_AMOUNT,
	REMOVE_CART,
	CLEAR_CART,
	LOGIN_USER,
	SIGNOUT_USER
} = require('./actions');

const initialState = {
	cart           : [],
	delivery       : {},
	userInfo       : {},
	paymentDetails : {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			let filterCart = [ ...state.cart ].filter((item) => {
				return item.name !== action.payload.name;
			});
			return {
				...state,
				cart : [ ...filterCart, action.payload ]
			};

		case REMOVE_CART:
			let filterId = [ ...state.cart ].filter((item) => {
				return item.id !== action.id;
			});
			return {
				cart     : [ ...filterId ],
				userInfo : state.userInfo,
				delivery : state.delivery
			};

		case CLEAR_CART:
			return {
				cart     : [],
				userInfo : state.userInfo,
				delivery : state.delivery
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
				cart     : [ ...newCart ],
				userInfo : state.userInfo,
				delivery : state.delivery
			};

		case DECREASE_AMOUNT:
			const newAgainCart = [ ...state.cart ].map((item) => {
				return item.id === action.id ? { ...item, quantity: item.quantity - 1 } : { ...item };
			});
			const quantityManage = [ ...newAgainCart ].map((item) => {
				return item.quantity <= 1 ? { ...item, quantity: 1 } : { ...item, quantity: item.quantity };
			});
			return {
				cart     : [ ...quantityManage ],
				userInfo : state.userInfo,
				delivery : state.delivery
			};

		case LOGIN_USER:
			return {
				...state,
				userInfo : action.payload,
				cart     : state.cart
			};

		case SIGNOUT_USER:
			return {
				...state,
				userInfo : {}
			};

		default:
			return state;
	}
};

export default reducer;
