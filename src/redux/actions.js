export const ADD_CART = 'ADD_CART';
export const DELIVERY_INFO = 'DELIVERY_INFO';
export const INCREASE_AMOUNT = 'INCREASE_AMOUNT';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT'

export const addToCart = (id, quantity, slug, img, name, price) => {
    return {
        type: ADD_CART,
        payload: {
            id,
            quantity,
            slug,
            img,
            name,
            price,
        }
    }
}

export const deliveryDetails = (info) => {
    return {
        type: DELIVERY_INFO,
        payload: info
    }
}

export const increaseAmount = (id) => {
    return {
        type: INCREASE_AMOUNT,
        id
    }
}

export const decreaseAmount = (id) => {
    return {
        type: DECREASE_AMOUNT,
        id
    }
}