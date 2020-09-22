export const ADD_CART = 'ADD_CART'

export const addToCart = (id) => {
    return {
        type: ADD_CART,
        id
    }
}