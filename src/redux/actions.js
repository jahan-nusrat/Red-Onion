export const ADD_CART = 'ADD_CART';
export const DELIVERY_INFO = 'DELIVERY_INFO';

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

export const deliveryDetails = (info) => {
    return {
        type: DELIVERY_INFO,
        payload: info
    }
}