const { ADD_CART, DELIVERY_INFO } = require('./actions');

const initialState = {
	cart     : [],
	delivery : {}
};

const reducer = (state = initialState, action) => {
	console.log(state);
	console.log(action);
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
				cart : [ ...state.cart, action.payload ]
			};
		case DELIVERY_INFO:
			return {
				...state,
				delivery : action.payload
			};
		default:
			return state;
	}
};

export default reducer;
