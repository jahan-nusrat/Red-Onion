export const ADD_CART = 'ADD_CART'

export const addToCart = (id, quantity, slug, img, name, price) => {
    return {
        type: ADD_CART,
        payload: {
            id,
            quantity,
            slug,
            img,
            name,
            price
        }
    }
}